#load "unix.cma"
#load "str.cma"

open Arg
open Printf

type mode = {
  w: int;
  h: int;
  r: float;
}

type screen = {
  name: string;
  connected: bool;
  on: bool;
  primary: bool;
  modes: mode list
}

type state = {
  prim: screen;
  externals: screen list
}

let is_substring sub s =
  try
    Str.search_forward (Str.regexp sub) s 0 |> ignore;
    true
  with Not_found -> false

let extract p =
  let rec aux (o, acc) = function
    | [] -> o, acc
    | x :: xs ->
      if p x then (Some x, List.rev acc @ xs)
      else aux (o, x :: acc) xs
  in aux (None, [])

let classify modes = function
  | name :: c :: p :: xs ->
    {
      name;
      connected = c = "connected";
      on = (try List.nth xs 9 |> ignore; true
            with _ -> false);
      primary = p = "primary";
      modes
    }
  | _ -> assert false

let get_mode = function
  | res :: rate :: _ ->
    begin match Str.split (Str.regexp "x") res with
      | w :: h :: _ ->
        let trim_i s =
          if is_substring "i" s then
            String.(sub s 0 (length s - 1))
          else
            s
        in
        {
          w = int_of_string (trim_i w);
          h = int_of_string (trim_i h);
          r = float_of_string (String.sub rate 0 5)
        }
      | _ -> assert false
    end
  | _ -> assert false

let split =
  Str.split (Str.regexp "[ \t]+")

let get () =
  let pr = Unix.open_process_in "xrandr" in
  let scan = ref false in
  let line = ref (input_line pr) in
  let modes = ref [] in
  let screens = ref [] in
  begin try
      while true do
        if is_substring "connected" !line then
          let l = !line in
          scan := not (is_substring "disconnected" l);
          line := input_line pr;
          while !scan do
            let mode = split !line |> get_mode in
            modes := mode :: !modes;
            line := input_line pr;
            scan := not (is_substring "connected" !line
                         || is_substring "disconnected" !line)
          done;
          screens := (split l |> classify (List.rev !modes)) :: !screens;
          modes := []
        else
          line := input_line pr;
      done
    with e ->
      Unix.close_process_in pr |> ignore
  end;
  let primary, externals =
    extract (fun {primary} -> primary) (List.rev !screens)
  in
  match primary with
  | Some prim -> { prim; externals }
  | None -> assert false

let toggle_ext = ref false
let toggle_primary = ref false
let toggle_mirror = ref false

let find_res { prim; externals } =
  let open List in
  let widths {modes} = map (fun {w; h} -> w, h) modes in
  let heights {modes} = map (fun {w; h} -> h, w) modes in
  let max_match dim =
    let ref_dims = dim prim in
    let dims = map dim externals in
    let find_dim d = function
      | [] -> 0, 0
      | dim -> d, assoc d dim
    in
    let matches =
      fold_left (fun matches (d1, d2 as d) ->
          try
            let matches' = d :: map (find_dim d1) dims in
            if d1 >= (hd matches |> fst) then matches' else matches
          with Not_found -> matches)
        (List.map (fun _ -> 0, 0) (prim :: externals)) ref_dims
    in
    if hd matches |> fst = 0 then raise Not_found else matches
  in
  try
    max_match widths
  with Not_found ->
    max_match heights
    |> map (fun (h, w) -> w, h)

let make_opt ({prim; externals} as s) =
  let matches = find_res s in
  let w, h = List.hd matches in
  let t_prim =
    sprintf "--output %s %s" prim.name
      (if !toggle_primary && prim.on
       then "--off"
       else if !toggle_mirror
       then sprintf "--mode %dx%d" w h
       else "--auto")
  in
  let _, t_ext = List.fold_right2
      (fun { name; connected; on } (w', h') (previous, opt) ->
         (if connected then name else previous),
         sprintf "%s --output %s %s"
           opt
           name
           (if connected then
              if !toggle_ext && on
              then "--off"
              else if !toggle_mirror
              then sprintf "--mode %dx%d --scale-from %dx%d --same-as %s"
                  w' h' w h prim.name
              else "--auto --left-of " ^ previous
            else "--off"))
      externals (List.tl matches)
      (prim.name, t_prim)
  in
  print_endline t_ext;
  t_ext

let speclist = [
  "-e", Set toggle_ext, " Toggle external monitors";
  "-p", Set toggle_primary, " Toggle primary display";
  "-m", Set toggle_mirror, " Toggle mirror mode"
]

let print_state {prim; externals} =
  let open Printf in
  let print_screens =
    let print_screen {name; connected; on; primary; modes} =
      let print_modes _ =
        let print_mode {w; h; r} =
          printf "%ix%i %.2f\n" w h r
        in
        List.iter print_mode
      in
      printf "%s - %s - %s%s\n%a"
        name
        (if connected then "connected" else "disconnected")
        (if on then "ON" else "OFF")
        (if primary then " (primary)" else "")
        print_modes modes
    in
    List.iter print_screen
  in
  print_screens (prim :: externals)

let _ =
  parse speclist (fun _ -> ()) "";
  let s = get () in
  print_state s;
  let opt = make_opt s in
  let pr = Unix.open_process_in ("xrandr " ^ opt) in
  Unix.close_process_in pr |> ignore;
  Unix.system "sh ~/.scripts/fehbg" |> ignore

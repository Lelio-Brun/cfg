#load "unix.cma"
#load "str.cma"

let is_substring sub s =
  try
    Str.search_forward (Str.regexp sub) s 0 |> ignore;
    true
  with Not_found -> false

let process s =
  try
    Str.search_forward (Str.regexp "https?://.*\/\(.*\)\..*$") s 0 |> ignore;
    Str.matched_group 1 s
  with Not_found ->
  try
    Str.search_forward (Str.regexp "[^:]*: *\(.*\)") s 0 |> ignore;
    Str.matched_group 1 s
  with Not_found -> s

let get () =
  let pr = Unix.open_process_in "mpc" in
  let read_lines () =
    let rec read acc =
      try read (input_line pr :: acc)
      with e -> Unix.close_process_in pr |> ignore; acc
    in List.rev (read [])
  in
  "<fc=lightcyan>" ^
  begin match read_lines () with
    | t :: s :: _ ->
      if is_substring "playing" s
      then "<fn=1></fn> " ^ process t
      else if is_substring "paused" s
      then "<fn=1></fn>"
      else ""
    | _ -> ""
  end
  ^ "</fc>"

let _ =
  get () |> print_string

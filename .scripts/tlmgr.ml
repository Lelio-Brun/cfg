#load "unix.cma"
#load "str.cma"

open Arg
open Format

let unit = ref ""
let ext = ref "sty"
let update = ref false
let force = ref false
let remove = ref false

let speclist = [
  "-ext", Set_string ext, "";
  "-update", Set update, "";
  "-f", Set force, "";
  "-x", Set remove, ""
]

let rec search strict =
  let filename =
    if !unit = "" then ""
    else if strict then sprintf "/%s.%s" !unit !ext
    else sprintf "%s.%s" !unit !ext
  in
  let cmd = sprintf "tlmgr search --global --file %s" filename in
  let pr = Unix.open_process_in cmd in
  let read_lines () =
    let rec read acc =
      try read (input_line pr :: acc)
      with e ->
      match Unix.close_process_in pr with
      | Unix.WEXITED 0 -> acc
      | _ -> exit 1
    in List.rev (read [])
  in
  let gather =
    let r = Str.regexp "\\(^[^:]+\\):$" in
    let rec files (fs, ls as acc) = function
      | [] -> acc
      | (l :: _) as ls when Str.string_match r l 0 ->
        (fs, ls)
      | l :: ls' ->
        files (l :: fs, ls) ls'
    in
    let rec package acc = function
      | [] -> acc
      | l :: ls when Str.string_match r l 0 ->
        let pkg = Str.matched_group 1 l in
        let fs, ls = files ([], []) ls in
        package ((pkg, fs) :: acc) ls
      | _ -> assert false
    in
    package []
  in
  match read_lines () |> List.tl |> gather with
  | [] when strict -> search false
  | l -> l

let rec question msg yes =
  printf "%s? (Y/n) " msg;
  print_flush ();
  match read_line () |> String.lowercase with
  | "" | "y" -> yes ()
  | "n" -> exit 0
  | _ -> question msg yes

let install ls =
  let cmd = sprintf "tlmgr install %s" in
  let install pkg =
    question (sprintf "Install %s" pkg) (fun () -> Unix.system (cmd pkg) |> ignore)
  in
  match ls with
  | [] -> assert false
  | [pkg, _] -> install pkg
  | _ -> assert false

let uninstall ls =
  let cmd = sprintf "tlmgr remove %s" in
  let rec uninstall pkg =
    question (sprintf "Remove %s" pkg) (fun () -> Unix.system (cmd pkg) |> ignore)
  in
  match ls with
  | [] -> assert false
  | [pkg, _] -> uninstall pkg
  | _ -> assert false

let (>>=) p p' =
  match Unix.system p with
  | Unix.WEXITED 0 -> p'
  | _ -> exit 1

let update_all () =
  "tlmgr update --self --all" >>= "tlmgr path add" >>=
  Unix.system "fmtutil-sys --all" |> ignore

let () =
  parse speclist (fun f -> unit := f) "";
  if !update then update_all ()
  else if !force then install [!unit, []]
  else search true |> if !remove then uninstall else install

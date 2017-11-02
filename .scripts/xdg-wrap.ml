#load "unix.cma"

open Arg
open Printf

let msg_query = "xdg-wrap query [options] <file>"
let msg_set = "xdg-wrap set <filetype> <application>"
let msg = sprintf "xdg-wrap [query|set] [options]\n\t%s\n\t%s"
    msg_query msg_set

let query_mode = ref false
let set_mode = ref false

let query_application = ref false

let opts = ref []
let opts_query = [
  "-da", Set query_application, " Query default application"
]

let exec =
  let cpt = ref 0 in
  let first = ref "" in
  let call opt = Unix.system ("xdg-mime " ^ opt) |> ignore in
  function
  | "query" ->
    query_mode := true;
    opts := opts_query
  | "set" ->
    set_mode := true;
  | s when !query_mode ->
    let opt = sprintf "query %s \"%s\""
        (if !query_application then "default" else "filetype")
        s
    in call opt
  | s when !set_mode && !cpt < 2 ->
    begin if !cpt = 0 then
        first := s
      else
        let opt = sprintf "default %s.desktop %s" s !first in
        call opt
    end;
    incr cpt
  | _ -> usage opts_query msg; exit 1

let _ =
  parse_dynamic opts exec msg

#load "unix.cma"

let b_min = 2.
let b_max = 100.
let s_min = log10 b_min
let s_max = log10 b_max
let d = log10 (b_max /. b_min)
let step = 10.

let get () =
  let pr = Unix.open_process_in "xbacklight -get" in
  let f = pr |> input_line |> float_of_string in
  Unix.close_process_in pr |> ignore;
  f

let set b =
  let cmd = Printf.sprintf "xbacklight -set %f" (floor (b +. 0.5)) in
  print_endline cmd;
  Unix.system cmd |> ignore

let to_step b = step *. log10 b /. d

let from_step s =
  let b = d *. s /. step in
  max (min (10. ** b) b_max) b_min

let toggle n =
  set (if n > 0. then 0. else b_max)

let _ =
  if Array.length Sys.argv < 2 then exit 1;
  let n = get () in
  let s = to_step n in
  let k = if Array.length Sys.argv > 2 then float_of_string Sys.argv.(2) else 1. in
  let s, tog = match Sys.argv.(1) with
    | "-inc" -> s +. k, false
    | "-dec" -> s -. k, false
    | "-tog" -> 0., true
    | _ -> exit 1
  in
  if tog then toggle n else s |> from_step |> set

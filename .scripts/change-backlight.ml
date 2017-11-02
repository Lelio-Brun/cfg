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

let set b = Unix.system (Printf.sprintf "xbacklight -set %f" (floor (b +. 0.5))) |> ignore

let to_step b = step *. log10 b /. d

let from_step s =
  let b = d *. s /. step in
  max (min (10. ** b) b_max) b_min

let _ =
  if Array.length Sys.argv < 2 then exit 1;
  let s = get () |> to_step in
  let s = match Sys.argv.(1) with
    | "-inc" -> s +. 1.
    | "-dec" -> s -. 1.
    | _ -> exit 1
  in
  s |> from_step |> set

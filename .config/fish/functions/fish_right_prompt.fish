function fish_right_prompt
    set -l switch (opam switch show --safe)
    set -l switchp (which ocamlc | grep -Po '.opam/\K([^/]+)(?=/)')
    if test "$switch" = "$switchp"
        set_color green
    else
        set_color red
    end
    echo -n $switch
end

function fish_opam_switch
    set -l switch (opam switch show --safe)
    set -l switchp (which ocamlc | grep -Po '.opam/\K([^/]+)(?=/)')
    if test "$switch" = "$switchp"
        set_color yellow
    else
        set_color red
    end
    echo -n $switch(set_color normal)
end

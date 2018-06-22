function opam-switch-eval () {
    opam switch "$@" --no-warning
    if [[ $@ ]];
    then if [[ $OPAMSWITCH ]];
         then eval $(opam config env --switch="$@");
         else eval $(opam config env);
         fi;
    fi
}

function opam-switch-eval-local () {
    eval $(opam config env --switch="$@")
}

gcfg submodule update --init --recursive

printf "Stack:\n"
stack clean
stack install split
stack install
git --git-dir=$HOME/.cfg --work-tree=$HOME submodule update --init --recursive --remote

printf "Stack:\n"
stack clean
stack install split
stack install
git --git-dir=$HOME/.cfg --work-tree=$HOME submodule update --init --recursive --remote

printf "\nStack:\n"
stack clean
stack install split
stack install

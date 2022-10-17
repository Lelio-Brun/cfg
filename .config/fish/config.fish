if status is-interactive
    # Commands to run in interactive sessions can go here
end

set fish_color_comment 888888
set fish_color_autosuggestion $fish_color_comment

abbr -a -g gco git checkout
abbr -a -g gcl git clone
abbr -a -g gf  git fetch
abbr -a -g gpl git pull
abbr -a -g gps git push
abbr -a -g ga  git add
abbr -a -g glg git log --topo-order --abbrev-commit --graph --pretty=oneline
abbr -a -g glc git shortlog --summary --numbered
abbr -a -g gm  git merge
abbr -a -g gst git status --short
abbr -a -g gSt git status
abbr -a -g gc  git commit --verbose
abbr -a -g gcm git commit --verbose --message
abbr -a -g gca git commit --verbose --all
abbr -a -g grm git rm

abbr -a -g oce 'eval (opam env)'
abbr -a -g osw opam switch
abbr -a -g oup opam update
abbr -a -g oug opam upgrade
abbr -a -g oin opam install
abbr -a -g opa opam pin add

abbr -a -g dub dune build
abbr -a -g dux dune exec
abbr -a -g dui dune install
abbr -a -g duc dune clean
abbr -a -g dut dune runtest
abbr -a -g dop dune utop

abbr -a -g o open

alias ssh="kitty +kitten ssh"

source ~/.opam/opam-init/init.fish

fish_add_path -p ~/.emacs.d/bin/
# fish_add_path ~/texlive/2021/bin/x86_64-linux

starship init fish | source
kitty + complete setup fish | source

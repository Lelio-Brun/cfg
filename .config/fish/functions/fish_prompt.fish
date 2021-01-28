function fish_prompt
    if test -n "$SSH_TTY"
        echo -n (set_color brred)"$USER"(set_color white)'@'(set_color yellow)(prompt_hostname)' '
    end

    echo -n (set_color blue)(prompt_pwd)

    set_color -o
    if test "$USER" = 'root'
        echo -n (set_color red)'#'
    end
    set -g __fish_git_prompt_show_informative_status 1
    set -g __fish_git_prompt_showdirtystate 1
    set -g __fish_git_prompt_showuntrackedfiles 1
    set -g __fish_git_prompt_showcolorhints 1
    set -g __fish_git_prompt_showstashstate 1
    set -g __fish_git_prompt_color_branch normal
    set -g __fish_git_prompt_color_cleanstate green
    echo -n (set_color normal)(fish_vcs_prompt)
    echo -n ' '(set_color red)'❯'(set_color yellow)'❯'(set_color green)'❯ '
    set_color normal
end

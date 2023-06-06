#!/usr/bin/env fish

set -l primary eDP-1
set -l left DP-3-1
set -l right DP-3-2

argparse e/external m/mirror p/primary -- $argv
or return

if set -q _flag_external
    if set -q _flag_primary
        xrandr --output $primary --primary --auto --rotate normal\
               --output $left --auto --rotate normal --left-of $primary\
               --output $right --auto --rotate normal --right-of $primary
    else
        xrandr --output $primary --off\
               --output $left --auto --rotate normal\
               --output $right --auto --rotate normal --right-of $left
    end
else if set -q _flag_mirror
    xrandr --output $primary --primary --auto --rotate normal\
           --output $left --auto --rotate normal --same-as $primary\
           --output $right --auto --rotate normal --same-as $primary
else if set -q _flag_primary
    xrandr --output $primary --primary --auto --rotate normal\
           --output $left --off\
           --output $right --off
end

pkill -USR1 picom
sleep 1
nitrogen --restore

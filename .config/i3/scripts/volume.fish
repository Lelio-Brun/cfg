#!/usr/bin/env fish

set mixer default
set scontrol Master
set step -5%

function amixer_cmd
    argparse 'q' -- $argv
    or return
    if set -q _flag_q
        set quiet --quiet
    end
    amixer $quiet --mapped-volume --device $mixer $argv[1] $scontrol $argv[2..]
end

function volume
    amixer_cmd get
end

function format
    volume | string match --quiet --regex '\[(?<vol>\d+)%\] \[(?<st>on|off)\]'
    if test $st = "off"
        set icon 婢
    else if test $vol -gt 66
        set icon 墳
    else if test $vol -gt 33
        set icon 奔
    else
        set icon 奄
    end
    printf "%s %3d%%\n" $icon $vol
end

format

switch $button
    case 1
        amixer_cmd -q set toggle
    case 3
        pavucontrol
    case 4
        amixer_cmd -q set $step+ unmute
    case 5
        amixer_cmd -q set $step- unmute
end

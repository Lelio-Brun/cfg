#!/usr/bin/env fish

if test -z $block_instance
    set block_instance 0
end
set bat_number $block_instance
set path /org/freedesktop/UPower/devices/battery_BAT$bat_number
set info (upower -i $path)

string match --quiet --regex 'percentage: +(?<pct>\d+)%' $info
string match --quiet --regex 'state: +(?<st>\w+)' $info

if test $st = "discharging"
    set suffix " "
else if test $st = "charging"
    set suffix " "
end


if test $pct -gt 95
    set icon 
else if test $pct -gt 70
    set icon 
else if test $pct -gt 45
    set icon 
else if test $pct -gt 20
    set icon 
else
    set icon 
end

printf "%s  %3d%%%s\n" $icon $pct $suffix
printf "%s  %3d%%%s\n" $icon $pct $suffix

if test $st = "discharging" -o $st = "fully"
    if test $pct -gt 98
        echo $green
    else if test $pct -lt 20
        echo $red
    else if test $pct -lt 50
        echo $yellow
    end
end

#!/usr/bin/env fish

switch (powerprofilesctl get)
    case performance
        echo 
        echo 
        echo $yellow
    case balanced
        echo 
        echo 
    case power-saver
        echo 
        echo 
        echo $green
    case '*'
        exit 1
end


switch $button
    case 1
        fish ~/.config/i3/scripts/power_profiles_menu.fish
end

#!/usr/bin/env fish

set name "Profile"
set menu \
    "  Performance" \
    "  Balanced" \
    "  Saving"

function launch_rofi
    printf "%s\n" $menu |
    rofi -dmenu -i -format i \
        -config ~/.config/rofi/rofi_sidemenu.rasi \
        -p $name \
        -theme-str "listview {lines: $(count $menu);}"
end

switch (launch_rofi)
    case 0
        set profile performance
    case 1
        set profile balanced
    case 2
        set profile power-saver
    case '*'
        return 1
end
powerprofilesctl set $profile

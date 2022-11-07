#!/usr/bin/env fish

set name "Session"
set menu \
    "  Éteindre" \
    "  Redémarrer" \
    "  Veille" \
    "  Hiberner" \
    "  Verouiller" \
    "  Déconnecter"

function launch_rofi
    printf "%s\n" $menu |
    rofi -dmenu -i -format i \
        -config ~/.config/rofi/rofi_sidemenu.rasi \
        -p $name \
        -theme-str "listview {lines: $(count $menu);}"
end

switch (launch_rofi)
    case 0
        systemctl poweroff
    case 1
        systemctl reboot
    case 2
        systemctl suspend
    case 3
        systemctl hibernate
    case 4
        ~/.config/i3/scripts/lock.fish
    case 5
        i3-msg exit
    case '*'
        return 1
end

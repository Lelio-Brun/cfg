.scripts/fehbg

xss-lock -- .scripts/locker &

picom -b --config .config/picom.conf &

dbus-daemon --session --fork &

start-pulseaudio-x11

udiskie &

dunst &

exec xmonad

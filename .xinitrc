.scripts/fehbg

xss-lock -- .scripts/locker &

compton -b --config .config/compton.conf &

dbus-daemon --session --fork &

start-pulseaudio-x11

udiskie &

exec xmonad

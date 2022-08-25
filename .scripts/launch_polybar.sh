#!/usr/bin/env sh

polybar-msg cmd quit

for m in $(polybar --list-monitors | cut -d":" -f1); do
    MONITOR=$m polybar example &
done

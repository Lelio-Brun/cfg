#!/usr/bin/env fish

set black "#1B2B3455"
set br_black "#343D46FF"
set red "#EC5F67FF"
set br_red "#FF7F8755"
set green "#99C794FF"
set br_green "#B9E7B4FF"
set yellow "#FAC863FF"
set br_yellow "#FFE883FF"
set blue "#6699CCFF"
set br_blue "#86B9EC55"
set magenta "#C594C5FF"
set br_magenta "#E5B4E5FF"
set cyan "#5FB3B3FF"
set br_cyan "#7FD3D355"
set white "#A7ADBAFF"
set br_white "#D8DEE9FF"

i3lock \
    --blur 5 \
    --inside-color=$black \
    --ring-color=$cyan \
    --insidever-color=$br_cyan \
    --ringver-color=$cyan \
    --insidewrong-color=$br_red \
    --ringwrong-color=$red \
    --line-color=$br_black \
    --keyhl-color=$yellow \
    --bshl-color=$red \
    --separator-color=$br_black \
    --verif-text="" \
    --wrong-text="" \
    --noinput-text="" \

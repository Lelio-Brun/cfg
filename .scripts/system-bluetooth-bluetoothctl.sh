#!/bin/sh

if [ "$(systemctl is-active "bluetooth.service")" = "active" ]; then
    devices_paired=$(bluetoothctl paired-devices | grep Device | cut -d ' ' -f 2)
    counter=0

    for device in $devices_paired; do
        device_info=$(bluetoothctl info "$device")

        if echo "$device_info" | grep -q "Connected: yes"; then
            device_alias=$(echo "$device_info" | grep "Alias" | cut -d ' ' -f 2-)

            if [ $counter -gt 0 ]; then
                printf ", %s" "$device_alias"
            else
                printf " %s" "$device_alias"
            fi

            counter=$((counter + 1))
        fi
    done
    printf '‍\n' # use [U+200C Zero Width Non-Joiner] to trick polybar
    exit
fi
exit 1

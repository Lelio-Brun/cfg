#!/bin/sh

KEY="73c6f8442b47b42fe20fdba9de9dd705"
CITY="Toulouse,FR"
UNITS="metric"
SYMBOL="°"

API="https://api.openweathermap.org/data/2.5"

# 01 clear sky
# 02 few clouds
# 03 scattered clouds
# 04 broken clouds
# 09 shower rain
# 10 rain
# 11 thunderstorm
# 13 snow
# 50 mist
#
get_icon() {
    case $1 in
        # Icons for Nerd Fonts
        01d) icon="";;
        01n) icon="";;
        02d) icon="";;
        02n) icon="";;
        03*) icon="";;
        04*) icon="";;
        09d) icon="";;
        09n) icon="";;
        10d) icon="";;
        10n) icon="";;
        11d) icon="";;
        11n) icon="";;
        13d) icon="";;
        13n) icon="";;
        50d) icon="";;
        50n) icon="";;
        *) icon="";

        # Icons for weather-icons
        # 01d) icon="";;
        # 01n) icon="";;
        # 02d) icon="";;
        # 02n) icon="";;
        # 03*) icon="";;
        # 04*) icon="";;
        # 09d) icon="";;
        # 09n) icon="";;
        # 10d) icon="";;
        # 10n) icon="";;
        # 11d) icon="";;
        # 11n) icon="";;
        # 13d) icon="";;
        # 13n) icon="";;
        # 50d) icon="";;
        # 50n) icon="";;
        # *) icon="";

        # Icons for Font Awesome 5 Pro
        #01d) icon="";;
        #01n) icon="";;
        #02d) icon="";;
        #02n) icon="";;
        #03d) icon="";;
        #03n) icon="";;
        #04*) icon="";;
        #09*) icon="";;
        #10d) icon="";;
        #10n) icon="";;
        #11*) icon="";;
        #13*) icon="";;
        #50*) icon="";;
        #*) icon="";
    esac

    echo "%{T2}$icon%{T-}"
}

get_duration() {

    osname=$(uname -s)

    case $osname in
        *BSD) date -r "$1" -u +%H:%M;;
        *) date --date="@$1" -u +%H:%M;;
    esac

}

if [ -n "$CITY" ]; then
    if [ "$CITY" -eq "$CITY" ] 2>/dev/null; then
        CITY_PARAM="id=$CITY"
    else
        CITY_PARAM="q=$CITY"
    fi

    current=$(curl -sf "$API/weather?appid=$KEY&$CITY_PARAM&units=$UNITS")
    forecast=$(curl -sf "$API/forecast?appid=$KEY&$CITY_PARAM&units=$UNITS&cnt=1")
else
    location=$(curl -sf https://location.services.mozilla.com/v1/geolocate?key=geoclue)

    if [ -n "$location" ]; then
        location_lat="$(echo "$location" | jq '.location.lat')"
        location_lon="$(echo "$location" | jq '.location.lng')"

        current=$(curl -sf "$API/weather?appid=$KEY&lat=$location_lat&lon=$location_lon&units=$UNITS")
        forecast=$(curl -sf "$API/forecast?appid=$KEY&lat=$location_lat&lon=$location_lon&units=$UNITS&cnt=1")
    fi
fi

full() {
    if [ -n "$current" ] && [ -n "$forecast" ]; then
        current_temp=$(echo "$current" | jq ".main.temp" | cut -d "." -f 1)
        current_icon=$(echo "$current" | jq -r ".weather[0].icon")

        forecast_temp=$(echo "$forecast" | jq ".list[].main.temp" | cut -d "." -f 1)
        forecast_icon=$(echo "$forecast" | jq -r ".list[].weather[0].icon")


        if [ "$current_temp" -gt "$forecast_temp" ]; then
            trend=""
        elif [ "$forecast_temp" -gt "$current_temp" ]; then
            trend=""
        else
            trend=""
        fi


        sun_rise=$(echo "$current" | jq ".sys.sunrise")
        sun_set=$(echo "$current" | jq ".sys.sunset")
        now=$(date +%s)

        if [ "$sun_rise" -gt "$now" ]; then
            daytime="%{T2}%{T-} $(get_duration "$((sun_rise-now))")"
        elif [ "$sun_set" -gt "$now" ]; then
            daytime="%{T2}%{T-} $(get_duration "$((sun_set-now))")"
        else
            daytime="%{T2}%{T-} $(get_duration "$((sun_rise-now))")"
        fi

        echo "$(get_icon "$current_icon") $current_temp$SYMBOL $trend $(get_icon "$forecast_icon") $forecast_temp$SYMBOL $daytime"
    fi
}

detailed() {
    if [ -n "$current" ]; then
        current_desc=$(echo "$current" | jq -r ".weather[0].description")
        current_temp=$(echo "$current" | jq ".main.temp" | cut -d "." -f 1)
        current_icon=$(echo "$current" | jq -r ".weather[0].icon")

        echo "$(get_icon "$current_icon")" "$current_desc", "$current_temp$SYMBOL"
    fi
}

simple() {
    if [ -n "$current" ]; then
        current_temp=$(echo "$current" | jq ".main.temp" | cut -d "." -f 1)
        current_icon=$(echo "$current" | jq -r ".weather[0].icon")

        echo "$(get_icon "$current_icon")" "$current_temp$SYMBOL"
    fi
}

case "$1" in
    --full)
        full
        ;;
    --detailed)
        detailed
        ;;
    *)
        simple
        ;;
esac

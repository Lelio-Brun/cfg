#!/usr/bin/env fish

set ow_api_key 73c6f8442b47b42fe20fdba9de9dd705

# Icons for Nerd Fonts
function get_icon
    switch $argv[1]
        # 01 clear sky
        case 01d; echo 
        case 01n; echo 
        # 02 few clouds
        case 02d; echo 
        case 02n; echo 
        # 03 scattered clouds
        case '03*'; echo 
        # 04 broken clouds
        case '04*'; echo 
        # 09 shower rain
        case 09d; echo 
        case 09n; echo 
        # 10 rain
        case 10d; echo 
        case 10n; echo 
        # 11 thunderstorm
        case 11d; echo 
        case 11n; echo 
        # 13 snow
        case 13d; echo 
        case 13n; echo 
        # 50 mist
        case 50d; echo 
        case 50n; echo 

        case '*'; echo ;
    end
end

function api_call
    set -f out (curl -sf $argv[1])
    if test $status -ne 0
        return $status
    end
    echo $out
end

# geolocate from IP
function locate
    set -f url http://ip-api.com/json
    set -f query "$url/?fields=status,lat,lon"
    set -f json (api_call $query)
    set -f st (echo $json | jq -r .status)
    if test "$st" = "success"
        set -g lat (echo $json | jq .lat)
        set -g lon (echo $json | jq .lon)
    else
        return 1
    end
end

# reverse geocoding from returned coordinates
# function get_city
#     set -f url http://api.openweathermap.org/geo/1.0
#     set -f query "$url/reverse?lat=$argv[1]&lon=$argv[2]&limit=1&appid=$ow_api_key"
#     set -f json (api_call $query)
#     echo (echo $json | jq -r .[0].name)
# end

function get_weather
    locate
    set -f url https://api.openweathermap.org/data/2.5/weather
    set -f query "$url/?units=metric&lat=$lat&lon=$lon&appid=$ow_api_key"
    set -f json (api_call $query)
    set -f lat (echo $json | jq .coord.lat)
    set -f lon (echo $json | jq .coord.lon)
    set -f temp (math round (echo $json | jq .main.temp))
    set -g city (echo $json | jq -r .name)
    # set -g rev_city (get_city $lat $lon)
    set -f icon (echo $json | jq -r .weather[0].icon)
    echo "$(get_icon $icon)  $temp°"
end

function write_html
    echo "
<div id='widget'></div>
<script src='https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
<script>
 window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
 window.myWidgetParam.push({
     id: 21,
     city_name: '$city',
     appid: '$ow_api_key',
     units: 'metric',
     containerid: 'widget'
 });
 (function() {
     var script = document.createElement('script');
     script.async = true;
     script.charset = 'utf-8';
     script.src = 'weather-widget-generator.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(script, s);
 })();
</script>
<style>
 body {
     margin: 0;
     padding: 0;
 }
 .widget-left, .widget-left-menu, .widget-left__body {
     margin: 0;
     padding: 0;
     border-radius: 0;
     box-shadow: none;
     background: transparent;
 }
</style>
    " > scripts/openweatherwidget.html
end

get_weather
switch $button
    case 1
        write_html
        yad --html --uri=$HOME/.config/i3/scripts/openweatherwidget.html\
            --width=690 --height=284\
            --posx=(math $x - 0.75 x 690) --posy=24\
            --no-buttons --undecorated
end

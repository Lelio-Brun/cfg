#!/usr/bin/env fish

set idle (mpstat -o JSON 1 1 | jq '.sysstat.hosts[0].statistics[0]."cpu-load"[0].idle')
set usage (math 100 - $idle)
printf " %3.f%%\n" $usage
printf " %3.f%%\n" $usage
if test $usage -gt 95
    echo $red
else if test $usage -gt 85
    echo $br_red
else if test $usage -gt 75
    echo $yellow
else if test $usage -gt 65
    echo $br_yellow
end

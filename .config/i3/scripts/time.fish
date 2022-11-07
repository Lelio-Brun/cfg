#!/usr/bin/env fish

switch $button
    case 1
        if set -q usefulltimeformat
            set -e usefulltimeformat
        else
            set -U usefulltimeformat
        end
end

if set -q usefulltimeformat
    date +$fullformat
else
    date +$simpleformat
end
date +$simpleformat
echo "$yellow"

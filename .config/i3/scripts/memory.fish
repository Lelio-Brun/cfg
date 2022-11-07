#!/usr/bin/env fish

if test -z $block_instance
    set block_instance mem
end
set memtype $block_instance

set info (cat /proc/meminfo)
string match --quiet --regex 'MemTotal: +(?<mtot>\d+)' $info
string match --quiet --regex 'MemFree: +(?<mfree>\d+)' $info
string match --quiet --regex 'Buffers: +(?<mbuf>\d+)' $info
string match --quiet --regex 'Cached: +(?<mcach>\d+)' $info
string match --quiet --regex 'SReclaimable: +(?<msrec>\d+)' $info
string match --quiet --regex 'Shmem: +(?<mshmem>\d+)' $info
string match --quiet --regex 'SwapTotal: +(?<stot>\d+)' $info
string match --quiet --regex 'SwapFree: +(?<sfree>\d+)' $info

set mfree (math $mfree + $mbuf + $mcach + $msrec - $mshmem)

if test $memtype = "swap"
    set free $sfree
    set total $stot
else
    set free $mfree
    set total $mtot
end

set pct (math \($total - $free\) / $total x 100)

printf " %3.f%%\n" $pct
printf " %3.f%%\n" $pct

if test $pct -gt 95
    echo $red
else if test $pct -gt 85
    echo $br_red
else if test $pct -gt 75
    echo $yellow
else if test $pct -gt 65
    echo $br_yellow
end


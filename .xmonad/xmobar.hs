Config
  {
    font = "xft:Roboto Mono:style=Regular:size=11:antialias=true",
    additionalFonts = [ "xft:FontAwesome:size=11:antialias=true",
                        "xft:DejaVu Sans:size=11:antialias=true",
                        "xft:Roboto Mono:style=Regular:size=7:antialias=true" ],
    bgColor = "#3F3F3F",
    fgColor = "grey",
    alpha = 204,
    position = Top,
    template = "%StdinReader%\
               \}{\
               \<action=pavucontrol>%alsa:default:Master%</action> | \
               \%bright% | \
               \<action=networkmanager_dmenu>%wlp2s0wi%</action> | \
               \%date% | \
               \%battery% ",
    commands =
      [
        Run StdinReader,
        Run Date "<fc=goldenrod><action=gsimplecal>%T</action></fc>" "date" 10,
        Run Alsa "default" "Master" [
          "--template", "<status> <volume>",
          "--ppad", "3",
          "--suffix", "False",
          "--",
          "--on", "<fn=1>\xf028</fn>",
          "--off", "<fn=1>\xf026</fn>",
          "--onc", "grey",
          "--offc", "darkred"
          ],
        Run Brightness [
          "--template", "<fn=1>\xf185</fn> <percent>",
          "--ppad", "3",
          "--suffix", "False",
          "--",
          "-D", "intel_backlight",
          "-C", "brightness"] 10,
        Run Wireless "wlp2s0" ["--ppad", "3"] 50,
        Run Battery [
          "--template" , "<acstatus>",
          "--ppad", "3",
          "--suffix", "False",
          "--",
          "-o", "<fn=1>\xf242</fn> <left> (<timeleft>)",
          "-O", "<fn=1>\xf1e6</fn> <left>",
          "-i", "<fc=green><fn=1>\xf240</fn></fc>"
          ] 50
      ]
  }

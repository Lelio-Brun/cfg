Config
  {
    font = "xft:Fira Mono:style=Regular:size=14:antialias=true",
    additionalFonts = [ "xft:FontAwesome:size=14:antialias=true",
                        "xft:DejaVu Sans:size=14:antialias=true",
                        "xft:Fira Mono:style=Regular:size=10:antialias=true",
                        "xft:FiraCode Nerd Font Mono:style=Regular:size=28"],
    bgColor = "#3F3F3F",
    fgColor = "grey",
    alpha = 204,
    position = Top,
    template = "%StdinReader%\
               \}{\
               \%LFBO% | \
               \<action=pavucontrol>%alsa:default:Master%</action> | \
               \%bright% | \
               \<action=networkmanager_dmenu>%wi%</action> | \
               \%date% | \
               \%battery% ",
    commands =
      [
        Run StdinReader,
        Run Date "<fc=goldenrod><action=gsimplecal>%T</action></fc>" "date" 10,
        Run WeatherX "LFBO" [
          ("clear", "\xe30d")
         , ("sunny", "\xe30d")
         , ("mostly clear", "\xe30c")
         , ("mostly sunny", "\xe30c")
         , ("partly sunny", "\xe302")
         , ("fair", "\xe302")
         , ("cloudy","\xe33d")
         , ("overcast","\xe30c")
         , ("partly cloudy", "\xe302")
         , ("mostly cloudy", "\xe376")
         , ("considerable cloudiness", "\xe312")] [
          "--template", "<fn=4><skyConditionS></fn> <tempC>°"
          ] 18000,
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
          "-C", "brightness"
          ] 10,
        Run Wireless "" ["--ppad", "3"] 50,
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

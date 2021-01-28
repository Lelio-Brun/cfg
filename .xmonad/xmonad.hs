{-# OPTIONS_GHC -fno-warn-missing-signatures #-}

import XMonad
import XMonad.Hooks.DynamicLog
import XMonad.Hooks.ManageDocks
import XMonad.Hooks.ManageHelpers
import XMonad.Hooks.EwmhDesktops
import XMonad.Util.Run(spawnPipe)
import XMonad.Util.EZConfig(additionalKeysP)
import XMonad.Layout.Spacing
import XMonad.Layout.IndependentScreens(countScreens)
import XMonad.Layout.ResizableTile
import XMonad.Actions.PhysicalScreens
import XMonad.Config.Azerty
import XMonad.Actions.UpdatePointer
import XMonad.Util.SpawnOnce
import qualified XMonad.StackSet as SS

import System.IO
import Data.List
import Data.List.Split
import Control.Monad

myDefaultConfig = azertyConfig

myModMask = mod4Mask

myBorderWidth = 0

myTerminal = "termite"

myWorkspaces =
  zipWith (\n c ->"<fn=3>" ++ show n ++ "</fn><fn=1>" ++ c ++ "</fn>") [1..]
  [
    "\xf015",
    "\xf0ac",
    "\xf121",
    "\xf120",
    -- "\xf1d3",
    -- "\xf11b",
    "\xf086",
    "\xf013"
  ]

myManageHook = composeAll [
  -- (isFullscreen --> doFullFloat),
  (isDialog --> doFloatDep maxrect),
  (className =? "Pavucontrol" --> rect 0.5 0.025 0.5 0.5),
  (className =? "Guake" --> doFloat),
  (className =? "Xfce4-terminal" --> doFloat),
  manageHook myDefaultConfig
  ]
  where
    rect x y w h =
      doRectFloat $ SS.RationalRect x y w h
    maxrect (SS.RationalRect x y w h) =
      SS.RationalRect x y (min w 0.5) (min h 0.5)

myLayoutHook =
  avoidStruts $
  spacingRaw True (Border 0 0 0 0) False (Border 2 0 1 1) True $
  tall ||| Full
  where
    tall = ResizableTall 1 (2/100) (1/2) []

myHandleEventHook = fullscreenEventHook <+> handleEventHook myDefaultConfig

myStartupHook =
    spawnOnce "picom -b" <+>
    spawn "gnome-screensaver" <+>
    spawnOnce "guake --hide" <+>
    spawnOnce "~/.fehbg" <+>
    startupHook myDefaultConfig

myLogHook hs = do
    S cs <- currentScreen
    dynamicLogWithPP def
      {
        ppOutput = setLog cs,
        ppCurrent = xmobarColor "white" "",
        ppVisible = xmobarColor "#a6a6a6" "",
        ppHidden = xmobarColor "dimgrey" "",
        ppHiddenNoWindows = xmobarColor "dimgrey" "",
        ppUrgent = xmobarColor "indianred" "",
        ppOrder = \(ws:l:t:_) -> [ws, layout l, t],
        ppLayout = xmobarColor "goldenrod" "",
        ppSep = "  ",
        ppTitle = xmobarColor "mediumaquamarine" "" . shorten 60
      } >> updatePointer (0.9, 0.9) (0, 0)
      where
        layout =
          replace "Spacing ResizableTall" "<fn=2>◧</fn>" .
          -- replace "Spacing Mirror ResizableTall" "<fn=2>⬒</fn>" .
          replace "Spacing Full" "<fn=2>■</fn>"
        replace old new =
          intercalate new . splitOn old
        setLog cs s =
          foldM (\ _ (h, sc) ->
                   let color = if sc == cs then "white" else "lightslategrey"
                   in hPutStrLn h ("<fc=lightslategrey>:</fc><fc=" ++ color ++ ">" ++
                                   show sc ++
                                   "</fc><fc=lightslategrey>:</fc> " ++ s))
          () hs
        currentScreen = do
          w <- gets windowset
          return $ SS.screen $ SS.current w

myKeys =
  [
    ("<XF86AudioRaiseVolume>", volume "+2%"),
    ("<XF86AudioLowerVolume>", volume "-2%"),
    ("<XF86AudioMute>", volume "0%"),
    ("<XF86AudioPlay>", mpc "play"),
    ("<XF86AudioPause>", mpc "pause"),
    ("<XF86AudioNext>", mpc "next"),
    ("<XF86AudioPrev>", mpc "prev"),
    ("<XF86MonBrightnessUp>", ocaml_script "change-backlight.ml -inc"),
    ("<XF86MonBrightnessDown>", ocaml_script "change-backlight.ml -dec"),
    ("M-<F7>", ocaml_script "toggle-screen.ml -e"),
    ("M-<F8>", ocaml_script "toggle-screen.ml -m"),
    ("<XF86Display>", ocaml_script "toggle-screen.ml -p"),
    ("M-<F10>", mpc "toggle"),
    ("M-<Page_Down>", mpc "next"),
    ("M-<Page_Up>", mpc "prev"),
    ("M-p", spawn "rofi -show drun"),
    ("M-n", spawn "networkmanager_dmenu"),
    ("M-l", spawn "gnome-screensaver-command -l"),
    ("M-S-l", spawn "systemctl suspend"),
    ("M-e", spawn "emacs"),
    ("M-x", spawn "emacs ~/.xmonad/xmonad.hs"),
    ("M-b", spawn "firefox"),
    ("M-m", spawn "thunderbird"),
    ("M-r", sendMessage ToggleStruts),
    ("M-<Left>", sendMessage Shrink),
    ("M-<Right>", sendMessage Expand),
    ("M-<Down>", sendMessage MirrorShrink),
    ("M-<Up>", sendMessage MirrorExpand),
    ("<F12>", spawn "guake --toggle-visibility")
  ]
  ++ [((m ++ "M-" ++ key), f sc)
     | (key, sc) <- zip ["<F1>", "<F2>", "<F3>"] [0..],
       (f, m) <- [(viewScreen def, ""), (sendToScreen def, "S-")]]
  where
    volume c = spawn $ "pactl set-sink-volume @DEFAULT_SINK@ " ++ c
    ocaml_script s = spawn $ "ocaml ~/.scripts/" ++ s
    mpc c = spawn $ "mpc " ++ c

myConfig bars = myDefaultConfig
    {
      modMask = myModMask,
      borderWidth = myBorderWidth,
      terminal = myTerminal,
      manageHook = myManageHook,
      layoutHook = myLayoutHook,
      handleEventHook = myHandleEventHook,
      logHook = myLogHook bars,
      startupHook = myStartupHook,
      workspaces = myWorkspaces
    }
    `additionalKeysP` myKeys

main = do
  ns <- countScreens
  bars <- foldM spawnXmobar [] [0..ns-1]
  xmonad $ docks $ myConfig bars
  where
    spawnXmobar bars sc = do
      bar <- spawnPipe ("xmobar -x " ++ show sc ++ " ~/.xmonad/xmobar.hs")
      return ((bar, sc) : bars)

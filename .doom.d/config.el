;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-

;; Place your private configuration here! Remember, you do not need to run 'doom
;; refresh' after modifying this file!


;; These are used for a number of things, particularly for GPG configuration,
;; some email clients, file templates and snippets.
(setq user-full-name "Lélio Brun"
      user-mail-address "lelio.brun@gmail.com")

;; Doom exposes five (optional) variables for controlling fonts in Doom. Here
;; are the three important ones:
;;
;; + `doom-font'
;; + `doom-variable-pitch-font'
;; + `doom-big-font' -- used for `doom-big-font-mode'
;;
;; They all accept either a font-spec, font string ("Input Mono-12"), or xlfd
;; font string. You generally only need these two:
(setq doom-font (font-spec :family "Source Code Pro" :size 13))

;; There are two ways to load a theme. Both assume the theme is installed and
;; available. You can either set `doom-theme' or manually load a theme with the
;; `load-theme' function. These are the defaults.
(setq doom-theme 'doom-palenight)

;; If you intend to use org, it is recommended you change this!
(setq org-directory "~/org/")

;; If you want to change the style of line numbers, change this to `relative' or
;; `nil' to disable it:
(setq display-line-numbers-type t)


;; Here are some additional functions/macros that could help you configure Doom:
;;
;; - `load!' for loading external *.el files relative to this one
;; - `use-package' for configuring packages
;; - `after!' for running code after a package has loaded
;; - `add-load-path!' for adding directories to the `load-path', where Emacs
;;   looks when you load packages with `require' or `use-package'.
;; - `map!' for binding new keys
;;
;; To get information about any of these functions/macros, move the cursor over
;; the highlighted symbol at press 'K' (non-evil users must press 'C-c g k').
;; This will open documentation for it, including demos of how they are used.
;;
;; You can also try 'gd' (or 'C-c g d') to jump to their definition and see how
;; they are implemented.

;; Spacemacs-like local leader key
(setq doom-localleader-key ",")

;; opacity
(set-frame-parameter nil 'alpha 90)

;; Coq keymaps
(map! :map coq-mode-map
      :nvi "<f3>" 'proof-assert-next-command-interactive
      :nvi "<f4>" 'company-coq-proof-goto-point
      :nvi "<f2>" 'proof-undo-last-successful-command)

;; Coq customization
(setq coq-compile-before-require t)
(setq proof-three-window-mode-policy 'hybrid)
(setq proof-script-fly-past-comments t)

;; ;; Workaround for evil performance bug (see
;; ;; https://github.com/olivierverdier/spacemacs-coq/issues/6 for details).
;; ;; Essentially the cursor color is changed rapidly when navigating the proof
;; ;; in insert mode. This ensures the insert and normal mode colors are the
;; ;; same, which generally avoids this problem.
;; (add-hook 'coq-mode-hook
;;           (lambda ()
;;             (setq-local
;;              evil-insert-state-cursor
;;              (cons
;;               (car evil-normal-state-cursor)
;;               (cdr evil-insert-state-cursor)))))

;; Keymap for column indicator
(map! :leader
      (:prefix "t"
        :desc "Column indicator" "h" #'fci-mode))

;; Keymap for markdown previewer vmd
 (map! :map markdown-mode-map
       :localleader
       "P" #'vmd-mode)

;; Keymap for LaTeX
;; ;; Rebindings for TeX-font
(defun latex/font-bold () (interactive) (TeX-font nil ?\C-b))
(defun latex/font-emphasis () (interactive) (TeX-font nil ?\C-e))
(defun latex/font-small-caps () (interactive) (TeX-font nil ?\C-c))

(map! :map LaTeX-mode-map
       :localleader
       "e" #'LaTeX-environment
       "c" #'LaTeX-close-environment
       "i" #'LaTeX-insert-item
       (:prefix ("r" . "refTeX")
         "c" #'reftex-citation
         "l" #'reftex-label
         "t" #'reftex-toc)
       (:prefix ("x" . "font")
         "b" #'latex/font-bold
         "e" #'latex/font-emphasis
         "s" #'latex/font-small-caps))

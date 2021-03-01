;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-

;; Place your private configuration here! Remember, you do not need to run 'doom
;; sync' after modifying this file!


;; Some functionality uses this to identify you, e.g. GPG configuration, email
;; clients, file templates and snippets.
(setq user-full-name "Lélio Brun"
      user-mail-address "lb@leliobrun.net")

;; Doom exposes five (optional) variables for controlling fonts in Doom. Here
;; are the three important ones:
;;
;; + `doom-font'
;; + `doom-variable-pitch-font'
;; + `doom-big-font' -- used for `doom-big-font-mode'; use this for
;;   presentations or streaming.
;;
;; They all accept either a font-spec, font string ("Input Mono-12"), or xlfd
;; font string. You generally only need these two:
(setq doom-font (font-spec :family "FiraCode Nerd Font" :size 14)
      doom-variable-pitch-font (font-spec :family "Fira Sans" :size 14))

;; There are two ways to load a theme. Both assume the theme is installed and
;; available. You can either set `doom-theme' or manually load a theme with the
;; `load-theme' function. This is the default:
(setq doom-theme 'doom-palenight)

;; If you use `org' and don't want your org files in the default location below,
;; change `org-directory'. It must be set before org loads!
(setq org-directory "~/org/")

;; This determines the style of line numbers in effect. If set to `nil', line
;; numbers are disabled. For relative line numbers, set this to `relative'.
(setq display-line-numbers-type t)


;; Here are some additional functions/macros that could help you configure Doom:
;;
;; - `load!' for loading external *.el files relative to this one
;; - `use-package!' for configuring packages
;; - `after!' for running code after a package has loaded
;; - `add-load-path!' for adding directories to the `load-path', relative to
;;   this file. Emacs searches the `load-path' when you load packages with
;;   `require' or `use-package'.
;; - `map!' for binding new keys
;;
;; To get information about any of these functions/macros, move the cursor over
;; the highlighted symbol at press 'K' (non-evil users must press 'C-c c k').
;; This will open documentation for it, including demos of how they are used.
;;
;; You can also try 'gd' (or 'C-c c d') to jump to their definition and see how
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

;; A Camel for Tuareg
(add-hook 'tuareg-mode-hook #'(lambda() (setq mode-name "🐫")))

;; ACSL mode
(use-package! acsl
  :mode ("\\.c\\'" . acsl-mode))

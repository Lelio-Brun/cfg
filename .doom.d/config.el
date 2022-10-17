;;; $DOOMDIR/config.el -*- lexical-binding: t; -*-

;; Place your private configuration here! Remember, you do not need to run 'doom
;; sync' after modifying this file!


;; Some functionality uses this to identify you, e.g. GPG configuration, email
;; clients, file templates and snippets. It is optional.
(setq user-full-name "Lelio Brun"
      user-mail-address "lb@leliobrun.net")

;; Doom exposes five (optional) variables for controlling fonts in Doom:
;;
;; - `doom-font' -- the primary font to use
;; - `doom-variable-pitch-font' -- a non-monospace font (where applicable)
;; - `doom-big-font' -- used for `doom-big-font-mode'; use this for
;;   presentations or streaming.
;; - `doom-unicode-font' -- for unicode glyphs
;; - `doom-serif-font' -- for the `fixed-pitch-serif' face
;;
;; See 'C-h v doom-font' for documentation and more examples of what they
;; accept. For example:
;;
(setq doom-font (font-spec :family "FiraCode Nerd Font" :size 14)
      doom-variable-pitch-font (font-spec :family "Fira Sans" :size 13))
;;
;; If you or Emacs can't find your font, use 'M-x describe-font' to look them
;; up, `M-x eval-region' to execute elisp code, and 'M-x doom/reload-font' to
;; refresh your font settings. If Emacs still can't find your font, it likely
;; wasn't installed correctly. Font issues are rarely Doom issues!

;; There are two ways to load a theme. Both assume the theme is installed and
;; available. You can either set `doom-theme' or manually load a theme with the
;; `load-theme' function. This is the default:
;; (setq doom-theme 'doom-one)
(setq doom-theme 'doom-oceanic-next)

;; This determines the style of line numbers in effect. If set to `nil', line
;; numbers are disabled. For relative line numbers, set this to `relative'.
(setq display-line-numbers-type t)

;; If you use `org' and don't want your org files in the default location below,
;; change `org-directory'. It must be set before org loads!
(setq org-directory "~/org/")


;; Whenever you reconfigure a package, make sure to wrap your config in an
;; `after!' block, otherwise Doom's defaults may override your settings. E.g.
;;
;;   (after! PACKAGE
;;     (setq x y))
;;
;; The exceptions to this rule:
;;
;;   - Setting file/directory variables (like `org-directory')
;;   - Setting variables which explicitly tell you to set them before their
;;     package is loaded (see 'C-h v VARIABLE' to look up their documentation).
;;   - Setting doom variables (which start with 'doom-' or '+').
;;
;; Here are some additional functions/macros that will help you configure Doom.
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
;; Alternatively, use `C-h o' to look up a symbol (functions, variables, faces,
;; etc).
;;
;; You can also try 'gd' (or 'C-c c d') to jump to their definition and see how
;; they are implemented.
;;
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

;; fix Coq mode slowdowns
(remove-hook 'coq-mode-hook 'dtrt-indent-mode)

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
       "C" #'LaTeX-close-environment
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

;; ;; ACSL mode
;; (use-package! acsl
;;   :mode ("\\.c\\'" . acsl-mode))

;; Configure LSP
(after! lsp-ui
  ;; (setq lsp-ui-doc-enable t)
  (setq lsp-ui-doc-max-width 80)
  (setq lsp-ui-doc-max-height 15))

;; do not double backslashes in re-builder
(setq reb-re-syntax 'string)

;; Lustre mode config
(use-package! lustre-mode
  :mode ("\\.lus\\'" . lustre-mode))

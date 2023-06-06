;;; custom.el -*- lexical-binding: t; -*-

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(auth-source-save-behavior nil)
 '(safe-local-variable-values
   '((fstar-subp-prover-args "--warn_error" "-331" "--cache_checked_modules" "--cache_dir" "../.cache/symbolic" "--include" ".." "--include" "../symbolic")
     (fstar-subp-prover-args "--warn_error" "-331" "--include" ".." "--include" "../symbolic")
     (fstar-subp-prover-args "--include" ".." "--include" "../symbolic")
     (fstar-subp-prover-args "--include" "..,../symbolic")
     (fstar-subp-prover-args quote
      ("--include" "..,../symbolic"))
     (reftex-default-bibliography "../bibliography.bib" "../misc.bib")
     (reftex-cite-format . biblatex)
     (reftex-default-bibliography "refs.bib"))))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )

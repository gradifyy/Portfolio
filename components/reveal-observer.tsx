"use client";

import { useEffect } from "react";

/**
 * Observes [data-reveal] elements and adds `is-visible` when they enter the
 * viewport. Uses a MutationObserver to catch elements that mount later (e.g.
 * after a framer-motion AnimatePresence exit animation completes), so route
 * changes don't leave fresh [data-reveal] nodes permanently hidden.
 */
export default function RevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const reveal = (root: ParentNode) => {
        root
          .querySelectorAll<HTMLElement>("[data-reveal]")
          .forEach((el) => el.classList.add("is-visible"));
      };
      reveal(document);
      const mo = new MutationObserver((muts) => {
        muts.forEach((m) =>
          m.addedNodes.forEach((n) => {
            if (n instanceof HTMLElement) {
              if (n.hasAttribute("data-reveal")) n.classList.add("is-visible");
              reveal(n);
            }
          })
        );
      });
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => {
          if (!el.classList.contains("is-visible")) io.observe(el);
        });
    };

    observeAll(document);

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) {
            if (n.hasAttribute("data-reveal") && !n.classList.contains("is-visible")) {
              io.observe(n);
            }
            observeAll(n);
          }
        })
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

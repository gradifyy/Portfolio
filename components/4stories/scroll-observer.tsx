"use client";

import { useEffect } from "react";

export default function FsScrollObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const revealAll = (root: ParentNode) => {
        root
          .querySelectorAll<HTMLElement>("[data-fs-reveal],[data-fs-reveal-x]")
          .forEach((el) => el.classList.add("fs-visible"));
      };
      revealAll(document);
      const mo = new MutationObserver((muts) => {
        muts.forEach((m) =>
          m.addedNodes.forEach((n) => {
            if (n instanceof HTMLElement) {
              if (
                n.hasAttribute("data-fs-reveal") ||
                n.hasAttribute("data-fs-reveal-x")
              )
                n.classList.add("fs-visible");
              revealAll(n);
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
            entry.target.classList.add("fs-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const observeAll = (root: ParentNode) => {
      root
        .querySelectorAll<HTMLElement>("[data-fs-reveal],[data-fs-reveal-x]")
        .forEach((el) => {
          if (!el.classList.contains("fs-visible")) io.observe(el);
        });
    };

    observeAll(document);

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) {
            if (
              (n.hasAttribute("data-fs-reveal") ||
                n.hasAttribute("data-fs-reveal-x")) &&
              !n.classList.contains("fs-visible")
            ) {
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

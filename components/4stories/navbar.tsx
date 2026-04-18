"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#experience", label: "Experience" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export default function FsNavbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      if (y > lastY.current && y > 200) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center px-[5vw]",
          "transition-[transform,background-color,backdrop-filter] duration-[500ms] ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled ? "fs-nav-frosted" : "bg-transparent",
        ].join(" ")}
      >
        <div className="flex w-full items-center justify-between max-w-[1400px] mx-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-[1.4rem] tracking-tight"
            style={{ color: "var(--fs-cream)" }}
          >
            4stories<span style={{ color: "var(--fs-gold)" }}>.</span>
          </button>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[var(--fs-gold)]"
                style={{ color: "var(--fs-muted)" }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#visit")}
              className="fs-btn !py-2.5 !px-5 !text-[10px]"
            >
              Reserve
            </button>
          </nav>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          >
            <span
              className={[
                "block h-px w-5 transition-transform duration-300",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
              style={{ background: "var(--fs-cream)" }}
            />
            <span
              className={[
                "block h-px w-5 transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
              style={{ background: "var(--fs-cream)" }}
            />
            <span
              className={[
                "block h-px w-5 transition-transform duration-300",
                menuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
              style={{ background: "var(--fs-cream)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-opacity duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ background: "rgba(12, 11, 9, 0.95)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />
        <div className="relative h-full flex flex-col items-start justify-center px-[5vw] gap-7">
          {LINKS.map((l, i) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-serif text-4xl"
              style={{
                color: "var(--fs-cream)",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.6s ${i * 70}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 70}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#visit")}
            className="fs-btn mt-4"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ${LINKS.length * 70}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${LINKS.length * 70}ms cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </>
  );
}

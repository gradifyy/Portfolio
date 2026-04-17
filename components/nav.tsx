"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const el = document.elementFromPoint(24, 90);
      if (el) {
        const section =
          (el as HTMLElement).closest?.("[data-nav-theme]") || null;
        if (section) {
          setOnDark(section.getAttribute("data-nav-theme") === "dark");
        } else {
          setOnDark(false);
        }
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkBase =
    "relative text-sm font-medium tracking-[-0.01em] transition-colors duration-300";
  const linkLight = "text-ink/70 hover:text-ink";
  const linkDark = "text-cream/80 hover:text-cream";

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center",
          "transition-[background-color,backdrop-filter,border-color] duration-[400ms] ease-out",
          scrolled
            ? onDark
              ? "frosted-dark border-b border-white/5"
              : "frosted"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{
          paddingLeft: "clamp(1rem, 4vw, 3rem)",
          paddingRight: "clamp(1rem, 4vw, 3rem)",
        }}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 magnetic"
            aria-label="Ayro — Home"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-ink text-lime font-display text-base">
              A
            </span>
            <span
              className={[
                "font-display text-lg tracking-[-0.03em] transition-colors duration-300",
                onDark ? "text-cream" : "text-ink",
              ].join(" ")}
            >
              Ayro
              <span className="text-lime-2">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={[linkBase, onDark ? linkDark : linkLight].join(" ")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-lime lime-pulse">
              Start a Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 11 11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              "md:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-full",
              onDark ? "bg-white/5" : "bg-black/5",
            ].join(" ")}
          >
            <span
              className={[
                "block h-[2px] w-5 rounded transition-all duration-300",
                onDark ? "bg-cream" : "bg-ink",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[2px] w-5 rounded transition-opacity duration-300",
                onDark ? "bg-cream" : "bg-ink",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[2px] w-5 rounded transition-all duration-300",
                onDark ? "bg-cream" : "bg-ink",
                menuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
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
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 20%, rgba(193,255,114,0.35), transparent 70%), rgba(248,246,242,0.96)",
            backdropFilter: "blur(20px)",
          }}
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-start justify-center px-[6vw] gap-6">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl text-ink tracking-[-0.04em]"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(24px)",
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-lime mt-6"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.6s ${LINKS.length * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${LINKS.length * 80}ms cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </>
  );
}

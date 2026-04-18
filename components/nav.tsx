"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "Process" },
  { href: "/#community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > lastY.current && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center",
          "transition-[transform,background-color,backdrop-filter,border-color] duration-[400ms] ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled
            ? "frosted border-b border-line"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="magnetic flex items-center gap-2 text-[22px] font-bold tracking-tight text-ink"
            aria-label="Ayro — Home"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink text-[13px] font-bold text-cream">
              A
            </span>
            <span>Ayro</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-limedeep" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" &&
                  !l.href.startsWith("/#") &&
                  pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "magnetic relative text-[13.5px] font-medium",
                    active ? "text-ink" : "text-ink/70 hover:text-ink",
                    "transition-colors duration-300",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-lime magnetic inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold"
            >
              Start a Project
              <span aria-hidden>↗</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span
              className={[
                "block h-px w-6 bg-ink transition-transform duration-300",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-ink transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-ink transition-transform duration-300",
                menuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu — lime-tinted full-screen */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-opacity duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, #eaf7d2 0%, #c1ff72 50%, #9ee556 100%)",
          }}
        />
        <div className="relative h-full flex flex-col items-start justify-center px-[6vw] gap-6">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="display text-ink text-6xl"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-ink mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.6s ${LINKS.length * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${LINKS.length * 80}ms cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            Start a Project
            <span aria-hidden>↗</span>
          </Link>
        </div>
      </div>
    </>
  );
}

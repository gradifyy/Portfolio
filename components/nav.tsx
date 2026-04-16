"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
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
      setScrolled(y > 100);
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
          "fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center",
          "transition-[transform,background-color,backdrop-filter] duration-[400ms] ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled ? "frosted border-b border-stone/40" : "bg-transparent",
        ].join(" ")}
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-charcoal magnetic"
            aria-label="Ayro — Home"
          >
            Ayro<span className="text-terracotta">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "magnetic relative text-sm tracking-[0.08em] uppercase",
                    active ? "text-charcoal" : "text-taupe hover:text-charcoal",
                    "transition-colors duration-300",
                  ].join(" ")}
                >
                  {l.label}
                  <span
                    className={[
                      "absolute left-0 -bottom-1 h-px bg-terracotta transition-all duration-500",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span
              className={[
                "block h-px w-6 bg-charcoal transition-transform duration-300",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-charcoal transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-charcoal transition-transform duration-300",
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
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="absolute inset-0 frosted" />
        <div className="relative h-full flex flex-col items-start justify-center px-[5vw] gap-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-serif text-5xl text-charcoal"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

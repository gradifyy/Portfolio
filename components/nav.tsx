"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#accommodation", label: "Accommodation" },
  { href: "#events", label: "Events" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
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

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center",
          "transition-[transform,background-color,backdrop-filter] duration-[400ms] ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled
            ? "frosted-dark border-b border-emerald/20"
            : "bg-transparent",
        ].join(" ")}
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="flex w-full items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-2xl tracking-tight text-white magnetic"
            aria-label="Lavie Garden — Home"
          >
            Lavie<span className="text-gold">.</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.href);
                }}
                className="magnetic relative text-[13px] tracking-[0.1em] uppercase text-white/80 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/9779808996175?text=Hi%20Lavie%20Garden!%20%F0%9F%8C%BF%0AI%E2%80%99d%20love%20to%20book%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-flex items-center gap-2 rounded-full bg-gold text-forest px-6 py-2.5 text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Book a Table
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span
              className={[
                "block h-[2px] w-6 bg-white transition-transform duration-300",
                menuOpen ? "translate-y-[8px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[2px] w-6 bg-white transition-opacity duration-300",
                menuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[2px] w-6 bg-white transition-transform duration-300",
                menuOpen ? "-translate-y-[8px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-500",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-forest/95 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-start justify-center px-[8vw] gap-6">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.href);
              }}
              className="font-serif text-4xl md:text-5xl text-white hover:text-gold transition-colors"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `opacity 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${i * 80}ms cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/9779808996175?text=Hi%20Lavie%20Garden!%20%F0%9F%8C%BF%0AI%E2%80%99d%20love%20to%20book%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold text-forest px-8 py-3 text-sm font-semibold tracking-[0.1em] uppercase"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.6s ${LINKS.length * 80}ms cubic-bezier(0.16,1,0.3,1), transform 0.6s ${LINKS.length * 80}ms cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            Book a Table
          </a>
        </div>
      </div>
    </>
  );
}

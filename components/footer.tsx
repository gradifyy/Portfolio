import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative bg-charcoal text-cream pt-[14vh] pb-[5vh] overflow-hidden"
      style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(193,255,114,0.12) 0%, rgba(28,28,28,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-6" data-reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cream/70 mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              Begin a conversation
            </p>
            <h3
              className="display text-cream max-w-[18ch]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}
            >
              Let’s shape something deliberate.
            </h3>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="mailto:hello@ayro.studio"
                className="btn-lime magnetic inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
              >
                hello@ayro.studio
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/contact"
                className="magnetic text-sm font-semibold text-cream/80 border-b border-cream/20 pb-1 hover:text-cream hover:border-lime transition-colors"
              >
                Start a Project →
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-8" data-reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/55 mb-4">
              Elsewhere
            </p>
            <ul className="flex flex-col gap-2">
              {[
                ["Twitter / X", "https://twitter.com/"],
                ["LinkedIn", "https://www.linkedin.com/"],
                ["Dribbble", "https://dribbble.com/"],
                ["GitHub", "https://github.com/gradifyy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="magnetic text-sm text-cream/80 hover:text-lime transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3" data-reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/55 mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2">
              {[
                ["Work", "/work"],
                ["Process", "/about"],
                ["Community", "/#community"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="magnetic text-sm text-cream/80 hover:text-lime transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[10vh] pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-cream/50 tracking-wide">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-cream text-[10px] font-bold text-ink">
              A
            </span>
            © {new Date().getFullYear()} Ayro. All rights reserved.
          </p>
          <p className="italic">Shaped by intention.</p>
        </div>
      </div>
    </footer>
  );
}

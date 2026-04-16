import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative bg-sand pt-[12vh] pb-[5vh]"
      style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-6" data-reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
              Begin a conversation
            </p>
            <h3 className="font-serif text-4xl md:text-6xl leading-[1.05] text-charcoal max-w-xl">
              Let’s shape something deliberate.
            </h3>
            <Link
              href="mailto:hello@ayro.studio"
              className="magnetic inline-flex items-center gap-3 mt-8 text-lg text-charcoal border-b border-charcoal/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              hello@ayro.studio
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-8" data-reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
              Elsewhere
            </p>
            <ul className="flex flex-col gap-2 text-charcoal">
              <li>
                <a
                  href="https://twitter.com/"
                  className="magnetic text-sm hover:text-terracotta transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="magnetic text-sm hover:text-terracotta transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/"
                  className="magnetic text-sm hover:text-terracotta transition-colors"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  className="magnetic text-sm hover:text-terracotta transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3" data-reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-2 text-charcoal">
              <li>
                <Link href="/work" className="magnetic text-sm hover:text-terracotta transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="magnetic text-sm hover:text-terracotta transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="magnetic text-sm hover:text-terracotta transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[10vh] pt-8 border-t border-stone flex flex-col md:flex-row justify-between gap-3 text-xs text-taupe tracking-wide">
          <p>© {new Date().getFullYear()} Ayro. All rights reserved.</p>
          <p className="font-serif italic text-taupe">Shaped by intention.</p>
        </div>
      </div>
    </footer>
  );
}

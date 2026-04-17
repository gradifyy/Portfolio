import Link from "next/link";
import { XGlyph, LinkedInGlyph, GithubGlyph, TelegramGlyph, DiscordGlyph, ArrowUpRight } from "./icons";

export default function Footer() {
  return (
    <footer
      data-nav-theme="dark"
      className="relative overflow-hidden surface-charcoal pt-[14vh] pb-10"
      style={{
        paddingLeft: "clamp(1rem, 4vw, 3rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* Abstract swirl graphic */}
      <SwirlGraphic />

      <div className="relative max-w-[1200px] mx-auto z-[1]">
        <div className="grid grid-cols-12 gap-10 md:gap-8">
          {/* Newsletter */}
          <div className="col-span-12 md:col-span-5" data-reveal>
            <div className="pill text-ink/80">
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              Newsletter
            </div>
            <h3
              className="font-display text-cream leading-[1.02] mt-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Join Our <br />
              Newsletter
            </h3>
            <p className="mt-4 text-cream/60 max-w-sm text-sm">
              One quiet monthly letter. New work, essays on restraint, and
              early invitations.
            </p>
            <form className="mt-6 flex items-center gap-2 max-w-md rounded-full bg-[#262626] border border-white/10 pr-1 pl-4 py-1">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 bg-transparent text-cream placeholder:text-cream/40 outline-none text-sm py-2"
                aria-label="Email"
              />
              <button type="submit" className="btn-lime">
                Join Now
                <ArrowUpRight />
              </button>
            </form>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-4 md:col-start-7" data-reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-cream/40">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-cream/85">
              <li>
                <a
                  href="mailto:work@ayro.studio"
                  className="magnetic hover:text-lime transition-colors"
                >
                  work@ayro.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+4499123445"
                  className="magnetic hover:text-lime transition-colors"
                >
                  +44 99 123 445
                </a>
              </li>
              <li className="text-cream/50 text-sm leading-snug">
                1123 Lani St, San Marcos, 2010
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-12 md:col-span-3" data-reveal>
            <div className="text-[11px] uppercase tracking-[0.18em] text-cream/40">
              Follow
            </div>
            <div className="mt-4 flex items-center gap-3">
              {[
                { href: "https://x.com/", label: "X", Icon: XGlyph },
                { href: "https://linkedin.com/", label: "LinkedIn", Icon: LinkedInGlyph },
                { href: "https://github.com/", label: "GitHub", Icon: GithubGlyph },
                { href: "https://t.me/", label: "Telegram", Icon: TelegramGlyph },
                { href: "https://discord.com/", label: "Discord", Icon: DiscordGlyph },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[10vh] pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-cream/40">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-ink text-lime font-display text-[10px] border border-white/5">
              A
            </span>
            <span>© {new Date().getFullYear()} Ayro. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5 text-cream/50">
            <Link href="#" className="hover:text-lime transition-colors">Terms</Link>
            <Link href="#" className="hover:text-lime transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-lime transition-colors">
              Start a project →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SwirlGraphic() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      className="absolute -left-[10vw] bottom-[2vh] w-[60vw] max-w-[720px] opacity-[0.95] pointer-events-none select-none"
      style={{ filter: "drop-shadow(0 30px 60px rgba(193,255,114,0.15))" }}
    >
      <defs>
        <linearGradient id="swirlGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C1FF72" />
          <stop offset="1" stopColor="#9FD857" />
        </linearGradient>
      </defs>
      <path
        d="M100 420 C 100 260, 240 140, 380 200 C 520 260, 520 420, 380 460 C 260 495, 200 420, 260 360 C 310 310, 400 330, 410 400"
        stroke="url(#swirlGrad)"
        strokeWidth="86"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

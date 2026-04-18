export default function Footer() {
  return (
    <footer className="relative bg-forest text-white">
      {/* Main footer */}
      <div
        className="pt-20 pb-10"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div data-reveal>
              <p className="font-serif text-3xl text-white mb-4">
                Lavie<span className="text-gold">.</span>
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                The most celebrated restaurant in Kathmandu — where every
                evening turns into a carnival of flavor, music, and nature.
              </p>
              <div className="flex items-center gap-4 mt-6">
                {[
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/laviegardenktm",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/laviegarden/",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    label: "TripAdvisor",
                    href: "#",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 004.072 1.598 5.997 5.997 0 004.04-10.43l1.966-2.135h-4.362c-2.306-1.57-4.974-2.353-7.632-2.353zm0 2.137c1.878 0 3.756.514 5.396 1.544H6.613c1.64-1.03 3.516-1.544 5.393-1.544zM5.997 10.09a3.82 3.82 0 013.822 3.822A3.822 3.822 0 016 17.734a3.824 3.824 0 01-3.824-3.822A3.824 3.824 0 016 10.09zm12.006 0a3.824 3.824 0 013.822 3.822 3.822 3.822 0 01-3.822 3.822 3.824 3.824 0 01-3.824-3.822 3.824 3.824 0 013.824-3.822zM6 12.267a1.636 1.636 0 00-1.636 1.645A1.636 1.636 0 006 15.548a1.636 1.636 0 001.636-1.636A1.636 1.636 0 006 12.267zm12.006 0a1.636 1.636 0 00-1.636 1.645 1.636 1.636 0 001.636 1.636 1.636 1.636 0 001.636-1.636 1.636 1.636 0 00-1.636-1.645z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="magnetic w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-colors duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Eat */}
            <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5 font-semibold">
                Eat
              </p>
              <ul className="flex flex-col gap-3">
                {["Menu", "Food & Drinks", "Book a Table"].map((item) => (
                  <li key={item}>
                    <a
                      href="#menu"
                      className="magnetic text-sm text-white/60 hover:text-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5 font-semibold">
                Amenities
              </p>
              <ul className="flex flex-col gap-3">
                {["Accommodation", "Facilities", "Beer Garden"].map((item) => (
                  <li key={item}>
                    <a
                      href="#accommodation"
                      className="magnetic text-sm text-white/60 hover:text-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div data-reveal style={{ ["--reveal-delay" as string]: "300ms" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5 font-semibold">
                Location
              </p>
              <ul className="flex flex-col gap-3 text-sm text-white/60">
                <li>Boudha Ramhiti, Kathmandu,</li>
                <li>Nepal 44600</li>
                <li className="mt-2">
                  <a
                    href="tel:+9779808996175"
                    className="hover:text-gold transition-colors"
                  >
                    +977 980-8996175
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9779808996175"
                    className="hover:text-gold transition-colors"
                  >
                    (+977) 9808996175
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40 tracking-wide">
            <p>&copy; {new Date().getFullYear()} Lavie Garden. All rights reserved.</p>
            <p className="font-serif italic text-white/30">
              A green hug from nature.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

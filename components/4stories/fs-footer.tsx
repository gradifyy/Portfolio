"use client";

export default function FsFooter() {
  return (
    <footer
      className="relative py-[8vh] px-[5vw]"
      style={{
        background: "var(--fs-bg)",
        borderTop: "1px solid var(--fs-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p
              className="font-serif text-2xl tracking-tight mb-3"
              style={{ color: "var(--fs-cream)" }}
            >
              4stories<span style={{ color: "var(--fs-gold)" }}>.</span>
            </p>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--fs-muted)" }}
            >
              Where every floor tells a different tale. A contemporary eatery in
              the heart of Thamel, Kathmandu.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-7">
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--fs-gold)" }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5">
              {["Story", "Experience", "Menu", "Gallery", "Visit"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() =>
                        document
                          .querySelector(`#${item.toLowerCase()}`)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-sm transition-colors duration-300 hover:text-[var(--fs-gold)]"
                      style={{ color: "var(--fs-muted)" }}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--fs-gold)" }}
            >
              Connect
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://www.instagram.com/4stories.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-[var(--fs-gold)]"
                  style={{ color: "var(--fs-muted)" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tripadvisor.com/Restaurant_Review-g293890-d26454017-Reviews-4Stories-Kathmandu.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-[var(--fs-gold)]"
                  style={{ color: "var(--fs-muted)" }}
                >
                  TripAdvisor
                </a>
              </li>
              <li>
                <a
                  href="tel:+9779808790813"
                  className="text-sm transition-colors duration-300 hover:text-[var(--fs-gold)]"
                  style={{ color: "var(--fs-muted)" }}
                >
                  +977 980-879-0813
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--fs-gold)" }}
            >
              Location
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--fs-muted)" }}
            >
              Saat Ghumti Marg
              <br />
              Thamel, Kathmandu
              <br />
              44600, Nepal
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-[6vh] pt-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-wide"
          style={{
            borderTop: "1px solid var(--fs-border)",
            color: "var(--fs-muted)",
            opacity: 0.5,
          }}
        >
          <p>&copy; {new Date().getFullYear()} 4Stories. All rights reserved.</p>
          <p className="font-serif italic">Where every floor tells a different tale.</p>
        </div>
      </div>
    </footer>
  );
}

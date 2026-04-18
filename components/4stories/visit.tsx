"use client";

export default function FsVisit() {
  return (
    <section
      id="visit"
      className="relative py-[18vh] px-[5vw]"
      style={{ background: "var(--fs-surface)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="fs-divider mb-[10vh]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: Heading & Map */}
          <div className="md:col-span-6">
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-5"
              style={{ color: "var(--fs-gold)" }}
              data-fs-reveal
            >
              Find Us
            </p>
            <h2
              className="font-serif leading-[1.05] mb-8"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                color: "var(--fs-cream)",
              }}
              data-fs-reveal
            >
              Come write your
              <br />
              <span className="fs-text-gradient">story.</span>
            </h2>
            <p
              className="text-[1rem] leading-[1.7] mb-10 max-w-md"
              style={{ color: "var(--fs-muted)" }}
              data-fs-reveal
            >
              We are nestled in the winding lanes of Thamel, on Saat Ghumti
              Marg. Look for the warmly lit entrance — you will know you have
              arrived.
            </p>

            {/* Map embed placeholder */}
            <div
              className="relative aspect-[16/10] rounded-sm overflow-hidden"
              data-fs-reveal
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1!2d85.3105!3d27.7157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaat+Ghumti+Marg%2C+Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="4Stories location on Google Maps"
                style={{
                  filter: "invert(0.92) hue-rotate(180deg) saturate(0.3) brightness(0.7)",
                }}
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-between">
            {/* Hours */}
            <div data-fs-reveal>
              <h3
                className="text-[10px] tracking-[0.3em] uppercase mb-6"
                style={{ color: "var(--fs-gold)" }}
              >
                Hours
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  ["The Ground (Coffee)", "7 AM — 5 PM"],
                  ["The Mezzanine (Kitchen)", "8 AM — 10 PM"],
                  ["The Bar", "5 PM — 2 AM"],
                  ["The Terrace", "5 PM — 12 AM"],
                ].map(([name, hours]) => (
                  <div
                    key={name}
                    className="flex justify-between items-baseline pb-3"
                    style={{ borderBottom: "1px solid var(--fs-border)" }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--fs-cream)" }}
                    >
                      {name}
                    </span>
                    <span
                      className="text-xs tracking-wider"
                      style={{ color: "var(--fs-muted)" }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="mt-3 text-[11px]"
                style={{ color: "var(--fs-muted)", opacity: 0.6 }}
              >
                Open 7 days a week
              </p>
            </div>

            {/* Contact */}
            <div className="mt-12" data-fs-reveal>
              <h3
                className="text-[10px] tracking-[0.3em] uppercase mb-6"
                style={{ color: "var(--fs-gold)" }}
              >
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "var(--fs-muted)" }}
                  >
                    Address
                  </p>
                  <p className="text-sm" style={{ color: "var(--fs-cream)" }}>
                    Saat Ghumti Marg
                    <br />
                    Thamel, Kathmandu 44600
                    <br />
                    Nepal
                  </p>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "var(--fs-muted)" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+9779808790813"
                    className="text-sm transition-colors duration-300 hover:text-[var(--fs-gold)]"
                    style={{ color: "var(--fs-cream)" }}
                  >
                    +977 980-879-0813
                  </a>
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ color: "var(--fs-muted)" }}
                  >
                    Social
                  </p>
                  <a
                    href="https://www.instagram.com/4stories.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-300 hover:text-[var(--fs-gold)]"
                    style={{ color: "var(--fs-cream)" }}
                  >
                    @4stories.np
                  </a>
                </div>
              </div>
            </div>

            {/* Reserve CTA */}
            <div className="mt-12" data-fs-reveal>
              <a
                href="tel:+9779808790813"
                className="fs-btn w-full justify-center"
              >
                Reserve a Table
                <span aria-hidden>→</span>
              </a>
              <p
                className="mt-3 text-center text-[11px]"
                style={{ color: "var(--fs-muted)", opacity: 0.5 }}
              >
                Call or DM us on Instagram for reservations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

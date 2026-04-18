import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Ayro",
  description:
    "Start a project with Ayro — AI-powered product, brand, and editorial engagements.",
};

export default function ContactPage() {
  return (
    <section
      className="relative overflow-hidden pt-[160px] pb-[14vh] min-h-[85vh]"
      style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 0%, rgba(193,255,114,0.22) 0%, rgba(248,246,242,0) 60%)",
        }}
      />
      <div
        className="cloud-blob"
        style={{
          width: "55vw",
          height: "55vw",
          left: "-15vw",
          top: "0vw",
          background: "rgba(193,255,114,0.18)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <div className="pill" data-reveal>
            <span className="dot" />
            Inquiries open · Q2 2026
          </div>
          <h1
            className="display mt-8 text-ink max-w-[16ch]"
            style={{ fontSize: "clamp(2.5rem, 6.4vw, 5.4rem)" }}
            data-reveal
          >
            A brief note is often enough.
          </h1>
          <p
            className="mt-7 max-w-[56ch] text-[17px] md:text-[19px] leading-[1.55] text-ink/65"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Tell me a little about the project — ambition, timing, and the
            shape of the team. I reply to every note personally within two
            working days.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <Link
              href="mailto:hello@ayro.studio"
              className="btn-lime magnetic inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
            >
              hello@ayro.studio
              <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/work"
              className="magnetic inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur hover:bg-white transition-colors"
            >
              See the work
            </Link>
          </div>
        </div>

        <aside
          className="col-span-12 md:col-span-4 md:col-start-9 space-y-4 mt-16 md:mt-0"
          data-reveal
          style={{ ["--reveal-delay" as string]: "160ms" }}
        >
          {[
            {
              k: "Availability",
              v: (
                <>
                  Two partnerships per quarter. Current lead time{" "}
                  <span className="text-ink font-semibold">Late 2026</span>.
                </>
              ),
            },
            {
              k: "Ideal engagements",
              v: (
                <ul className="mt-1 text-ink/70 leading-[1.7] list-none space-y-0.5">
                  <li>— AI-native product surfaces</li>
                  <li>— Editorial apps and publications</li>
                  <li>— Design systems with voice</li>
                  <li>— Founders with a point of view</li>
                </ul>
              ),
            },
            {
              k: "Hours",
              v: (
                <>
                  Mon — Thu, 10:00 — 17:00 GMT.
                  <br />A single, deliberate inbox review each afternoon.
                </>
              ),
            },
          ].map((row) => (
            <div
              key={row.k}
              className="cream-card p-5"
              style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.03), 0 18px 40px -20px rgba(0,0,0,0.08)" }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-2 flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-limedeep" />
                {row.k}
              </p>
              <div className="text-[14px] text-ink/75 leading-[1.6]">{row.v}</div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckGlyph,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Start a Project — Ayro",
  description:
    "Begin a conversation with Ayro — premium apps and digital experiences built with Cursor, Figma, Claude & OpenAI.",
};

const SCOPES = [
  "Product design + build",
  "Brand identity",
  "AI integration strategy",
  "Ongoing partnership",
];

export default function ContactPage() {
  return (
    <>
      <section
        data-nav-theme="light"
        className="relative overflow-hidden pt-[140px] pb-[8vh]"
        style={{
          paddingLeft: "clamp(1rem, 4vw, 3rem)",
          paddingRight: "clamp(1rem, 4vw, 3rem)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[80vh] pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 10%, rgba(193,255,114,0.28) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1100px] mx-auto">
          <div className="pill pill-lime" data-reveal>
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span className="text-ink/80">Start a project</span>
          </div>
          <h1
            className="font-display text-ink leading-[0.98] mt-6 max-w-[20ch]"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.2rem)" }}
            data-reveal
          >
            A short note is usually enough.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Tell me about your ambition, the team, and the shape of the work.
            I reply to every inquiry within two working days — personally,
            always.
          </p>
        </div>
      </section>

      <section
        data-nav-theme="light"
        className="relative pb-[20vh]"
        style={{
          paddingLeft: "clamp(1rem, 4vw, 3rem)",
          paddingRight: "clamp(1rem, 4vw, 3rem)",
        }}
      >
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-12 gap-6 md:gap-10">
          <form
            className="col-span-12 md:col-span-7 card p-7"
            data-reveal
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-ink/60">Name</label>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink/30"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ink/60">Email</label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink/30"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-ink/60">
                Company or product
              </label>
              <input
                name="company"
                type="text"
                className="mt-1 w-full rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink/30"
              />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium text-ink/60">
                The ambition
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="A paragraph is plenty."
                className="mt-1 w-full rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-ink/30 resize-none"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-ink/50 max-w-xs">
                By sending this, you agree to a single personal reply from
                Ayro — no lists, ever.
              </div>
              <button type="submit" className="btn-dark lime-pulse">
                Send it
                <ArrowUpRight />
              </button>
            </div>
          </form>

          <aside
            className="col-span-12 md:col-span-4 md:col-start-9 space-y-6"
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            <div className="card">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Ideal engagements
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink/80">
                {SCOPES.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <CheckGlyph />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Direct
              </div>
              <Link
                href="mailto:work@ayro.studio"
                className="mt-3 inline-flex items-center gap-2 text-ink font-medium hover:text-ink/70 transition-colors"
              >
                work@ayro.studio
                <ArrowUpRight />
              </Link>
              <p className="mt-3 text-xs text-ink/50 leading-relaxed">
                Prefer something less formal? LinkedIn and X work equally
                well — see the footer.
              </p>
            </div>
            <div className="card card-dark">
              <div className="text-[11px] uppercase tracking-[0.18em] text-cream/40">
                Availability
              </div>
              <p className="mt-3 text-cream/90 text-sm leading-relaxed">
                Two active partnerships per quarter. Current lead time:{" "}
                <span className="text-lime">Late 2026</span>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

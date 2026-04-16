import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Ayro",
  description:
    "Inquiries for product, brand, and editorial engagements. Ayro is taking on a small number of partnerships each year.",
};

export default function ContactPage() {
  return (
    <section
      className="relative overflow-hidden pt-[180px] pb-[12vh] min-h-[85vh]"
      style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
    >
      <div
        className="cloud-blob"
        style={{
          width: "60vw",
          height: "60vw",
          left: "-15vw",
          top: "-10vw",
          background: "rgba(196,164,132,0.2)",
        }}
      />
      <div
        className="cloud-blob"
        style={{
          width: "45vw",
          height: "45vw",
          right: "-10vw",
          bottom: "-10vw",
          background: "rgba(212,165,165,0.18)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <p
            className="text-xs uppercase tracking-[0.3em] text-taupe mb-6"
            data-reveal
          >
            Inquiries
          </p>
          <h1
            className="font-serif text-charcoal leading-[1.02] max-w-[16ch]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
            data-reveal
          >
            A brief note is often enough.
          </h1>
          <p
            className="mt-8 max-w-xl text-[1.0625rem] leading-[1.75] text-taupe"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Tell me a little about the project — ambition, timing, and the
            shape of the team. I reply to every note personally within two
            working days.
          </p>

          <div
            className="mt-12 flex flex-col items-start gap-6"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <Link
              href="mailto:hello@ayro.studio"
              className="magnetic inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-7 py-4 text-sm tracking-[0.12em] uppercase hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_4px_20px_rgba(42,42,42,0.15)]"
            >
              hello@ayro.studio
              <span aria-hidden>→</span>
            </Link>
            <p className="text-xs text-taupe tracking-wide max-w-sm">
              Prefer something less formal? A direct message on LinkedIn or X
              works equally well.
            </p>
          </div>
        </div>

        <aside
          className="col-span-12 md:col-span-4 md:col-start-9 space-y-10 mt-16 md:mt-0"
          data-reveal
          style={{ ["--reveal-delay" as string]: "160ms" }}
        >
          <div className="border-t border-stone pt-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-taupe mb-2">
              Availability
            </p>
            <p className="text-sm text-charcoal leading-[1.6]">
              Taking on two partnerships per quarter. Current lead time:{" "}
              <span className="text-terracotta">Late 2026</span>.
            </p>
          </div>

          <div className="border-t border-stone pt-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-taupe mb-2">
              Ideal engagements
            </p>
            <ul className="text-sm text-charcoal leading-[1.7] space-y-1">
              <li>Product surfaces with editorial ambition</li>
              <li>Brand moments that need a quiet rethink</li>
              <li>Publication shells and slow commerce</li>
              <li>Founders with a point of view</li>
            </ul>
          </div>

          <div className="border-t border-stone pt-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-taupe mb-2">
              Hours
            </p>
            <p className="text-sm text-charcoal leading-[1.6]">
              Mon — Thu, 10:00 — 17:00 GMT.
              <br />A single, deliberate inbox review each afternoon.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

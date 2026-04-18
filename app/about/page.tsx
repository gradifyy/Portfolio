import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Ayro",
  description:
    "Ayro works at the quiet edge of product and editorial — a strategic practice that augments creative decisions with modern tools.",
};

export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-[160px] pb-[12vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 80% 0%, rgba(193,255,114,0.2) 0%, rgba(248,246,242,0) 60%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="pill" data-reveal>
              <span className="dot" />
              The approach
            </div>
            <h1
              className="display mt-8 text-ink leading-[1.02] max-w-[20ch]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              data-reveal
            >
              A quiet practice for products that outlast their launch.
            </h1>
          </div>
          <div
            className="col-span-12 md:col-span-4 md:col-start-9 relative aspect-[3/4] rounded-[4px] overflow-hidden cloudy-mask bg-stone"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <Image
              src="/images/portrait.svg"
              alt="Portrait of Ayro"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section
        className="py-[12vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3 space-y-10">
            <p
              className="display text-[1.75rem] md:text-[2.2rem] leading-[1.2] text-ink"
              data-reveal
            >
              I work at the quiet edge of product and editorial — a studio of
              one with a preference for restraint, rhythm, and proofs of work.
            </p>

            <div
              className="text-[1.0625rem] leading-[1.75] text-ink/70 space-y-5"
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              <p>
                My practice is small by design. Each engagement begins with a
                long conversation and a deliberate scope — usually a single
                product surface, a brand moment, or a publication shell. I
                sketch, write, and build in the same session. The tools I use
                augment creative decisions without demanding attention.
              </p>
              <p>
                I believe interfaces should dissolve into experience. That
                density is almost always a design failure disguised as
                ambition. That the right pace of a product is slower than the
                industry insists.
              </p>
              <p>
                I operate across strategy, product design, and development. I
                partner with founders who care about how the thing is said,
                not just what the thing does — and with studios who need a
                calm, end-to-end hand for short, decisive engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-[12vh] bg-sand"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p
            className="text-xs uppercase tracking-[0.3em] text-taupe mb-6"
            data-reveal
          >
            Capabilities
          </p>
          <h2
            className="display text-ink leading-[1.05] max-w-[18ch] mb-[8vh]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            data-reveal
          >
            A considered range — selected, not exhaustive.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                heading: "Product design & build",
                items: [
                  "Editorial product interfaces",
                  "Design systems with restraint",
                  "Next.js & TypeScript engineering",
                  "Prototyping at production fidelity",
                ],
              },
              {
                heading: "Brand & identity",
                items: [
                  "Voice, tone, and editorial systems",
                  "Wordmarks and quiet identities",
                  "Art direction for digital surfaces",
                  "Naming and positioning notes",
                ],
              },
              {
                heading: "Strategy",
                items: [
                  "Pace and scope before features",
                  "Audits, re-briefs, and re-launches",
                  "AI as augmentation, not aesthetic",
                  "Operating cadence for small teams",
                ],
              },
            ].map((group, i) => (
              <div
                key={group.heading}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <h3 className="display text-[1.5rem] text-ink mb-5">
                  {group.heading}
                </h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  {group.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-limedeep" aria-hidden>
                        —
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-[14vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p
            className="text-xs uppercase tracking-[0.3em] text-taupe mb-6"
            data-reveal
          >
            Process
          </p>
          <h2
            className="display text-ink leading-[1.05] max-w-[20ch] mb-[8vh]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            data-reveal
          >
            Four movements — quiet, deliberate, reversible.
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-[6vh]">
            {[
              {
                step: "01",
                title: "Orient",
                body:
                  "A long conversation. I map ambition against constraint and return with a scope that trades features for pace.",
              },
              {
                step: "02",
                title: "Sketch",
                body:
                  "Low-fidelity explorations. Copy, sketches, reference. We agree on tone before we agree on pixels.",
              },
              {
                step: "03",
                title: "Build",
                body:
                  "Design and development share a single timeline. Prototypes arrive at production fidelity.",
              },
              {
                step: "04",
                title: "Release",
                body:
                  "A calm launch, a measured audit, and a handoff that leaves the team confident to continue on their own.",
              },
            ].map((m, i) => (
              <li
                key={m.step}
                className="border-t border-stone pt-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="flex items-baseline gap-5">
                  <span className="display text-[1.5rem] text-limedeep">
                    {m.step}
                  </span>
                  <h3 className="display text-[1.5rem] text-ink">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-3 text-[1rem] leading-[1.7] text-ink/70 max-w-md">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

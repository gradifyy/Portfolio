import {
  CheckGlyph,
  CursorGlyph,
  FigmaGlyph,
  ClaudeGlyph,
  OpenAIGlyph,
  BoltGlyph,
  ArrowUpRight,
} from "./icons";

const DISCOVERY_STEPS = [
  "Brief & ambition mapping",
  "Audit of current surfaces",
  "Scope + timeline aligned",
  "Kickoff workshop",
];

const COLLAB = [
  { name: "Nora P.", hue: "#F2D6C2", initials: "NP" },
  { name: "Luca M.", hue: "#CFEDB9", initials: "LM" },
  { name: "Sana K.", hue: "#D3D5F5", initials: "SK" },
  { name: "Rei T.", hue: "#F6E3A7", initials: "RT" },
];

const PARTNERS = [
  "Northwind",
  "Studio Paper",
  "Meridian",
  "Lumen Labs",
  "Kindred",
  "Soft Systems",
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      data-nav-theme="dark"
      className="surface-charcoal relative py-[14vh]"
      style={{
        paddingLeft: "clamp(1rem, 4vw, 3rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* top seam: subtle lime haze */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-24 h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(193,255,114,0.12), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex pill text-cream/80" data-reveal>
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            The process
          </div>
          <h2
            className="font-display text-cream leading-[0.98] mt-5"
            style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.2rem)" }}
            data-reveal
          >
            How Ayro Works
          </h2>
          <p
            className="mt-5 text-cream/70 text-base md:text-lg max-w-xl mx-auto"
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            Four quiet movements — from first conversation to live product.
            Every step is reversible, considered, and shipped with proof.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {/* Card 1: Discovery */}
          <div
            className="col-span-12 md:col-span-5 card"
            data-reveal
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/40">
                  Step 01
                </div>
                <h3 className="font-display text-2xl mt-1 text-ink">
                  Discovery
                </h3>
              </div>
              <span className="btn-ghost py-1.5 px-3 text-xs">For all scopes</span>
            </div>
            <p className="mt-3 text-sm text-ink/60">
              Honest conversations about what the product needs to be — and
              what it doesn&apos;t.
            </p>
            <ul className="mt-4 space-y-2.5">
              {DISCOVERY_STEPS.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm">
                  <CheckGlyph />
                  <span className="text-ink/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Community & Collaboration */}
          <div
            className="col-span-12 md:col-span-3 card relative overflow-hidden"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 w-40 h-40 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(193,255,114,0.35), transparent 65%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center -space-x-2">
                {COLLAB.map((a) => (
                  <div
                    key={a.initials}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-medium"
                    style={{ background: a.hue, color: "#2a2a2a" }}
                  >
                    {a.initials}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white bg-lime flex items-center justify-center text-[11px] font-semibold text-ink">
                  +12
                </div>
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-ink/40">
                Step 02
              </div>
              <h3 className="font-display text-2xl mt-1 text-ink">
                Community
              </h3>
              <p className="mt-3 text-sm text-ink/60">
                Like-minded collaborators, reviewers, and specialists brought
                in as each phase calls for them.
              </p>
            </div>
          </div>

          {/* Card 3: Advanced Execution (tools grid) */}
          <div
            className="col-span-12 md:col-span-4 card"
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/40">
                  Step 03
                </div>
                <h3 className="font-display text-2xl mt-1 text-ink">
                  Advanced Execution
                </h3>
              </div>
              <span className="btn-ghost py-1.5 px-3 text-xs">AI-native</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                <FigmaGlyph key="1" />,
                <CursorGlyph key="2" />,
                <ClaudeGlyph key="3" />,
                <OpenAIGlyph key="4" />,
                <span
                  key="5"
                  className="inline-flex items-center justify-center w-full h-full rounded-xl bg-ink text-lime text-xs font-semibold"
                >
                  Next.js
                </span>,
                <span
                  key="6"
                  className="inline-flex items-center justify-center w-full h-full rounded-xl bg-lime text-ink"
                >
                  <BoltGlyph size={18} />
                </span>,
              ].map((g, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-[#F5F3EC] flex items-center justify-center"
                >
                  {g}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink/60">
              End-to-end execution across design, code, and AI — no handoffs,
              no drag.
            </p>
          </div>

          {/* Card 4: Launch & Scale */}
          <div
            className="col-span-12 card"
            data-reveal
            style={{ ["--reveal-delay" as string]: "240ms" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-md">
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink/40">
                  Step 04
                </div>
                <h3 className="font-display text-2xl mt-1 text-ink">
                  Launch &amp; Scale
                </h3>
                <p className="mt-2 text-sm text-ink/60">
                  Quiet launches. Real metrics. Ongoing tuning once the product
                  is out in the world.
                </p>
                <a href="#work" className="inline-flex items-center gap-1.5 mt-4 text-sm text-ink font-medium border-b border-ink/20 hover:border-ink transition-colors">
                  See partner outcomes <ArrowUpRight />
                </a>
              </div>
              <div className="overflow-hidden -mr-4 md:-mr-8">
                <div className="marquee-track">
                  {[...PARTNERS, ...PARTNERS].map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3EC] text-ink/80 text-sm whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-2" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

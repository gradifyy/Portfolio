import Link from "next/link";
import FloatingIcons from "@/components/floating-icons";
import PhoneMockup from "@/components/phone-mockup";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    body:
      "Strategy, research and positioning. We pin down the one job the product must do before anything is designed.",
    accent: "cream",
  },
  {
    step: "02",
    title: "Design",
    body:
      "Figma systems, motion studies and editorial layouts. AI-assisted exploration with Claude and OpenAI.",
    accent: "lime",
  },
  {
    step: "03",
    title: "Build",
    body:
      "Production code shipped with Cursor + Next.js. Calm interfaces, considered motion, zero noise.",
    accent: "cream",
  },
];

const capabilities = [
  {
    title: "iOS & Web Apps",
    tags: ["React Native", "Next.js", "Swift-flavored"],
    body: "End-to-end product builds for founders and studios.",
    span: "md:col-span-4",
  },
  {
    title: "AI-Native Interfaces",
    tags: ["Claude", "OpenAI", "Function calling"],
    body:
      "Conversational flows, structured outputs, and agentic tooling wired into real UIs.",
    span: "md:col-span-5",
  },
  {
    title: "Design Systems",
    tags: ["Figma", "Tokens", "Motion"],
    body: "Composable libraries that keep product and brand in lockstep.",
    span: "md:col-span-3",
  },
  {
    title: "Editorial Sites",
    tags: ["MDX", "Lenis", "Type-led"],
    body: "Magazine-quality websites for brands that speak in sentences, not bullets.",
    span: "md:col-span-4",
  },
  {
    title: "Prototyping",
    tags: ["Cursor", "v0", "Claude Artifacts"],
    body: "Working prototypes in days, not sprints. Ship to stakeholders, not to decks.",
    span: "md:col-span-4",
  },
  {
    title: "Launch Strategy",
    tags: ["Positioning", "Narrative", "Press"],
    body: "A point of view before a palette. Say something, then look good saying it.",
    span: "md:col-span-4",
  },
];

const communityBadges = [
  "Figma Community",
  "Read.cv",
  "Designer Fund",
  "Indie Hackers",
  "WIP",
  "On Deck Design",
];

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO — cream, floating icons orbit the headline, phone peeks up
         ========================================================= */}
      <section
        className="relative overflow-hidden pt-[110px] pb-0"
        style={{ paddingLeft: "4vw", paddingRight: "4vw" }}
      >
        {/* Soft radial wash */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 55% at 50% 30%, rgba(193,255,114,0.14) 0%, rgba(248,246,242,0) 65%)",
          }}
        />

        <div className="relative mx-auto max-w-[1180px]">
          {/* Orbit area — headline sits at dead center, icons use px offsets around it */}
          <div className="relative mx-auto" style={{ height: 560 }}>
            <FloatingIcons />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
              <div data-reveal>
                <div className="pill">
                  <span className="dot" />
                  Special launch offer for early visionaries
                </div>
              </div>

              <h1
                className="display mt-5 text-ink"
                style={{
                  fontSize: "clamp(2.1rem, 4.6vw, 3.75rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.035em",
                  maxWidth: "16ch",
                }}
                data-reveal
              >
                <span className="block">Get Premium Digital</span>
                <span className="block">Experiences From</span>
                <span className="block relative inline-block">
                  <span className="relative z-10">AI-Powered Design</span>
                </span>
              </h1>

              <div
                className="mt-7"
                data-reveal
                style={{ ["--reveal-delay" as string]: "160ms" }}
              >
                <Link
                  href="/contact"
                  className="btn-ink magnetic inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Start a Project
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Phone mockup peeks up from the bottom of the hero,
              with its lower half bleeding into the next section */}
          <div
            className="relative z-10 flex justify-center"
            data-reveal
            style={{
              ["--reveal-delay" as string]: "300ms",
              marginTop: "-80px",
              marginBottom: "-220px",
            }}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-10 rounded-[60px]"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 40%, rgba(193,255,114,0.32) 0%, rgba(248,246,242,0) 70%)",
                  filter: "blur(10px)",
                }}
              />
              <PhoneMockup />
            </div>
          </div>

          {/* Subheadline below phone */}
          <p
            className="relative z-10 mx-auto mt-[260px] max-w-[560px] text-center text-[16px] md:text-[18px] leading-[1.55] text-ink/65"
            data-reveal
          >
            Ayro crafts strategic apps and digital experiences using Cursor,
            Figma, Claude &amp; OpenAI.
          </p>
        </div>
      </section>

      {/* =========================================================
          MARQUEE STRIP — tool stack
         ========================================================= */}
      <section className="relative border-y border-line bg-cream-soft/60 py-8 overflow-hidden">
        <div
          className="flex items-center gap-14 whitespace-nowrap animate-[marquee_30s_linear_infinite] text-[13px] uppercase tracking-[0.18em] text-ink/55"
          style={{ animation: "none" }}
        >
          {[
            "Cursor",
            "Figma",
            "Claude",
            "OpenAI",
            "Next.js",
            "Swift",
            "Framer",
            "Linear",
            "Vercel",
          ]
            .concat([
              "Cursor",
              "Figma",
              "Claude",
              "OpenAI",
              "Next.js",
              "Swift",
            ])
            .map((t, i) => (
              <span key={i} className="flex items-center gap-4 shrink-0">
                <span className="font-semibold text-ink/80">{t}</span>
                <span className="inline-block h-1 w-1 rounded-full bg-ink/30" />
              </span>
            ))}
        </div>
      </section>

      {/* =========================================================
          TRANSITION — cream → charcoal
         ========================================================= */}
      <section
        className="relative pt-[14vh] pb-[10vh]"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          background:
            "linear-gradient(180deg, var(--cream) 0%, #eaf7d2 40%, #cfe6a2 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1280px] text-center">
          <p
            className="text-[12px] uppercase tracking-[0.22em] text-ink/60"
            data-reveal
          >
            What makes a website feel premium
          </p>
          <h2
            className="display mt-4 mx-auto max-w-[18ch] text-ink"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            data-reveal
          >
            Intention over decoration. Motion over marketing.
          </h2>
        </div>
      </section>

      {/* =========================================================
          PROCESS — dark "How" section (grid of cards)
         ========================================================= */}
      <section
        className="relative pt-[16vh] pb-[18vh] text-cream"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          background:
            "linear-gradient(180deg, #cfe6a2 0%, #6f7f55 18%, var(--charcoal) 40%, var(--charcoal) 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1280px]">
          <div className="text-center mb-14">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cream/70"
              data-reveal
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              Process
            </p>
            <h2
              className="display mt-6 mx-auto max-w-[16ch] text-cream"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              data-reveal
            >
              How Ayro turns ambition into product.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {processSteps.map((s, i) => {
              const isLime = s.accent === "lime";
              return (
                <article
                  key={s.step}
                  className={[
                    "dark-card relative overflow-hidden p-8 min-h-[320px] flex flex-col",
                    isLime ? "" : "",
                  ].join(" ")}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full"
                    style={{
                      background: isLime
                        ? "radial-gradient(circle, rgba(193,255,114,0.45) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                      filter: "blur(6px)",
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-cream/50">
                      {s.step}
                    </span>
                    <span
                      className={[
                        "inline-flex h-8 w-8 items-center justify-center rounded-full",
                        isLime ? "bg-lime text-ink" : "bg-white/10 text-cream",
                      ].join(" ")}
                    >
                      ↗
                    </span>
                  </div>
                  <h3
                    className={[
                      "display mt-10",
                      isLime ? "text-lime" : "text-cream",
                    ].join(" ")}
                    style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-cream/70 max-w-[36ch]">
                    {s.body}
                  </p>
                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-white/10" />
                    <div className="mt-4 flex justify-between text-[11px] text-cream/40 uppercase tracking-[0.2em]">
                      <span>Step {s.step}</span>
                      <span>Ayro ·</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENTO — capabilities grid
         ========================================================= */}
      <section
        className="relative bg-charcoal text-cream pt-[8vh] pb-[16vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="relative mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p
                className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cream/70"
                data-reveal
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                Capabilities
              </p>
              <h2
                className="display mt-5 max-w-[20ch] text-cream"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)" }}
                data-reveal
              >
                Every surface, shaped around the same point of view.
              </h2>
            </div>
            <p
              className="md:max-w-[36ch] text-[15px] leading-[1.6] text-cream/60"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              A small, deliberate menu — not a full-service agency deck.
              Each capability is built around how modern AI tools actually
              change the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {capabilities.map((c, i) => (
              <article
                key={c.title}
                className={[
                  "dark-card p-6 md:p-8 min-h-[240px] flex flex-col gap-4 col-span-12",
                  c.span,
                ].join(" ")}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cream/15 bg-cream/5 px-2.5 py-0.5 text-[11px] text-cream/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3
                  className="display text-cream"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.75rem)" }}
                >
                  {c.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-cream/65">{c.body}</p>
                <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-cream/35">
                  <span>0{i + 1}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime/10 text-lime">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONNECT — dark section with iPhone + lime QR + event-style badges
         ========================================================= */}
      <section
        id="community"
        className="relative bg-charcoal text-cream pt-[6vh] pb-[22vh] overflow-hidden"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="relative mx-auto max-w-[1280px]">
          <div className="text-center mb-16">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-cream/70"
              data-reveal
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
              Connect
            </p>
            <h2
              className="display mt-6 mx-auto max-w-[22ch] text-cream"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              data-reveal
            >
              Where Ayro is. And where we go next.
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            {/* LEFT badges */}
            <div className="lg:col-span-4 flex flex-col gap-4 items-start lg:items-end">
              {["Available for 2026 Q2", "Remote · London", "Open Source Office Hours"].map(
                (b, i) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-2.5 text-[13px] text-cream/80"
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px]">
                      ◎
                    </span>
                    {b}
                    <span className="ml-1 text-cream/40">↗</span>
                  </div>
                )
              )}
            </div>

            {/* CENTER phone */}
            <div className="lg:col-span-4 flex justify-center" data-reveal>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-10 rounded-[60px]"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 40%, rgba(193,255,114,0.35) 0%, rgba(28,28,28,0) 70%)",
                    filter: "blur(10px)",
                  }}
                />
                <div
                  className="phone"
                  style={{
                    boxShadow:
                      "0 30px 80px -30px rgba(193,255,114,0.25), 0 8px 20px -8px rgba(0,0,0,0.6), inset 0 0 0 1px #000",
                  }}
                >
                  <div className="phone-screen" style={{ background: "#1f1f1f" }}>
                    <div className="relative z-[2] flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-cream">
                      <span>18:23</span>
                      <span className="opacity-70">80%</span>
                    </div>
                    <div className="px-5 pt-6">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-cream/50 mb-1">
                        Upcoming
                      </p>
                      <h4 className="display text-cream text-[20px]">
                        AI x Product Summit
                      </h4>
                      <p className="mt-2 text-[11px] text-cream/60 leading-[1.5]">
                        12 Jun 2026 · London · Join Ayro for a studio session
                        on AI-assisted product craft.
                      </p>

                      {/* QR */}
                      <div className="mt-5 rounded-2xl bg-lime p-3">
                        <div className="grid grid-cols-8 gap-[2px]">
                          {Array.from({ length: 64 }).map((_, i) => (
                            <span
                              key={i}
                              className="aspect-square rounded-[2px]"
                              style={{
                                background:
                                  (i * 7) % 5 === 0 || (i * 3) % 7 === 0
                                    ? "#111"
                                    : "transparent",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mt-4 text-center text-[10px] text-cream/50">
                        Scan to RSVP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT badges */}
            <div className="lg:col-span-4 flex flex-col gap-4 items-start">
              {[
                "Config 2026 · Figma",
                "Dub Dub · WWDC meetup",
                "Design Engineering Night",
              ].map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 px-4 py-2.5 text-[13px] text-cream/80"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px]">
                    ◎
                  </span>
                  {b}
                  <span className="ml-1 text-cream/40">↗</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-16 text-center text-[13px] text-cream/60 max-w-[50ch] mx-auto">
            Connect with potential collaborators, founders and product teams —
            either in a thread, a room, or over a long coffee.
          </p>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY — cream, photo card + CTA badges
         ========================================================= */}
      <section
        className="relative pt-[14vh] pb-[18vh]"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          background:
            "linear-gradient(180deg, var(--charcoal) 0%, #3a3a30 12%, var(--cream) 32%, var(--cream) 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1280px]">
          <div className="cream-card overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Copy */}
            <div className="md:col-span-6 p-10 md:p-14 flex flex-col justify-center" data-reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                Community
              </p>
              <h2
                className="display mt-4 text-ink"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                Become a part of our great community.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.65] text-ink/65 max-w-[44ch]">
                Ayro partners with a small circle of design engineers,
                founders and studios. Join the rooms we show up in — or let’s
                start a new one.
              </p>

              {/* App-store-style badges — turned into community memberships */}
              <div className="mt-8 flex flex-wrap gap-3">
                {communityBadges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-[12px] text-ink"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-limedeep" />
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-ink magnetic inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  Start a Project <span aria-hidden>↗</span>
                </Link>
                <Link
                  href="/work"
                  className="magnetic text-sm font-semibold text-ink border-b border-ink/30 pb-1 hover:border-limedeep transition-colors"
                >
                  See selected work →
                </Link>
              </div>
            </div>

            {/* Visual — gradient + orbit */}
            <div
              className="md:col-span-6 relative min-h-[420px] overflow-hidden"
              style={{
                background:
                  "radial-gradient(80% 80% at 70% 30%, rgba(193,255,114,0.55) 0%, rgba(248,246,242,0) 60%), linear-gradient(135deg, #f1ecde 0%, #e8e1d5 100%)",
              }}
            >
              {/* Orbiting ring of little chips */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[360px] w-[360px]">
                  <div className="absolute inset-0 rounded-full border border-ink/10" />
                  <div className="absolute inset-6 rounded-full border border-ink/5" />
                  <div className="orbit-slow absolute inset-0">
                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.18)] flex items-center justify-center text-[12px] font-semibold text-ink"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${deg}deg) translate(160px) rotate(-${deg}deg)`,
                        }}
                      >
                        {
                          [
                            "F",
                            "C",
                            "A",
                            "O",
                            "S",
                            "N",
                          ][i]
                        }
                      </div>
                    ))}
                  </div>
                  {/* Center Ayro */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-[22px] bg-ink flex items-center justify-center text-cream display text-2xl">
                    A
                    <span className="absolute -right-1.5 -top-1.5 inline-block h-3 w-3 rounded-full bg-lime ring-4 ring-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ / Closing — optional short strip
         ========================================================= */}
      <section
        className="relative py-[12vh] border-t border-line"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55" data-reveal>
              Working with Ayro
            </p>
            <h2
              className="display mt-4 text-ink"
              style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}
              data-reveal
            >
              Small team. Long-running engagements. One point of view.
            </h2>
          </div>

          <dl className="md:col-span-7 flex flex-col divide-y divide-line">
            {[
              {
                q: "How long is a typical engagement?",
                a: "6–12 weeks for a focused build, open-ended retainers for product partners.",
              },
              {
                q: "Do you replace an in-house team?",
                a: "No — Ayro augments. We plug into your codebase, ship, and hand off clean.",
              },
              {
                q: "Which tools do you ship with?",
                a: "Cursor, Claude, OpenAI, Figma, Next.js, Swift. Whatever keeps the work calm.",
              },
            ].map((f, i) => (
              <div
                key={f.q}
                className="py-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <dt className="text-[16px] font-semibold text-ink flex items-start justify-between gap-6">
                  {f.q}
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-lime/30 text-ink text-[13px]">
                    +
                  </span>
                </dt>
                <dd className="mt-2 text-[15px] leading-[1.6] text-ink/65">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

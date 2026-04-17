import Link from "next/link";
import PhoneMockup from "./phone-mockup";
import { ArrowUpRight } from "./icons";

const PROJECTS = [
  { title: "Next AI Launch", side: "left", top: "10%" },
  { title: "Web3 Portfolio", side: "left", top: "40%" },
  { title: "Meridian Atlas", side: "left", top: "70%" },
  { title: "Kindred Ledger", side: "right", top: "14%" },
  { title: "Lumen Fieldbook", side: "right", top: "44%" },
  { title: "Soft Systems", side: "right", top: "72%" },
];

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      data-nav-theme="dark"
      className="surface-charcoal relative overflow-hidden py-[16vh]"
      style={{
        paddingLeft: "clamp(1rem, 4vw, 3rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 -top-28 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(193,255,114,0.35), transparent 80%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="pill text-cream/80" data-reveal>
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            Featured work
          </div>
          <h2
            className="font-display text-cream leading-[0.98] mt-5"
            style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.2rem)" }}
            data-reveal
          >
            Featured Projects &amp; Collaborations
          </h2>
          <p
            className="mt-4 text-cream/70"
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            A selection of recent launches, quiet partnerships, and strategic
            builds. Tap to explore.
          </p>
        </div>

        <div className="relative grid grid-cols-12 items-center gap-4">
          {/* Left column tags */}
          <div className="col-span-12 md:col-span-4 relative h-auto md:h-[520px]">
            {PROJECTS.filter((p) => p.side === "left").map((p, i) => (
              <ProjectTag
                key={p.title}
                title={p.title}
                top={p.top}
                side="left"
                delay={i * 80}
              />
            ))}
          </div>

          {/* Center phone */}
          <div
            className="col-span-12 md:col-span-4 flex justify-center"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <PhoneMockup width={260}>
              <ProjectsPhoneContent />
            </PhoneMockup>
          </div>

          {/* Right column tags */}
          <div className="col-span-12 md:col-span-4 relative h-auto md:h-[520px]">
            {PROJECTS.filter((p) => p.side === "right").map((p, i) => (
              <ProjectTag
                key={p.title}
                title={p.title}
                top={p.top}
                side="right"
                delay={i * 80}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-cream/60 text-sm">
          Connect with forward-thinking founders, investors, and partners.
        </p>
      </div>
    </section>
  );
}

function ProjectTag({
  title,
  top,
  side,
  delay,
}: {
  title: string;
  top: string;
  side: "left" | "right";
  delay: number;
}) {
  return (
    <Link
      href="#"
      className="relative md:absolute mb-3 md:mb-0 group"
      style={{
        top,
        [side]: "0",
        ["--floaty-delay" as string]: `${delay / 100}s`,
      }}
      data-reveal
    >
      <div
        className="floaty flex items-center gap-3 pr-4 pl-3 py-2 rounded-full bg-[#262626] border border-white/5 hover:border-lime/50 transition-colors"
        style={{
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.3), 0 12px 30px -16px rgba(0,0,0,0.5)",
        }}
      >
        <span className="w-6 h-6 rounded-full bg-lime flex items-center justify-center shrink-0">
          <ArrowUpRight size={12} />
        </span>
        <span className="text-cream text-sm font-medium whitespace-nowrap">
          {title}
        </span>
      </div>
      <span className="sr-only">View {title}</span>
    </Link>
  );
}

function ProjectsPhoneContent() {
  return (
    <div className="relative h-full bg-cream text-ink">
      <div className="px-4 pt-2">
        <div className="text-[10px] text-ink/50">upcoming</div>
        <div className="font-display text-[16px] leading-tight">Next AI Launch</div>
        <div className="text-[10px] text-ink/60">
          Jun 14 · 18 collaborators
        </div>
      </div>
      <div className="mt-3 mx-4 rounded-2xl bg-[#f5f3ec] border border-ink/5 p-3 text-[10px] text-ink/70 leading-snug">
        Join the Ayro delegation as we explore the next horizon of strategic,
        AI-native product work — quietly, deliberately.
      </div>
      <div className="mt-3 mx-4 rounded-2xl bg-lime p-4 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-[3px]"
              style={{
                background: (i * 7) % 3 === 0 ? "#111" : "transparent",
                border: (i * 7) % 3 === 0 ? "none" : "1px solid rgba(17,17,17,0.25)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 text-center text-[10px] text-ink/60 px-4">
        View full work →
      </div>
    </div>
  );
}

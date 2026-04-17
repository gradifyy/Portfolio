import { ArrowUpRight } from "./icons";

type Study = {
  pill: string;
  title: string;
  body: string;
  cta: string;
  illustration: "train" | "studio" | "pair" | "focused";
  align: "left" | "right";
};

const STUDIES: Study[] = [
  {
    pill: "Build anywhere",
    title: "Build Wherever You Are",
    body: "Move between Cursor on a train, a Figma flow in a café, and a Claude session at 2am — the work follows the craftsman, not the desk.",
    cta: "View case study",
    illustration: "train",
    align: "right",
  },
  {
    pill: "Live sessions",
    title: "Live AI Design Sessions",
    body: "Open studio streams: strategy reviews, Figma-to-code spikes, and narrated redesigns. An honest, in-progress look at the practice.",
    cta: "View recordings",
    illustration: "studio",
    align: "left",
  },
  {
    pill: "Partnerships",
    title: "Work With Ayro",
    body: "A small practice by design. Two to three active partnerships at a time, each built around a decisive scope and a shared taste for restraint.",
    cta: "View engagements",
    illustration: "pair",
    align: "right",
  },
  {
    pill: "Custom fit",
    title: "Customize Your Digital Experience",
    body: "Every engagement is shaped to its founder. Deliverables, cadence, and tooling bend around the product&apos;s soul — never the reverse.",
    cta: "View process",
    illustration: "focused",
    align: "left",
  },
];

export default function CaseStudies() {
  return (
    <section
      data-nav-theme="light"
      className="surface-cream relative py-[8vh]"
      style={{
        paddingLeft: "clamp(1rem, 4vw, 3rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      <div className="relative max-w-[1200px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="pill" data-reveal>
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span className="text-ink/80">Case studies</span>
          </div>
          <h2
            className="font-display text-ink leading-[0.98] mt-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            data-reveal
          >
            Built slowly, shipped quickly.
          </h2>
        </div>

        <div className="flex flex-col gap-[14vh]">
          {STUDIES.map((s, i) => (
            <StudyRow key={s.title} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StudyRow({ study, index }: { study: Study; index: number }) {
  const textFirst = study.align === "left";
  return (
    <article className="grid grid-cols-12 gap-6 md:gap-10 items-center">
      <div
        className={[
          "col-span-12 md:col-span-5",
          textFirst ? "md:order-1" : "md:order-2 md:col-start-8",
        ].join(" ")}
        data-reveal
      >
        <div className="pill">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span className="text-ink/80">
            0{index + 1} — {study.pill}
          </span>
        </div>
        <h3
          className="font-display text-ink leading-[1.02] mt-5"
          style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)" }}
        >
          {study.title}
        </h3>
        <p className="mt-4 text-ink/65 text-base md:text-lg leading-relaxed max-w-md">
          {study.body.replace(/&apos;/g, "\u2019")}
        </p>
        <a
          href="#"
          className="inline-flex mt-6 items-center gap-2 btn-dark"
        >
          {study.cta}
          <ArrowUpRight />
        </a>
      </div>
      <div
        className={[
          "col-span-12 md:col-span-6",
          textFirst ? "md:order-2" : "md:order-1",
        ].join(" ")}
        data-reveal
        style={{ ["--reveal-delay" as string]: "140ms" }}
      >
        <Illustration type={study.illustration} />
      </div>
    </article>
  );
}

function Illustration({ type }: { type: Study["illustration"] }) {
  // Abstract, branded illustrations — no external images.
  const base =
    "relative w-full aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_30px_80px_-40px_rgba(17,17,17,0.3)]";

  if (type === "train") {
    return (
      <div
        className={base}
        style={{
          background:
            "linear-gradient(180deg, #E3F0FF 0%, #B9CFEA 50%, #1c1c1c 100%)",
        }}
      >
        <div className="absolute inset-x-0 top-[18%] h-[44%]">
          <div className="absolute inset-x-6 top-0 h-full bg-[#f5f1e7] rounded-2xl shadow-inner" />
          {/* Window frames */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-4 bottom-4 w-[22%] rounded-xl bg-white/70 backdrop-blur-sm border border-white/80"
              style={{ left: `${12 + i * 26}%` }}
            />
          ))}
        </div>
        {/* Laptop silhouette */}
        <div className="absolute left-[25%] right-[25%] bottom-[18%]">
          <div className="h-24 rounded-t-2xl bg-ink" />
          <div className="h-2 bg-ink/80 rounded-b-2xl" />
          <div className="absolute inset-x-6 top-3 h-14 rounded-lg bg-lime/90" />
        </div>
        <div className="absolute inset-x-8 bottom-3 text-[10px] text-cream/70 font-medium">
          En route · 07:42
        </div>
      </div>
    );
  }

  if (type === "studio") {
    return (
      <div
        className={base}
        style={{
          background:
            "linear-gradient(180deg, #A86DE0 0%, #EAD8FF 100%)",
        }}
      >
        <div className="absolute inset-6 rounded-2xl border border-white/30" />
        <div className="absolute inset-x-10 top-8 bottom-16 rounded-xl bg-[#f6ecff] flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[14px] border-l-ink translate-x-[2px]" />
          </div>
        </div>
        <div className="absolute bottom-5 inset-x-6 flex items-center justify-between text-ink">
          <div>
            <div className="text-xs font-semibold">LIVE</div>
            <div className="text-[10px] opacity-70">Figma → Cursor → Ship</div>
          </div>
          <div className="text-xs font-semibold">01:24:07</div>
        </div>
      </div>
    );
  }

  if (type === "pair") {
    return (
      <div
        className={base}
        style={{
          background:
            "linear-gradient(180deg, #EBE3D5 0%, #BCB29F 100%)",
        }}
      >
        <div className="absolute inset-6 rounded-2xl bg-[#faf4e6]/60 backdrop-blur-sm" />
        <div className="absolute left-[18%] right-[18%] top-[16%] bottom-[12%] grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white shadow-md flex flex-col items-center justify-center p-4 text-ink">
            <div className="w-12 h-12 rounded-full bg-[#F2D6C2] mb-2" />
            <div className="text-xs font-semibold">Founder</div>
            <div className="text-[10px] text-ink/60">Strategy</div>
          </div>
          <div className="rounded-2xl bg-ink shadow-md flex flex-col items-center justify-center p-4 text-cream">
            <div className="w-12 h-12 rounded-full bg-lime mb-2" />
            <div className="text-xs font-semibold">Ayro</div>
            <div className="text-[10px] text-cream/60">Design + Build</div>
          </div>
        </div>
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 w-8 h-8 rounded-full bg-lime text-ink font-semibold flex items-center justify-center shadow-lg">
          &amp;
        </div>
      </div>
    );
  }

  // focused
  return (
    <div
      className={base}
      style={{
        background:
          "linear-gradient(180deg, #F2EFE6 0%, #CFC7B4 100%)",
      }}
    >
      <div className="absolute inset-8 rounded-2xl bg-white shadow-md p-5">
        <div className="text-[10px] text-ink/50">In session</div>
        <div className="font-display text-[18px] mt-1">Customizing the pace</div>
        <div className="mt-3 space-y-2">
          {["Language", "Cadence", "Surface", "Deliverables"].map((r, i) => (
            <div
              key={r}
              className="flex items-center gap-3 rounded-lg border border-ink/5 px-2.5 py-2"
            >
              <span
                className={[
                  "w-4 h-4 rounded-full",
                  i % 2 === 0 ? "bg-lime" : "bg-ink",
                ].join(" ")}
              />
              <span className="text-xs text-ink/80">{r}</span>
              <span className="ml-auto text-[10px] text-ink/40">Custom</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

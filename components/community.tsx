import PhoneMockup from "./phone-mockup";

const MEMBERS = [
  { initials: "NP", hue: "#111", fg: "#C1FF72", size: 60 },
  { initials: "LM", hue: "#F2D6C2", fg: "#2a2a2a", size: 52 },
  { initials: "SK", hue: "#D3D5F5", fg: "#2a2a2a", size: 70 },
  { initials: "RT", hue: "#FFFFFF", fg: "#2a2a2a", size: 64 },
  { initials: "AE", hue: "#FFE27A", fg: "#2a2a2a", size: 56 },
  { initials: "JD", hue: "#FBC1E1", fg: "#2a2a2a", size: 68 },
  { initials: "KO", hue: "#C1FF72", fg: "#111", size: 50 },
  { initials: "VM", hue: "#EAD8FF", fg: "#2a2a2a", size: 58 },
];

const POSITIONS = [
  { top: "14%", left: "12%" },
  { top: "60%", left: "6%" },
  { top: "20%", left: "78%" },
  { top: "65%", left: "84%" },
  { top: "8%", left: "38%" },
  { top: "78%", left: "32%" },
  { top: "72%", left: "60%" },
  { top: "12%", left: "60%" },
];

export default function Community() {
  return (
    <section
      id="community"
      data-nav-theme="light"
      className="surface-lime relative overflow-hidden py-[16vh]"
      style={{
        paddingLeft: "clamp(1rem, 4vw, 3rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* Top seam fading from charcoal */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-24 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,22,22,0.4), transparent 80%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Floating portraits */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          data-reveal
        >
          {MEMBERS.map((m, i) => {
            const pos = POSITIONS[i % POSITIONS.length];
            return (
              <div
                key={i}
                className="absolute floaty rounded-full overflow-hidden ring-4 ring-white/70 shadow-[0_10px_30px_-10px_rgba(17,17,17,0.35)]"
                style={{
                  width: m.size,
                  height: m.size,
                  top: pos.top,
                  left: pos.left,
                  ["--floaty-delay" as string]: `${i * 0.35}s`,
                  ["--floaty-dur" as string]: `${6 + (i % 3)}s`,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center font-semibold"
                  style={{
                    background: m.hue,
                    color: m.fg,
                    fontSize: m.size * 0.32,
                  }}
                >
                  {m.initials}
                </div>
              </div>
            );
          })}
        </div>

        {/* Center content */}
        <div className="relative z-[1] flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="pill" data-reveal>
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            <span className="text-ink/80">Community</span>
          </div>
          <h2
            className="font-display text-ink leading-[0.98] mt-6"
            style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.2rem)" }}
            data-reveal
          >
            Join the Visionary Community
          </h2>
          <p
            className="mt-5 text-ink/75 max-w-lg mx-auto text-base md:text-lg"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Engage with fellow creators, share insights, and build the future
            together — a slow, high-signal circle of founders, designers, and
            engineers.
          </p>

          <div
            className="mt-10"
            data-reveal
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            <PhoneMockup width={240}>
              <CommunityPhoneFeed />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityPhoneFeed() {
  const messages = [
    {
      who: "Nora",
      color: "#F2D6C2",
      text: "Shipped the onboarding pass — feels ten times calmer.",
      time: "2m",
    },
    {
      who: "Luca",
      color: "#CFEDB9",
      text: "Could I steal 10m to review a nav pattern?",
      time: "6m",
    },
    {
      who: "Sana",
      color: "#D3D5F5",
      text: "That typography rhythm — chef&apos;s kiss.",
      time: "12m",
    },
    {
      who: "Rei",
      color: "#FFE27A",
      text: "AI session tonight at 8. Bring a brief.",
      time: "1h",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-cream text-ink">
      <div className="px-4 mt-1 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-ink/50">Community</div>
          <div className="font-display text-[14px] leading-none">Ayro Circle</div>
        </div>
        <div className="w-6 h-6 rounded-full bg-lime flex items-center justify-center text-[10px] font-semibold">
          +14
        </div>
      </div>
      <div className="mt-3 px-3 space-y-2.5 overflow-hidden">
        {messages.map((m, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white border border-ink/5 p-2.5 shadow-[0_6px_14px_-8px_rgba(17,17,17,0.18)]"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-semibold"
                style={{ background: m.color }}
              >
                {m.who[0]}
              </div>
              <div className="text-[10px] font-medium">{m.who}</div>
              <div className="text-[9px] text-ink/40 ml-auto">{m.time}</div>
            </div>
            <p className="mt-1.5 text-[10px] leading-snug text-ink/80">
              {m.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-auto px-3 pb-3 pt-2">
        <div className="flex items-center gap-2 rounded-full bg-white border border-ink/10 px-3 py-1.5">
          <div className="w-2 h-2 rounded-full bg-lime-2" />
          <span className="text-[10px] text-ink/50">Write a note…</span>
          <span className="ml-auto text-[10px] text-ink font-medium">Send</span>
        </div>
      </div>
    </div>
  );
}

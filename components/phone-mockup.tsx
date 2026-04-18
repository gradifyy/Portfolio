export default function PhoneMockup() {
  return (
    <div className="phone mx-auto select-none" aria-hidden>
      <div className="phone-screen">
        {/* Status bar */}
        <div className="relative z-[2] flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-ink">
          <span>18:23</span>
          <div className="flex items-center gap-1 opacity-80">
            <span>••••</span>
            <span>􀙇</span>
            <span>80%</span>
          </div>
        </div>

        {/* Inner scrolling content */}
        <div
          className="phone-scroller absolute inset-0 top-10 px-4"
          style={{ height: "calc(200% - 40px)" }}
        >
          {/* SCREEN 1 — Ayro landing */}
          <div className="h-1/2 flex flex-col gap-3 py-4">
            <div className="flex items-center gap-2 pl-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-[6px] bg-ink text-[10px] font-bold text-cream">
                A
              </span>
              <span className="text-[13px] font-semibold text-ink">Ayro</span>
              <span className="ml-auto inline-block h-2 w-2 rounded-full bg-limedeep" />
            </div>
            <div className="rounded-[18px] bg-cream-soft px-3 py-2 text-[11px] text-ink/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-limedeep mr-1.5 align-middle" />
              Launch offer · early visionaries
            </div>
            <h3 className="display text-ink text-[22px] leading-[1.02] px-1">
              Digital experiences, shaped by intention.
            </h3>
            <p className="px-1 text-[11px] leading-[1.5] text-ink/70">
              Strategic apps with Cursor, Figma, Claude & OpenAI.
            </p>
            <div className="mt-auto flex items-center gap-2 px-1">
              <button className="btn-ink rounded-full px-3.5 py-2 text-[11px] font-semibold">
                Start a project
              </button>
              <button className="rounded-full border border-ink/15 px-3.5 py-2 text-[11px] font-medium text-ink">
                Work
              </button>
            </div>

            {/* small bento preview */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-[#f1ecde] to-[#e8e1d5]" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-[#c1ff72] to-[#9ee556]" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-[#111] to-[#333]" />
            </div>
          </div>

          {/* SCREEN 2 — Case study card */}
          <div className="h-1/2 flex flex-col gap-3 py-4">
            <p className="px-1 text-[10px] uppercase tracking-[0.18em] text-ink/50">
              Selected work · 2026
            </p>
            <div className="rounded-[22px] bg-ink text-cream p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 text-[10px] text-cream/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                Lumen Fieldbook
              </div>
              <p className="mt-2 display text-[18px] leading-[1.05] text-cream">
                A quieter way to capture a day.
              </p>
              <div className="mt-4 h-16 rounded-xl bg-gradient-to-br from-[#c1ff72]/90 to-[#6a7a4c]" />
              <div className="mt-3 flex justify-between text-[10px] text-cream/60">
                <span>iOS · Product</span>
                <span>↗</span>
              </div>
            </div>
            <div className="rounded-[18px] bg-cream-soft p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-ink/50 mb-1.5">
                Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Cursor", "Figma", "Claude", "OpenAI", "Next.js"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white px-2 py-0.5 text-[10px] text-ink border border-ink/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(180deg, rgba(248,246,242,0) 0%, rgba(248,246,242,1) 100%)",
          }}
        />
      </div>
    </div>
  );
}

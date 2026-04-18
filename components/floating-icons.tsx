import type { ReactNode } from "react";

type IconDef = {
  label: string;
  bg: string;
  ring?: string;
  svg: ReactNode;
  /** x/y in % relative to the hero container */
  x: number;
  y: number;
  size?: number;
  tilt?: number;
  floatDuration?: number;
  floatDelay?: number;
  chart?: "left" | "right" | null;
};

/* Simple, recognizable monogram-style app marks — intentionally abstract so we
 * avoid shipping third-party trademarks while keeping the same visual rhythm
 * as the reference (rounded-square app icons scattered around the hero). */
const ICONS: IconDef[] = [
  {
    label: "Cursor",
    bg: "#ffffff",
    ring: "rgba(0,0,0,0.06)",
    x: 17,
    y: 18,
    tilt: -8,
    floatDuration: 6,
    floatDelay: 0,
    chart: "right",
    svg: (
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden>
        <path
          d="M6 4 L26 16 L6 28 Z"
          fill="#111"
          stroke="#111"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Figma",
    bg: "linear-gradient(135deg,#ff7262,#a259ff 55%,#1abcfe)",
    x: 29,
    y: 8,
    tilt: 6,
    floatDuration: 7,
    floatDelay: 0.4,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <rect x="8" y="3" width="8" height="8" rx="4" fill="#fff" />
        <rect x="8" y="11" width="8" height="8" rx="4" fill="#fff" />
        <rect x="8" y="19" width="8" height="8" rx="4" fill="#fff" />
        <rect x="16" y="3" width="8" height="8" rx="4" fill="#fff" />
        <circle cx="20" cy="15" r="4" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Claude",
    bg: "#f1ecde",
    ring: "rgba(0,0,0,0.08)",
    x: 43,
    y: 2,
    tilt: -3,
    floatDuration: 8,
    floatDelay: 0.9,
    chart: "right",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path
          d="M16 5 C10 5 6 10 6 16 C6 22 10 27 16 27 C22 27 26 22 26 16 C26 10 22 5 16 5 Z M12 12 L20 12 M12 16 L20 16 M12 20 L17 20"
          stroke="#cc785c"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "OpenAI",
    bg: "#0c0c0c",
    x: 58,
    y: 8,
    tilt: 4,
    floatDuration: 7,
    floatDelay: 1.3,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden>
        <g
          stroke="#ffffff"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 6 L24 10 L24 18 L16 22 L8 18 L8 10 Z" />
          <path d="M16 6 L16 22" />
          <path d="M8 10 L24 18" />
          <path d="M24 10 L8 18" />
        </g>
      </svg>
    ),
  },
  {
    label: "Spark",
    bg: "#c1ff72",
    x: 70,
    y: 19,
    tilt: -5,
    floatDuration: 6.5,
    floatDelay: 0.2,
    chart: "left",
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path
          d="M16 4 L18.5 13.5 L28 16 L18.5 18.5 L16 28 L13.5 18.5 L4 16 L13.5 13.5 Z"
          fill="#111"
        />
      </svg>
    ),
  },
  {
    label: "iOS",
    bg: "#f5f2e9",
    ring: "rgba(0,0,0,0.06)",
    x: 81,
    y: 40,
    tilt: 8,
    floatDuration: 9,
    floatDelay: 0.6,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path
          d="M21 9.5 c-1.8 0-3.1 1.1-3.9 1.1-.9 0-2.3-1-3.8-1-2 0-4.2 1.7-4.2 4.8 0 2 .8 4.2 1.8 5.7.9 1.3 1.7 2.4 2.8 2.4 1 0 1.4-.7 2.7-.7 1.3 0 1.6.7 2.7.7 1.1 0 1.8-1.2 2.6-2.4.6-.8 1-1.6 1.3-2.3-3.3-1.2-3.2-5.9 0-7.1-.7-1-1.7-1.2-2.0-1.2Z M16.8 7.8 c.4-.5.7-1.2.6-1.9-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.8.7.1 1.4-.3 1.7-.8Z"
          fill="#111"
        />
      </svg>
    ),
  },
  {
    label: "Shape",
    bg: "linear-gradient(135deg,#6a5bff,#8a7dff)",
    x: 13,
    y: 48,
    tilt: -10,
    floatDuration: 7.5,
    floatDelay: 0.9,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <circle cx="16" cy="16" r="8" fill="#fff" />
        <circle cx="16" cy="16" r="3" fill="#6a5bff" />
      </svg>
    ),
  },
  {
    label: "Token",
    bg: "#ffd84a",
    x: 22,
    y: 58,
    tilt: 4,
    floatDuration: 8,
    floatDelay: 1.1,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path
          d="M16 4 L26 10 L22 22 L10 22 L6 10 Z"
          fill="#111"
        />
      </svg>
    ),
  },
  {
    label: "Prompt",
    bg: "#ffffff",
    ring: "rgba(0,0,0,0.08)",
    x: 70,
    y: 54,
    tilt: -4,
    floatDuration: 6.8,
    floatDelay: 0.3,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden>
        <path
          d="M7 9 h14 a3 3 0 0 1 3 3 v6 a3 3 0 0 1 -3 3 h-8 l-4 4 v-4 h-2 a3 3 0 0 1 -3 -3 v-6 a3 3 0 0 1 3 -3 z"
          fill="none"
          stroke="#111"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Chat",
    bg: "linear-gradient(135deg,#26cfaf,#0e6e63)",
    x: 83,
    y: 60,
    tilt: 9,
    floatDuration: 7.2,
    floatDelay: 1.5,
    chart: null,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path d="M6 22 V10 a3 3 0 0 1 3 -3 h14 a3 3 0 0 1 3 3 v8 a3 3 0 0 1 -3 3 h-11 l-6 4 z" fill="#fff" />
      </svg>
    ),
  },
];

const Chart = ({ side }: { side: "left" | "right" }) => (
  <svg
    viewBox="0 0 90 30"
    width="90"
    height="30"
    aria-hidden
    className={[
      "absolute top-1/2 -translate-y-1/2",
      side === "right" ? "left-[64px]" : "right-[64px]",
    ].join(" ")}
  >
    <path
      className="chart-line"
      d={
        side === "right"
          ? "M2 18 L14 18 L20 10 L28 22 L38 8 L48 20 L58 14 L68 18 L88 18"
          : "M88 18 L76 18 L70 10 L62 22 L52 8 L42 20 L32 14 L22 18 L2 18"
      }
    />
  </svg>
);

export default function FloatingIcons() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden
    >
      {ICONS.map((ic, i) => {
        const size = ic.size ?? 56;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${ic.x}%`,
              top: `${ic.y}%`,
              width: size,
              height: size,
            }}
          >
            <div
              className="icon-chip floaty"
              style={
                {
                  width: size,
                  height: size,
                  background: ic.bg,
                  boxShadow: ic.ring
                    ? `0 0 0 1px ${ic.ring}, 0 1px 0 rgba(255,255,255,0.6) inset, 0 12px 32px -12px rgba(0,0,0,0.22), 0 2px 6px -2px rgba(0,0,0,0.08)`
                    : undefined,
                  ["--tilt" as string]: `${ic.tilt ?? 0}deg`,
                  ["--float-duration" as string]: `${ic.floatDuration ?? 7}s`,
                  ["--float-delay" as string]: `${ic.floatDelay ?? 0}s`,
                } as React.CSSProperties
              }
              aria-label={ic.label}
            >
              {ic.svg}
            </div>
            {ic.chart ? <Chart side={ic.chart} /> : null}
          </div>
        );
      })}
    </div>
  );
}

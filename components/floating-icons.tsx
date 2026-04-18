import type { ReactNode } from "react";

type IconDef = {
  label: string;
  bg: string;
  ring?: string;
  svg: ReactNode;
  /** Offsets in px from the center of the hero container (0, 0 = center).
   * Icons orbit tightly around the ~460px headline block like the reference. */
  dx: number;
  dy: number;
  size?: number;
  tilt?: number;
  floatDuration?: number;
  floatDelay?: number;
};

/* Abstract, recognizable monogram-style app marks — non-trademarked chips that
 * orbit the headline in the same rhythm as the reference video. */
const ICONS: IconDef[] = [
  // Top ring
  {
    label: "Cursor",
    bg: "#ffffff",
    ring: "rgba(0,0,0,0.08)",
    dx: -240,
    dy: -150,
    size: 52,
    tilt: -8,
    floatDuration: 6,
    floatDelay: 0,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
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
    dx: -90,
    dy: -200,
    size: 48,
    tilt: 6,
    floatDuration: 7,
    floatDelay: 0.4,
    svg: (
      <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden>
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
    dx: 100,
    dy: -180,
    size: 50,
    tilt: -3,
    floatDuration: 8,
    floatDelay: 0.9,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path
          d="M12 10 L16 22 L20 10 M10 16 L22 16"
          stroke="#cc785c"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    label: "OpenAI",
    bg: "#0c0c0c",
    dx: 260,
    dy: -130,
    size: 52,
    tilt: 4,
    floatDuration: 7,
    floatDelay: 1.3,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
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

  // Mid ring (left & right of headline)
  {
    label: "Shape",
    bg: "linear-gradient(135deg,#6a5bff,#8a7dff)",
    dx: -320,
    dy: 20,
    size: 54,
    tilt: -10,
    floatDuration: 7.5,
    floatDelay: 0.9,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <circle cx="16" cy="16" r="9" fill="#fff" />
        <circle cx="16" cy="16" r="3.2" fill="#6a5bff" />
      </svg>
    ),
  },
  {
    label: "Spark",
    bg: "#c1ff72",
    dx: 320,
    dy: 0,
    size: 54,
    tilt: -5,
    floatDuration: 6.5,
    floatDelay: 0.2,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
        <path
          d="M16 4 L18.5 13.5 L28 16 L18.5 18.5 L16 28 L13.5 18.5 L4 16 L13.5 13.5 Z"
          fill="#111"
        />
      </svg>
    ),
  },

  // Bottom ring
  {
    label: "Token",
    bg: "#ffd84a",
    dx: -220,
    dy: 170,
    size: 50,
    tilt: 4,
    floatDuration: 8,
    floatDelay: 1.1,
    svg: (
      <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden>
        <path d="M16 4 L26 10 L22 22 L10 22 L6 10 Z" fill="#111" />
      </svg>
    ),
  },
  {
    label: "iOS",
    bg: "#f5f2e9",
    ring: "rgba(0,0,0,0.06)",
    dx: -80,
    dy: 220,
    size: 48,
    tilt: 8,
    floatDuration: 9,
    floatDelay: 0.6,
    svg: (
      <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden>
        <path
          d="M21 9.5 c-1.8 0-3.1 1.1-3.9 1.1-.9 0-2.3-1-3.8-1-2 0-4.2 1.7-4.2 4.8 0 2 .8 4.2 1.8 5.7.9 1.3 1.7 2.4 2.8 2.4 1 0 1.4-.7 2.7-.7 1.3 0 1.6.7 2.7.7 1.1 0 1.8-1.2 2.6-2.4.6-.8 1-1.6 1.3-2.3-3.3-1.2-3.2-5.9 0-7.1-.7-1-1.7-1.2-2.0-1.2Z M16.8 7.8 c.4-.5.7-1.2.6-1.9-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.8.7.1 1.4-.3 1.7-.8Z"
          fill="#111"
        />
      </svg>
    ),
  },
  {
    label: "Chat",
    bg: "linear-gradient(135deg,#26cfaf,#0e6e63)",
    dx: 120,
    dy: 210,
    size: 48,
    tilt: 9,
    floatDuration: 7.2,
    floatDelay: 1.5,
    svg: (
      <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden>
        <path
          d="M6 22 V10 a3 3 0 0 1 3 -3 h14 a3 3 0 0 1 3 3 v8 a3 3 0 0 1 -3 3 h-11 l-6 4 z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "Prompt",
    bg: "#ffffff",
    ring: "rgba(0,0,0,0.08)",
    dx: 260,
    dy: 170,
    size: 50,
    tilt: -4,
    floatDuration: 6.8,
    floatDelay: 0.3,
    svg: (
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden>
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
];

export default function FloatingIcons() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden
    >
      {ICONS.map((ic, i) => {
        const size = ic.size ?? 48;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: size,
              height: size,
              transform: `translate(calc(-50% + ${ic.dx}px), calc(-50% + ${ic.dy}px))`,
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
                    ? `0 0 0 1px ${ic.ring}, 0 1px 0 rgba(255,255,255,0.7) inset, 0 18px 40px -16px rgba(0,0,0,0.22), 0 3px 8px -3px rgba(0,0,0,0.08)`
                    : `0 1px 0 rgba(255,255,255,0.7) inset, 0 18px 40px -16px rgba(0,0,0,0.22), 0 3px 8px -3px rgba(0,0,0,0.08)`,
                  ["--tilt" as string]: `${ic.tilt ?? 0}deg`,
                  ["--float-duration" as string]: `${ic.floatDuration ?? 7}s`,
                  ["--float-delay" as string]: `${ic.floatDelay ?? 0}s`,
                } as React.CSSProperties
              }
              aria-label={ic.label}
            >
              {ic.svg}
            </div>
          </div>
        );
      })}
    </div>
  );
}

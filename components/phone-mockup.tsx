import type { ReactNode, CSSProperties } from "react";

export default function PhoneMockup({
  children,
  className = "",
  width = 280,
  style,
}: {
  children?: ReactNode;
  className?: string;
  width?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className={["phone-frame mx-auto", className].join(" ")}
      style={{ width, ...style }}
    >
      <div className="phone-screen">
        {/* Top status bar spacer for notch */}
        <div className="absolute inset-x-0 top-0 h-[56px] flex items-end justify-between px-5 pb-1 text-[11px] font-medium text-ink/80 z-[2] pointer-events-none">
          <span>16:23</span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 7a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M3 7a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="7" cy="7" r="1" fill="currentColor"/>
            </svg>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <rect x="0.5" y="0.5" width="15" height="9" rx="2.2" stroke="currentColor"/>
              <rect x="2" y="2" width="10" height="6" rx="1" fill="currentColor"/>
              <rect x="16" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor"/>
            </svg>
          </span>
        </div>
        <div className="relative h-full pt-[56px]">{children}</div>
      </div>
    </div>
  );
}

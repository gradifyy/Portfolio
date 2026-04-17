import type { CSSProperties, ReactNode } from "react";

export default function FloatingIcon({
  label,
  children,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  size = 56,
  delay = 0,
  duration = 6,
  bg = "#ffffff",
  ring = "rgba(17,17,17,0.06)",
  className = "",
}: {
  label?: string;
  children: ReactNode;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  rotate?: number;
  size?: number;
  delay?: number;
  duration?: number;
  bg?: string;
  ring?: string;
  className?: string;
}) {
  const style: CSSProperties = {
    width: size,
    height: size,
    top,
    left,
    right,
    bottom,
    background: bg,
    borderRadius: size * 0.3,
    boxShadow:
      "0 1px 2px rgba(17,17,17,0.05), 0 14px 36px -16px rgba(17,17,17,0.3)",
    border: `1px solid ${ring}`,
    ["--rot" as string]: `${rotate}deg`,
    ["--floaty-delay" as string]: `${delay}s`,
    ["--floaty-dur" as string]: `${duration}s`,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      aria-label={label}
      className={["absolute floaty flex items-center justify-center", className].join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

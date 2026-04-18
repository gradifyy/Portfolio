"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function FsHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const update = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      const translate = y * 0.35;
      const scale = 1 + y * 0.0001;
      imgRef.current.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-end">
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/4stories/hero.jpg"
          alt="4Stories restaurant interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlays for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,11,9,0.4) 0%, rgba(12,11,9,0.2) 40%, rgba(12,11,9,0.75) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[5vw] pb-[10vh] max-w-[1400px] mx-auto">
        <p
          className="text-[11px] tracking-[0.35em] uppercase mb-6"
          style={{ color: "var(--fs-gold)" }}
          data-fs-reveal
        >
          Thamel, Kathmandu
        </p>

        <h1
          className="font-serif leading-[0.95]"
          style={{
            fontSize: "clamp(3.5rem, 11vw, 10rem)",
            color: "var(--fs-cream)",
          }}
          data-fs-reveal
        >
          4stories
        </h1>

        <p
          className="mt-6 text-lg md:text-xl max-w-md leading-relaxed"
          style={{ color: "var(--fs-muted)" }}
          data-fs-reveal
        >
          Where every floor tells a different tale.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-6"
          data-fs-reveal
          style={{ ["--fs-delay" as string]: "200ms" }}
        >
          <button
            onClick={() =>
              document
                .querySelector("#story")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="fs-btn"
          >
            Discover
            <span aria-hidden className="text-sm">
              ↓
            </span>
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#visit")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-[11px] tracking-[0.18em] uppercase pb-1 transition-colors duration-300 hover:text-[var(--fs-gold)]"
            style={{
              color: "var(--fs-muted)",
              borderBottom: "1px solid var(--fs-border)",
            }}
          >
            Reserve a table
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <div
          className="w-px h-10 origin-top animate-pulse"
          style={{ background: "var(--fs-gold)" }}
        />
      </div>
    </section>
  );
}

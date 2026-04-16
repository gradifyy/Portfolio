"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const img = el.querySelector<HTMLElement>("[data-parallax-img]");
    if (!img) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when element is just entering from below, +1 when leaving at top
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const translate = Math.max(-40, Math.min(40, -progress * 30));
      const scale = 1.04 + Math.max(-0.02, Math.min(0.02, -progress * 0.02));
      img.style.transform = `translate3d(0, ${translate}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const alignLeft = project.align === "left";

  return (
    <article
      className="grid grid-cols-12 gap-x-6"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${(index % 3) * 80}ms` }}
    >
      <div
        className={[
          "col-span-12",
          alignLeft ? "md:col-span-7" : "md:col-span-7 md:col-start-6",
        ].join(" ")}
      >
        <Link href={`/work#${project.slug}`} className="group block">
          <div
            ref={imgWrapRef}
            className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-stone transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-20px_rgba(42,42,42,0.25)]"
          >
            <div
              data-parallax-img
              className="absolute inset-0 will-change-transform"
              style={{ transform: "translate3d(0, 0, 0) scale(1.04)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
            {/* Cloudy reveal overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 70%)",
              }}
            />
            {/* Soft bottom dissolve */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(180deg, rgba(249,247,242,0) 0%, rgba(249,247,242,0.15) 100%)",
              }}
            />
          </div>

          <div className="mt-7 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-terracotta mb-3">
              {project.category} · {project.year}
            </p>
            <h3 className="font-serif text-3xl md:text-[2.3rem] leading-[1.1] text-charcoal transition-colors duration-300 group-hover:text-terracotta">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-taupe tracking-wide">
              {project.client}
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
}

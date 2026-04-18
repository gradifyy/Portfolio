import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Ayro",
  description:
    "Selected work by Ayro — AI-powered apps, editorial software, and digital products for forward-thinking partners.",
};

export default function WorkPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-[160px] pb-[12vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 80% 0%, rgba(193,255,114,0.22) 0%, rgba(248,246,242,0) 60%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto">
          <div className="pill" data-reveal>
            <span className="dot" />
            Selected index · 2022 — 2026
          </div>
          <h1
            className="display mt-8 text-ink max-w-[20ch]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            data-reveal
          >
            A meandering record of work shipped in confidence.
          </h1>
          <p
            className="mt-7 max-w-[60ch] text-[17px] md:text-[19px] leading-[1.55] text-ink/65"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Each of these began the same way — a brief conversation, an
            unusual ambition, and a willingness to treat the product as an
            artifact rather than a feature list.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-3"
            data-reveal
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            <Link
              href="/contact"
              className="btn-lime magnetic inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            >
              Start a Project <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="pb-[20vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[18vh]">
          {projects.map((p, i) => (
            <div key={p.slug} id={p.slug}>
              <ProjectCard project={p} index={i} />
              <p
                className={[
                  "mt-8 max-w-xl text-[15px] leading-[1.7] text-ink/65",
                  p.align === "left" ? "md:ml-0" : "md:ml-[41.666%]",
                ].join(" ")}
                data-reveal
              >
                {p.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Ayro",
  description:
    "Selected work by Ayro — editorial software, brand systems, and digital products for forward-thinking partners.",
};

export default function WorkPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-[180px] pb-[14vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div
          className="cloud-blob"
          style={{
            width: "55vw",
            height: "55vw",
            left: "-10vw",
            top: "0vw",
            background: "rgba(196,164,132,0.2)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <p
            className="text-xs uppercase tracking-[0.3em] text-taupe mb-6"
            data-reveal
          >
            Index · 2022 — 2025
          </p>
          <h1
            className="font-serif text-charcoal leading-[1.02] max-w-[18ch]"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
            data-reveal
          >
            A meandering record of work shipped in confidence.
          </h1>
          <p
            className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.7] text-taupe"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            Each of these began the same way — a brief conversation, an
            unusual ambition, and a willingness to treat the product as an
            artifact rather than a feature list. Scroll slowly.
          </p>
        </div>
      </section>

      <section
        className="pb-[20vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[20vh]">
          {projects.map((p, i) => (
            <div key={p.slug} id={p.slug}>
              <ProjectCard project={p} index={i} />
              <p
                className={[
                  "mt-8 max-w-xl text-[0.95rem] leading-[1.7] text-taupe",
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

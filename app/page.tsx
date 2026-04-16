import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden pt-[180px] pb-[20vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        {/* Soft cloudy background blobs */}
        <div
          className="cloud-blob"
          style={{
            width: "60vw",
            height: "60vw",
            left: "-15vw",
            top: "-10vw",
            background: "rgba(196,164,132,0.22)",
          }}
        />
        <div
          className="cloud-blob"
          style={{
            width: "50vw",
            height: "50vw",
            right: "-20vw",
            top: "5vw",
            background: "rgba(212,165,165,0.18)",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto">
          <p
            className="text-xs uppercase tracking-[0.3em] text-taupe mb-8"
            data-reveal
          >
            Ayro — App developer & designer
          </p>
          <h1
            className="font-serif leading-[1.02] text-charcoal max-w-[16ch]"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            data-reveal
          >
            Digital experiences shaped by intention.
          </h1>
          <div
            className="mt-10 grid grid-cols-12 gap-6"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <p className="col-span-12 md:col-span-5 md:col-start-7 text-[1.125rem] leading-[1.6] text-taupe">
              Strategy-led development for forward-thinking brands. I craft
              calm, considered software — products that trade novelty for
              clarity and perform like editorial, not marketing.
            </p>
          </div>

          <div
            className="mt-14 flex flex-wrap items-center gap-4"
            data-reveal
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            <Link
              href="/work"
              className="magnetic inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-7 py-4 text-sm tracking-[0.12em] uppercase hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_4px_20px_rgba(42,42,42,0.15)]"
            >
              Selected work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/about"
              className="magnetic inline-flex items-center gap-3 text-sm text-charcoal tracking-[0.12em] uppercase border-b border-charcoal/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              The approach
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO META STRIP */}
      <section
        className="relative border-y border-stone/60 py-10"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["Based", "London · Remote"],
            ["Focus", "Product · Brand · Web"],
            ["Partners", "Startups · Studios · Publications"],
            ["Available", "Late 2026"],
          ].map(([k, v], i) => (
            <div
              key={k}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-taupe">
                {k}
              </p>
              <p className="mt-2 text-sm text-charcoal">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        className="pt-[18vh] pb-[10vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-[10vh]">
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em] text-taupe mb-4"
                data-reveal
              >
                Floating archives
              </p>
              <h2
                className="font-serif text-charcoal leading-[1.05]"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
                data-reveal
              >
                Selected work.
              </h2>
            </div>
            <Link
              href="/work"
              className="magnetic hidden md:inline-flex items-center gap-3 text-sm text-taupe hover:text-terracotta transition-colors tracking-[0.12em] uppercase border-b border-taupe/40 hover:border-terracotta pb-1"
              data-reveal
            >
              View all
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="flex flex-col gap-[20vh]">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        className="relative overflow-hidden py-[18vh]"
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5" data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-taupe mb-6">
              Philosophy
            </p>
            <blockquote className="font-serif text-charcoal leading-[1.05] text-[clamp(2rem,4vw,3.5rem)]">
              “Technology should dissolve into experience.”
            </blockquote>
            <p className="mt-8 text-[1.0625rem] leading-[1.7] text-taupe max-w-md">
              I build in service of attention. Interfaces that step out of the
              way, prose that carries weight, motion that behaves like weather
              — quiet, present, hard to notice until it’s missing.
            </p>
          </div>

          <div
            className="col-span-12 md:col-span-6 md:col-start-7 relative h-[50vh] md:h-[60vh]"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <div
              className="cloud-blob"
              style={{
                width: "70%",
                height: "70%",
                left: "10%",
                top: "5%",
                background: "rgba(196,164,132,0.5)",
                filter: "blur(80px)",
              }}
            />
            <div
              className="cloud-blob"
              style={{
                width: "55%",
                height: "55%",
                right: "5%",
                bottom: "5%",
                background: "rgba(212,165,165,0.55)",
                filter: "blur(80px)",
              }}
            />
            <div
              className="cloud-blob"
              style={{
                width: "40%",
                height: "40%",
                left: "30%",
                top: "40%",
                background: "rgba(232,225,213,0.8)",
                filter: "blur(60px)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

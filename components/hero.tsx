"use client";

import Link from "next/link";
import PhoneMockup from "./phone-mockup";
import FloatingIcon from "./floating-icon";
import {
  CursorGlyph,
  FigmaGlyph,
  ClaudeGlyph,
  OpenAIGlyph,
  SparkleGlyph,
  BoltGlyph,
  GithubGlyph,
  ArrowUpRight,
  CheckGlyph,
} from "./icons";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[120px] pb-[14vh]"
      data-nav-theme="light"
      style={{
        paddingLeft: "clamp(1rem, 4vw, 3rem)",
        paddingRight: "clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* Soft background glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[-10%] h-[60vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 30%, rgba(193,255,114,0.22) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,246,242,0), rgba(248,246,242,1))",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto text-center">
        <div
          className="inline-flex pill pill-lime mb-8"
          data-reveal
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span className="text-ink/80">
            Special launch offer for early visionaries
          </span>
        </div>

        <h1
          className="font-display text-ink mx-auto max-w-[16ch] leading-[0.96]"
          style={{ fontSize: "clamp(2.6rem, 6.8vw, 5.6rem)" }}
          data-reveal
        >
          Get Premium Digital Experiences From{" "}
          <span className="relative inline-block">
            <span className="relative z-10">AI-Powered</span>
            <span
              aria-hidden
              className="absolute inset-x-[-2%] bottom-[8%] h-[30%] bg-lime/60 -z-0 rounded-full"
            />
          </span>{" "}
          Design
        </h1>

        <p
          className="mt-8 max-w-[58ch] mx-auto text-[1.125rem] md:text-[1.2rem] leading-[1.6] text-ink/70"
          data-reveal
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          Ayro crafts strategic apps and digital experiences using{" "}
          <span className="text-ink">Cursor</span>,{" "}
          <span className="text-ink">Figma</span>,{" "}
          <span className="text-ink">Claude</span> &{" "}
          <span className="text-ink">OpenAI</span>.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          data-reveal
          style={{ ["--reveal-delay" as string]: "220ms" }}
        >
          <Link href="/contact" className="btn-dark lime-pulse">
            Start a Project
            <ArrowUpRight />
          </Link>
          <Link href="#work" className="btn-ghost">
            See the work
          </Link>
        </div>

        {/* Floating icon field */}
        <div
          aria-hidden
          className="relative h-[180px] md:h-[220px] mx-auto w-full max-w-[1000px] mt-[-40px] md:mt-[-60px] pointer-events-none"
          data-reveal
          style={{ ["--reveal-delay" as string]: "320ms" }}
        >
          <FloatingIcon top="10%" left="8%" rotate={-8} size={58} delay={0.2}>
            <CursorGlyph />
          </FloatingIcon>
          <FloatingIcon top="55%" left="18%" rotate={6} size={52} delay={1.1} bg="#6E48D4">
            <span className="text-white text-xs font-semibold">Fi</span>
          </FloatingIcon>
          <FloatingIcon top="22%" left="30%" rotate={-3} size={56} delay={0.6}>
            <FigmaGlyph />
          </FloatingIcon>
          <FloatingIcon top="65%" left="42%" rotate={4} size={60} delay={1.6} bg="#C1FF72">
            <CheckGlyph size={22} />
          </FloatingIcon>
          <FloatingIcon top="18%" right="32%" rotate={-5} size={54} delay={0.9} bg="#EAD8FF">
            <SparkleGlyph size={22} />
          </FloatingIcon>
          <FloatingIcon top="58%" right="22%" rotate={8} size={58} delay={1.4} bg="#111">
            <ClaudeGlyph size={24} />
          </FloatingIcon>
          <FloatingIcon top="12%" right="10%" rotate={6} size={56} delay={0.3}>
            <OpenAIGlyph />
          </FloatingIcon>
          <FloatingIcon top="48%" right="6%" rotate={-4} size={48} delay={2.1} bg="#FFE27A">
            <BoltGlyph size={20} />
          </FloatingIcon>
          <FloatingIcon top="68%" left="50%" rotate={-6} size={44} delay={1.9} bg="#111" ring="rgba(255,255,255,0.08)">
            <span className="text-white">
              <GithubGlyph size={20} />
            </span>
          </FloatingIcon>
        </div>

        {/* Phone mockup */}
        <div
          className="relative mt-[-40px] md:mt-[-30px] flex justify-center"
          data-reveal
          style={{ ["--reveal-delay" as string]: "420ms" }}
        >
          <PhoneMockup width={260}>
            <HeroPhoneContent />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

function HeroPhoneContent() {
  return (
    <div className="relative h-full bg-cream text-ink">
      <div className="px-4 pt-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-ink text-lime font-display text-[11px]">
            A
          </span>
          <span className="font-display text-sm tracking-[-0.03em]">
            Ayro<span className="text-lime-2">.</span>
          </span>
        </div>
        <div className="w-5 h-5 rounded-full bg-ink/10" />
      </div>
      <div className="px-4 mt-3">
        <div className="pill pill-lime text-[10px] py-0.5 px-2">
          <span className="w-1 h-1 rounded-full bg-lime" />
          Launch offer
        </div>
        <h3 className="mt-3 font-display text-[18px] leading-[1.1]">
          Premium apps,<br />shipped with intent.
        </h3>
        <p className="mt-2 text-[11px] text-ink/60 leading-snug">
          Strategy-led product work, built end-to-end with AI.
        </p>
        <div className="mt-3 flex gap-1.5">
          <span className="btn-lime text-[10px] px-3 py-1.5 rounded-full">
            Start
          </span>
          <span className="text-[10px] px-3 py-1.5 rounded-full border border-ink/10 bg-white">
            Preview
          </span>
        </div>
      </div>
      <div className="mt-4 mx-4 rounded-2xl bg-white border border-ink/5 p-3 shadow-[0_12px_28px_-18px_rgba(17,17,17,0.25)]">
        <div className="flex items-center justify-between text-[10px] text-ink/60">
          <span>Ongoing · 06</span>
          <span className="text-lime-2">+14%</span>
        </div>
        <div className="mt-2 h-10 flex items-end gap-1">
          {[40, 58, 48, 70, 62, 86, 74, 92, 68, 82, 74, 96].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-ink/80"
              style={{ height: `${h}%`, background: i > 8 ? "#C1FF72" : undefined }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 mx-4 grid grid-cols-2 gap-2">
        {[
          ["Design", "Figma"],
          ["Build", "Cursor"],
          ["AI", "Claude"],
          ["Ship", "Vercel"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="rounded-xl bg-white border border-ink/5 p-2 text-[10px]"
          >
            <div className="text-ink/50">{k}</div>
            <div className="font-medium">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function FsStory() {
  return (
    <section
      id="story"
      className="relative py-[18vh] px-[5vw]"
      style={{ background: "var(--fs-bg)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Decorative line */}
        <div className="fs-divider mb-[10vh]" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: Heading */}
          <div className="md:col-span-5">
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-6"
              style={{ color: "var(--fs-gold)" }}
              data-fs-reveal
            >
              Our Story
            </p>
            <h2
              className="font-serif leading-[1.05]"
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                color: "var(--fs-cream)",
              }}
              data-fs-reveal
            >
              A space between
              <br />
              <span className="fs-text-gradient">stories.</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-end">
            <p
              className="text-[1.05rem] leading-[1.75] mb-8"
              style={{ color: "var(--fs-muted)" }}
              data-fs-reveal
              data-fs-delay="80"
            >
              Nestled in the heart of Thamel, 4Stories is more than a
              restaurant — it is a vertical journey through mood, flavor, and
              atmosphere. Each of our four floors offers a distinct experience,
              from the quiet warmth of a morning coffee to the vibrant energy of
              a midnight cocktail under the Kathmandu sky.
            </p>
            <p
              className="text-[1.05rem] leading-[1.75]"
              style={{ color: "var(--fs-muted)" }}
              data-fs-reveal
              data-fs-delay="160"
            >
              We blend modern elegance with rustic Nepali charm, sourcing fresh
              local ingredients and crafting every dish with intention. Whether
              you are here for a slow brunch, an artisanal latte, or an evening
              of cocktails and live music — every visit writes a new chapter.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-[10vh] grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
          style={{ borderTop: "1px solid var(--fs-border)" }}
        >
          {[
            ["4", "Floors"],
            ["7AM — 2AM", "Daily"],
            ["Thamel", "Kathmandu"],
            ["4.6★", "491K Reviews"],
          ].map(([value, label], i) => (
            <div
              key={label}
              data-fs-reveal
              style={{ ["--fs-delay" as string]: `${i * 80}ms` }}
            >
              <p
                className="font-serif text-2xl md:text-3xl mb-2"
                style={{ color: "var(--fs-cream)" }}
              >
                {value}
              </p>
              <p
                className="text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "var(--fs-muted)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width atmospheric image */}
        <div
          className="mt-[10vh] relative aspect-[21/9] overflow-hidden rounded-sm fs-img-hover"
          data-fs-reveal
        >
          <Image
            src="/images/4stories/story.jpg"
            alt="4Stories atmospheric interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,11,9,0.15) 0%, rgba(12,11,9,0.5) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

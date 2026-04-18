"use client";

import Image from "next/image";

const FLOORS = [
  {
    number: "01",
    name: "The Ground",
    subtitle: "Coffee & Calm",
    description:
      "Begin your morning with artisanal pour-overs and freshly baked pastries. A quiet retreat for slow starts, deep reads, and laptop sessions bathed in natural light.",
    image: "/images/4stories/floor-cafe.jpg",
    hours: "7 AM — 5 PM",
  },
  {
    number: "02",
    name: "The Mezzanine",
    subtitle: "Brunch & Bowl",
    description:
      "Our kitchen floor — where gourmet omelettes, hearty bowls, and innovative takes on Nepali classics come to life. Family-friendly, flavorful, and always welcoming.",
    image: "/images/4stories/floor-dining.jpg",
    hours: "8 AM — 10 PM",
  },
  {
    number: "03",
    name: "The Bar",
    subtitle: "Cocktails & Conversation",
    description:
      "As evening falls, the third floor awakens with handcrafted cocktails, fine wines, and live acoustic sets. An intimate space for date nights and celebrations.",
    image: "/images/4stories/floor-bar.jpg",
    hours: "5 PM — 2 AM",
  },
  {
    number: "04",
    name: "The Terrace",
    subtitle: "Stars & City Lights",
    description:
      "Our rooftop crowns the experience — open skies, the glow of Kathmandu below, and a curated menu of small plates and signature drinks under the Himalayan stars.",
    image: "/images/4stories/floor-terrace.jpg",
    hours: "5 PM — 12 AM",
  },
];

export default function FsExperience() {
  return (
    <section
      id="experience"
      className="relative py-[18vh] px-[5vw]"
      style={{ background: "var(--fs-surface)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-[10vh]">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-5"
            style={{ color: "var(--fs-gold)" }}
            data-fs-reveal
          >
            The Experience
          </p>
          <h2
            className="font-serif leading-[1.05] mx-auto"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              color: "var(--fs-cream)",
              maxWidth: "18ch",
            }}
            data-fs-reveal
          >
            Four floors, four worlds.
          </h2>
        </div>

        {/* Floor cards */}
        <div className="flex flex-col gap-[8vh]">
          {FLOORS.map((floor, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={floor.number}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Image */}
                <div
                  className={[
                    "col-span-1 md:col-span-7",
                    isEven ? "" : "md:col-start-6 md:order-2",
                  ].join(" ")}
                  data-fs-reveal
                  style={{ ["--fs-delay" as string]: `${i * 60}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm fs-img-hover">
                    <Image
                      src={floor.image}
                      alt={`${floor.name} — ${floor.subtitle}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 58vw"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 50%, rgba(12,11,9,0.6) 100%)",
                      }}
                    />
                    {/* Floor number overlay */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-5 left-6 font-serif text-7xl md:text-8xl opacity-20"
                      style={{ color: "var(--fs-cream)" }}
                    >
                      {floor.number}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={[
                    "col-span-1 md:col-span-4",
                    isEven ? "md:col-start-9" : "md:col-start-1 md:order-1",
                  ].join(" ")}
                >
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase mb-3"
                    style={{ color: "var(--fs-gold)" }}
                    data-fs-reveal
                  >
                    Floor {floor.number}
                  </p>
                  <h3
                    className="font-serif text-2xl md:text-3xl leading-[1.1] mb-2"
                    style={{ color: "var(--fs-cream)" }}
                    data-fs-reveal
                  >
                    {floor.name}
                  </h3>
                  <p
                    className="text-sm mb-5"
                    style={{ color: "var(--fs-gold)", opacity: 0.7 }}
                    data-fs-reveal
                  >
                    {floor.subtitle}
                  </p>
                  <p
                    className="text-[0.95rem] leading-[1.7] mb-6"
                    style={{ color: "var(--fs-muted)" }}
                    data-fs-reveal
                  >
                    {floor.description}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ color: "var(--fs-muted)", opacity: 0.6 }}
                    data-fs-reveal
                  >
                    {floor.hours}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

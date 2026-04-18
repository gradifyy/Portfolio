"use client";

import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "/images/4stories/food-1.jpg",
    alt: "Beautifully plated dish at 4Stories",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: "/images/4stories/food-2.jpg",
    alt: "Artisanal coffee at 4Stories",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/4stories/food-3.jpg",
    alt: "Handcrafted cocktail at 4Stories bar",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/4stories/gallery-1.jpg",
    alt: "Candlelit ambiance at 4Stories",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/4stories/food-4.jpg",
    alt: "Freshly baked desserts at 4Stories",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/4stories/gallery-2.jpg",
    alt: "Fresh ingredients and food presentation",
    span: "md:col-span-2",
    aspect: "aspect-[16/9]",
  },
];

export default function FsGallery() {
  return (
    <section
      id="gallery"
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
            Gallery
          </p>
          <h2
            className="font-serif leading-[1.05] mx-auto"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              color: "var(--fs-cream)",
            }}
            data-fs-reveal
          >
            Moments captured.
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.src}
              className={`${item.span} fs-img-hover rounded-sm overflow-hidden relative ${item.aspect}`}
              data-fs-reveal
              style={{ ["--fs-delay" as string]: `${i * 80}ms` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(12,11,9,0.7) 100%)",
                }}
              >
                <p
                  className="text-[11px] tracking-wider"
                  style={{ color: "var(--fs-cream)" }}
                >
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-[6vh]" data-fs-reveal>
          <a
            href="https://www.instagram.com/4stories.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase pb-1 transition-colors duration-300 hover:text-[var(--fs-gold)]"
            style={{
              color: "var(--fs-muted)",
              borderBottom: "1px solid var(--fs-border)",
            }}
          >
            Follow us on Instagram
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

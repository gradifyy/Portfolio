"use client";

import { useEffect, useRef, useState } from "react";

const REVIEWS = [
  {
    quote:
      "This place has everything I was looking for: cute cafe vibes, good food, and refreshing drinks. The blueberry matcha is a must-try!",
    author: "Travel Reviewer",
    source: "Google Reviews",
  },
  {
    quote:
      "The only place I found in Thamel worth eating at. Bali vibes in the heart of Kathmandu — artsy, stylish, and the pulled pork is incredible.",
    author: "Tristan B.",
    source: "TripAdvisor",
  },
  {
    quote:
      "The cakes at 4 Stories are exceptional. The mocha cake was dense and rich, and the coconut cake was bursting with flavor. We came back three times.",
    author: "Seoul Food Guide",
    source: "Trip.com",
  },
  {
    quote:
      "Each floor provides a different experience. The rooftop terrace is perfect for watching the world from above, and the quieter floors below are ideal for introspection.",
    author: "Caroline V.",
    source: "Food Guide",
  },
];

export default function FsTestimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
  };

  return (
    <section
      className="relative py-[18vh] px-[5vw]"
      style={{ background: "var(--fs-bg)" }}
    >
      {/* Marquee divider */}
      <div className="overflow-hidden mb-[10vh]" style={{ opacity: 0.08 }}>
        <div className="fs-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-serif text-6xl md:text-8xl mx-8 inline-block"
              style={{ color: "var(--fs-cream)" }}
            >
              4stories
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[900px] mx-auto text-center">
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-8"
          style={{ color: "var(--fs-gold)" }}
          data-fs-reveal
        >
          What People Say
        </p>

        {/* Quote carousel */}
        <div className="relative min-h-[200px]" data-fs-reveal>
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
              style={{
                opacity: active === i ? 1 : 0,
                transform:
                  active === i ? "translateY(0)" : "translateY(12px)",
                pointerEvents: active === i ? "auto" : "none",
              }}
            >
              <blockquote
                className="font-serif text-xl md:text-2xl leading-[1.5] mb-8"
                style={{ color: "var(--fs-cream)" }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div>
                <p
                  className="text-sm tracking-wide"
                  style={{ color: "var(--fs-cream)" }}
                >
                  {review.author}
                </p>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mt-1"
                  style={{ color: "var(--fs-muted)" }}
                >
                  {review.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10" data-fs-reveal>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              aria-label={`Show review ${i + 1}`}
              onClick={() => handleDotClick(i)}
              className="w-2 h-2 rounded-full transition-all duration-500"
              style={{
                background:
                  active === i ? "var(--fs-gold)" : "var(--fs-border)",
                transform: active === i ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

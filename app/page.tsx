"use client";

import { useState } from "react";

/* ───── DATA ───── */

const MENU_ITEMS = [
  {
    name: "Pomegranate Pani Puri Shots",
    desc: "Crispy puri stuffed with mashed potato, onion, coriander, pomegranate served with sweet chili tamarind mint shots.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
  },
  {
    name: "Pulled Pork Benedict",
    desc: "Slow cooked pork, hash brown, poached eggs, drizzle of hollandaise sauce — Lavie big breakfast.",
    img: "https://images.unsplash.com/photo-1608039829572-9b5bba1b988f?w=400&h=400&fit=crop",
  },
  {
    name: "Dudh Malai Cake",
    desc: "Overnight spice-marinated juicy chicken, cooked to perfection in a tandoor, served on buckwheat pancake.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
  },
  {
    name: "Meat Lovers Pizza",
    desc: "Our iconic Meat Lover\u2019s pizza, loved by all — the undisputed bestselling champion amongst all varieties.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
  },
];

const ROOMS = [
  {
    name: "Junior Suite",
    img: "https://images.unsplash.com/photo-1590490360182-c33d955c8c40?w=600&h=400&fit=crop",
    features: ["King Bed", "Garden View", "Free Wi-Fi", "Room Service", "AC", "Mini Bar"],
  },
  {
    name: "Superior Deluxe Room",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    features: ["Queen Bed", "City View", "Free Wi-Fi", "Breakfast", "AC", "Safe Box"],
  },
  {
    name: "Superior Deluxe with Balcony",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    features: ["King Bed", "Balcony", "Garden View", "Breakfast", "AC", "Mini Bar"],
  },
];

const FACILITIES = [
  {
    name: "Beer Garden",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    name: "Boutique Accommodation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Easily Accessible Location",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    name: "Ample Parking Space",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Fresh Air Open Garden",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
];

const REVIEWS = [
  {
    text: "I came for breakfast, it was pretty good. But the best thing I like about Lavie is their hospitality and the respect towards their customers. Highly recommend for friends, family and couples!",
    author: "Udaya Phuyal",
    rating: 5,
  },
  {
    text: "Overall food was fantastic and the live music made our mood fresh. Service by Mr Sandip was fabulous — the way he makes customer service was impressive.",
    author: "Aayusha Bhatta",
    rating: 5,
  },
  {
    text: "I had a delightful dining experience. The ambiance was inviting, the service was impeccable and the food was absolutely delicious. Highly recommend Lavie Garden!",
    author: "Ruben Sunuwar",
    rating: 5,
  },
  {
    text: "The place is truly well managed. The atmosphere and ambience is very cozy. You wouldn't want to leave once you get here. The food is amazing and the servers were very helpful.",
    author: "Nijendra Shrestha",
    rating: 5,
  },
  {
    text: "True gem of a place. Definitely worth traveling to. The food was excellent, the staff were friendly and attentive and the ambience was spot on. Would recommend!",
    author: "Paul",
    rating: 5,
  },
  {
    text: "Everything was 10 on 10. What an atmosphere to be here. Calm environment with good music. The service was so good. Talking about the quality and quantity of food, it's worth it.",
    author: "Enduu",
    rating: 5,
  },
];

const EVENTS = [
  {
    title: "4 Years of Lavie",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=350&fit=crop",
  },
  {
    title: "Rang Over at Lavie",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=350&fit=crop",
  },
  {
    title: "Oktoberfest 2024",
    img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=500&h=350&fit=crop",
  },
];

const FOOD_GALLERY = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=400&fit=crop",
];

/* ───── PAGE ───── */

export default function Home() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const nextReview = () => setReviewIdx((i) => (i + 1) % REVIEWS.length);
  const prevReview = () => setReviewIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-hero"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-gold text-sm tracking-[0.35em] uppercase mb-6 font-medium"
            data-reveal
          >
            Lavie Garden &bull; Kathmandu
          </p>
          <h1
            className="font-serif text-white leading-[1.08] mb-8"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            data-reveal
          >
            A green hug<br />from Nature.
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            The most celebrated restaurant in town, offering fresh air, an open
            garden, and flavorful delicacies near the iconic Boudha Stupa.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
          >
            <a
              href="https://wa.me/9779808996175?text=Hi%20Lavie%20Garden!%20%F0%9F%8C%BF%0AI%E2%80%99d%20love%20to%20book%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-flex items-center gap-3 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-[0.12em] uppercase hover:bg-gold-light transition-colors duration-300 hover:shadow-[0_4px_30px_rgba(200,169,110,0.35)]"
            >
              Book a Table
              <span aria-hidden className="text-lg">&rarr;</span>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="magnetic inline-flex items-center gap-2 text-sm text-white/80 tracking-[0.12em] uppercase border-b border-white/30 pb-1 hover:border-gold hover:text-gold transition-colors"
            >
              Explore more
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ════════════ STATS STRIP ════════════ */}
      <section className="relative bg-forest py-8" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["#1", "TripAdvisor"],
            ["4.8\u2605", "Google Reviews"],
            ["4+", "Years of Excellence"],
            ["10 min", "From Boudha Stupa"],
          ].map(([val, label], i) => (
            <div
              key={label}
              className="text-center"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
            >
              <p className="font-serif text-2xl md:text-3xl text-gold">{val}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-white/50 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section id="about" className="py-24 md:py-32" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              About Lavie Garden
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08] mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              Every evening turns into a carnival.
            </h2>
            <div
              className="space-y-5 text-taupe leading-relaxed"
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              <p>
                <em className="font-serif text-charcoal not-italic">Lavie</em>, in
                French, means &lsquo;The Life&rsquo; — and it stands true as Lavie
                Garden is the synonym for &lsquo;celebration of life itself&rsquo;.
                Embraced by lush greenery, the aesthetic setup stands as Nature
                welcoming you with open arms and delicious flavors.
              </p>
              <p>
                From contemplating morning coffee to vibrant evening cocktails, from
                cozy quiet corners for quiet moments to lively gatherings under the
                stars with crackling bonfires, we&apos;ve got the perfect setting
                for any mood — accompanied by soul-soothing live music.
              </p>
              <p>
                And the best part? We&apos;re just a leisurely ten-minute stroll
                from the prestigious UNESCO World Heritage Site, Boudha Stupa.
              </p>
            </div>
          </div>

          <div
            className="relative"
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
          >
            <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=700&h=500&fit=crop"
                alt="Lavie Garden outdoor dining area"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-forest text-white rounded-2xl p-6 shadow-xl max-w-[220px]">
              <p className="font-serif text-3xl text-gold">4+</p>
              <p className="text-sm text-white/70 mt-1">
                Years serving joy in Kathmandu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ MENU ════════════ */}
      <section id="menu" className="py-24 md:py-32 bg-sand" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              Our Menu
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              Extensive Menu &amp; Dreamy Experience.
            </h2>
            <p
              className="mt-4 text-taupe max-w-xl mx-auto"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Whether you&apos;re a local food fanatic or an international cuisine
              explorer, Lavie Garden offers irresistible value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_ITEMS.map((item, i) => (
              <div
                key={item.name}
                className="card-lift bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="img-zoom w-full sm:w-[160px] h-[200px] sm:h-auto flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-charcoal mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
            data-reveal
            style={{ ["--reveal-delay" as string]: "300ms" }}
          >
            <a
              href="https://garden.laviehospitality.com.np/menu/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-flex items-center gap-3 rounded-full bg-forest text-white px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-emerald transition-colors duration-300"
            >
              View Full Menu
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ ACCOMMODATION ════════════ */}
      <section id="accommodation" className="py-24 md:py-32" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              Accommodation
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              Heavenly Stay Amidst a Green Garden
            </h2>
            <p
              className="mt-4 text-taupe max-w-xl mx-auto"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              We offer ideal accommodation in the heart of Boudha, Kathmandu —
              situated in lush greenery and just a short walk from the UNESCO site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room, i) => (
              <div
                key={room.name}
                className="card-lift bg-white rounded-2xl overflow-hidden shadow-sm"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                <div className="img-zoom h-[240px]">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal mb-4">
                    {room.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-leaf text-emerald px-3 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/9779808996175?text=Hi%20Lavie%20Garden!%20I%E2%80%99d%20like%20to%20book%20a%20room."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic inline-flex items-center gap-2 w-full justify-center rounded-full bg-forest text-white py-3 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-emerald transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FACILITIES ════════════ */}
      <section className="py-24 md:py-32 bg-forest" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4"
              data-reveal
            >
              Convenience & Facility
            </p>
            <h2
              className="font-serif text-white leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              Everything You Need
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {FACILITIES.map((f, i) => (
              <div
                key={f.name}
                className="text-center p-6 rounded-2xl border border-white/10 hover:border-gold/30 transition-colors duration-300"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="text-gold mb-4 flex justify-center">{f.icon}</div>
                <p className="text-sm text-white/80">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ REVIEWS ════════════ */}
      <section id="reviews" className="py-24 md:py-32" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              Reviews
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto" data-reveal>
            <div className="bg-sand rounded-3xl p-8 md:p-12 text-center min-h-[280px] flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: REVIEWS[reviewIdx].rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-charcoal leading-relaxed italic max-w-2xl">
                &ldquo;{REVIEWS[reviewIdx].text}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-forest tracking-wide uppercase">
                {REVIEWS[reviewIdx].author}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="magnetic w-12 h-12 rounded-full border-2 border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all duration-300"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === reviewIdx ? "bg-gold w-8" : "bg-forest/20"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="magnetic w-12 h-12 rounded-full border-2 border-forest/20 flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-all duration-300"
                aria-label="Next review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mt-16">
            {[
              { title: "#1 in TripAdvisor", sub: "Kathmandu Restaurants" },
              { title: "Top Rated", sub: "Google Reviews" },
            ].map((award, i) => (
              <div
                key={award.title}
                className="card-lift bg-leaf rounded-2xl p-6 text-center"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                <p className="font-serif text-xl text-forest">{award.title}</p>
                <p className="text-sm text-sage mt-1">{award.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FOOD & DRINKS GALLERY ════════════ */}
      <section className="py-24 md:py-32 bg-sand" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              Food & Drinks
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              A Foodie Paradise
            </h2>
            <p
              className="mt-4 text-taupe max-w-xl mx-auto"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              From mouthwatering dishes to four-course meals, with a dedicated
              Beer Garden for both the teetotalers and the tipplers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FOOD_GALLERY.map((img, i) => (
              <div
                key={i}
                className="img-zoom rounded-2xl overflow-hidden aspect-square"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                <img
                  src={img}
                  alt={`Food item ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ EVENTS ════════════ */}
      <section id="events" className="py-24 md:py-32" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              From Our Blog
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              data-reveal
            >
              Recent Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((ev, i) => (
              <div
                key={ev.title}
                className="card-lift rounded-2xl overflow-hidden bg-white shadow-sm"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                <div className="img-zoom h-[220px]">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal">{ev.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA / BOOK A TABLE ════════════ */}
      <section
        id="contact"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 parallax-hero"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div
          className="relative z-10"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-gold text-xs uppercase tracking-[0.3em] mb-4"
                data-reveal
              >
                Hungry for happiness?
              </p>
              <h2
                className="font-serif text-white leading-[1.08] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                data-reveal
              >
                Book your table &amp; join the carnival.
              </h2>
              <div
                className="space-y-3 text-white/70"
                data-reveal
                style={{ ["--reveal-delay" as string]: "100ms" }}
              >
                <p className="text-sm uppercase tracking-[0.1em] text-gold/70 font-semibold">
                  Opening Hours
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between max-w-xs">
                    <span>Breakfast</span>
                    <span>7:00 AM &ndash; 12:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Lunch</span>
                    <span>12:00 PM &ndash; 2:00 PM</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Dinner</span>
                    <span>6:00 PM &ndash; 10:00 PM</span>
                  </li>
                </ul>
              </div>

              <div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                data-reveal
                style={{ ["--reveal-delay" as string]: "200ms" }}
              >
                <a
                  href="https://wa.me/9779808996175?text=Hi%20Lavie%20Garden!%20%F0%9F%8C%BF%0AI%E2%80%99d%20love%20to%20book%20a%20table."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic inline-flex items-center gap-3 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  Book via WhatsApp
                </a>
                <a
                  href="tel:+9779808996175"
                  className="magnetic inline-flex items-center gap-3 rounded-full border-2 border-white/30 text-white px-8 py-4 text-sm tracking-[0.1em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              data-reveal
              style={{ ["--reveal-delay" as string]: "150ms" }}
            >
              <h3 className="font-serif text-2xl text-white mb-6">
                Get Directions
              </h3>
              <div className="rounded-2xl overflow-hidden h-[300px] bg-forest/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6!2d85.362!3d27.721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBoudha+Ramhiti%2C+Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lavie Garden Location"
                />
              </div>
              <div className="mt-4 text-sm text-white/60">
                <p>Boudha Ramhiti, Kathmandu, Nepal 44600</p>
                <p className="mt-1">10 min walk from Boudha Stupa (UNESCO)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

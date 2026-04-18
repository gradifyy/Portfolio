"use client";

import { useState } from "react";

/* ───── IMAGE BASE ───── */
const IMG = "https://garden.laviehospitality.com.np/wp-content/uploads/al_opt_content/IMAGE/garden.laviehospitality.com.np";
const WP = "https://garden.laviehospitality.com.np/wp-content/uploads";
const LAVIE = "https://laviehospitality.com.np/wp-content/uploads";

/* ───── DATA ───── */

const MENU_ITEMS = [
  {
    name: "Pomegranate Pani Puri Shots",
    desc: "Crispy puri stuffed with mashed potato, onion, coriander, pomegranate served with sweet chili tamarind mint shots.",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY7471-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
  {
    name: "Pulled Pork Benedict / Lavie Big Breakfast",
    desc: "Slow cooked pork, hash brown, poached eggs, drizzle of hollandaise sauce.",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY0689-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
  {
    name: "Dudh Malai Cake",
    desc: "Overnight spice-marinated juicy chicken, cooked to perfection in a tandoor and tossed in a homemade tangy spice mix, served on buckwheat pancake.",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY8060-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
  {
    name: "Meat Lovers Pizza",
    desc: "Look no further than our iconic Meat Lover\u2019s pizza, loved by all, the undisputed bestselling champion amongst all pizza varieties.",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY7854-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
];

const ROOMS = [
  {
    name: "Junior Suite",
    imgs: [
      `${IMG}/wp-content/uploads/2024/03/DSC02997-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC02987-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC02990_11zon-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC02999_11zon-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
    ],
    features: ["King Bed", "Garden View", "Free Wi-Fi", "Room Service", "AC", "Mini Bar"],
  },
  {
    name: "Superior Deluxe Room",
    imgs: [
      `${IMG}/wp-content/uploads/2024/03/DSC03024-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC03029-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC03023-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC03034-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
    ],
    features: ["Queen Bed", "City View", "Free Wi-Fi", "Breakfast", "AC", "Safe Box"],
  },
  {
    name: "Superior Deluxe with Balcony",
    imgs: [
      `${IMG}/wp-content/uploads/2024/03/DSC03046-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC03050-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC03052-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
      `${IMG}/wp-content/uploads/2024/03/DSC03044-min-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
    ],
    features: ["King Bed", "Balcony", "Garden View", "Breakfast", "AC", "Mini Bar"],
  },
];

const FACILITIES = [
  { name: "Beer Garden", icon: "\uD83C\uDF7A" },
  { name: "Boutique Accommodation", icon: "\uD83C\uDFE8" },
  { name: "Easily Accessible Location", icon: "\uD83D\uDCCD" },
  { name: "Ample Parking Space", icon: "\uD83C\uDD7F\uFE0F" },
  { name: "Fresh Air Open Garden", icon: "\uD83C\uDF3F" },
];

const REVIEWS = [
  {
    text: "I came for breakfast it was pretty good I'd say but the best thing I like about Lavie is their hospitality and the respect towards their customers. I will highly recommend this place for friends, family and couples out there. Thank you Lavie for having us!",
    author: "Udaya Phuyal",
  },
  {
    text: "Overall food was fantastic and the live music made our mood fresh. Service made by Mr Sandip was fabulous the way he make customer service was impressive.",
    author: "Aayusha Bhatta",
  },
  {
    text: "I had a delightful dining experience. The ambiance was inviting, the service was impeccable and the food was absolutely delicious. Each dish was expertly prepared showcasing a perfect blend of flavors. I highly recommend Lavie Garden for anyone seeking a memorable culinary experience.",
    author: "Ruben Sunuwar",
  },
  {
    text: "The place is very good. It is truly well managed. The atmosphere and ambience is very cozy. You wouldn't want to leave once you get here. The food is amazing. The servers were very helpful and they treated in a very professional manner.",
    author: "Nijendra Shrestha",
  },
  {
    text: "The ambience of the restaurant was peaceful and cozy, and the menu offered a wide variety of dishes to choose from. I was particularly impressed by the quality of the food \u2014 every dish I tried was not only delicious, but also a great value for the money.",
    author: "Rachel J",
  },
  {
    text: "True gem of a place. Definitely worth traveling to, even if you're staying more in-town. The food was excellent, the staff were friendly and attentive and the ambience was spot on. Would recommend!",
    author: "Paul",
  },
  {
    text: "Everything was 10 on 10. What an atmosphere to be here. Calm environment with good music. The service was so good and the waitress was so humble and nice too. Talking about the quality and quantity of food, it's worth it. Highly recommended.",
    author: "Enduu",
  },
];

const FOOD_GALLERY = [
  `${IMG}/wp-content/uploads/2024/04/LNSY9888-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/uploads/2024/04/LNSY8948-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/uploads/2024/04/LNSY0832-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/uploads/2024/04/LNSY8580-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/uploads/2024/02/food3.png.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/uploads/2024/02/food4.png.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/uploads/2024/02/pizza.png.bv.webp?bv_host=garden.laviehospitality.com.np`,
  `${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/food/food12.png.bv.webp?bv_host=garden.laviehospitality.com.np`,
];

const EVENTS = [
  {
    title: "4 Years of Lavie",
    href: "https://garden.laviehospitality.com.np/events/celebrations-become-cherished-memories-at-lavie-3/",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY7471-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
  {
    title: "Rang Over at Lavie",
    href: "https://garden.laviehospitality.com.np/events/celebrations-become-cherished-memories-at-lavie-2/",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY8060-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
  {
    title: "Oktoberfest 2024",
    href: "https://garden.laviehospitality.com.np/events/celebrations-become-cherished-memories-at-lavie/",
    img: `${IMG}/wp-content/uploads/2024/04/LNSY8948-scaled.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`,
  },
];

/* ───── ROOM IMAGE SLIDER COMPONENT ───── */
function RoomSlider({ imgs, name }: { imgs: string[]; name: string }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="relative h-[260px] overflow-hidden group">
      <img
        src={imgs[idx]}
        alt={`${name} - Photo ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      {imgs.length > 1 && (
        <>
          <button
            onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            aria-label="Previous photo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % imgs.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
            aria-label="Next photo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-white w-5" : "bg-white/50"}`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ───── PAGE ───── */

export default function Home() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const nextReview = () => setReviewIdx((i) => (i + 1) % REVIEWS.length);
  const prevReview = () => setReviewIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <>
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={`${IMG}/wp-content/uploads/2024/02/banner.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt="Lavie Garden"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Decorative flowers */}
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/flower-type-one.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute top-0 left-0 w-[180px] opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/flower-type-two.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute bottom-0 right-0 w-[200px] opacity-50 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <img
            src={`${LAVIE}/2024/08/LogoW.svg`}
            alt="Lavie Garden Logo"
            className="w-[140px] md:w-[180px] mx-auto mb-8"
            data-reveal
          />
          <p
            className="text-white/80 text-sm tracking-[0.4em] uppercase mb-6 font-light"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Lavie Garden
          </p>
          <h1
            className="font-serif text-white leading-[1.1] mb-8 italic"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            data-reveal
            id="hero-heading"
          >
            A green hug from<br />the Nature.
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            The most celebrated restaurant in town, offering fresh air, an open
            garden, and flavorful delicacies.
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
              className="magnetic inline-flex items-center gap-3 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-[0.12em] uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_4px_30px_rgba(200,169,110,0.4)]"
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
              Explore More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════════════ DECORATIVE STRIP WITH ICONS ════════════ */}
      <section className="relative bg-forest py-6 overflow-hidden" style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { icon: `${LAVIE}/2024/08/icon_flag.svg`, text: "Nepal" },
            { icon: `${LAVIE}/2024/08/icon_stupa.webp`, text: "Near Boudha Stupa" },
            { icon: `${LAVIE}/2024/08/Buddha-Eye.svg`, text: "UNESCO Heritage" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-white/70">
              <img src={item.icon} alt="" className="w-6 h-6 object-contain opacity-70" />
              <span className="text-xs tracking-[0.15em] uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section
        id="about"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundImage: `url(${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/background/white-texture.png.bv.webp?bv_host=garden.laviehospitality.com.np)`,
          backgroundSize: "cover",
        }}
      >
        {/* Decorative flowers */}
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/flower-type-three.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute top-10 right-0 w-[120px] md:w-[180px] opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/flower-type-four.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute bottom-10 left-0 w-[100px] md:w-[150px] opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div
            className="relative"
            data-reveal
          >
            <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${IMG}/wp-content/uploads/2024/02/about.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
                alt="Lavie Garden outdoor dining ambiance"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
            </div>
          </div>

          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] text-sage mb-4"
              data-reveal
            >
              About Lavie Garden
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08] mb-8 italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              Every evening turns into a carnival.
            </h2>
            <div
              className="space-y-5 text-taupe leading-[1.8]"
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              <p>
                <em className="font-serif text-charcoal not-italic font-semibold">Lavie</em>, in
                French, means &lsquo;The Life&rsquo; which stands true as Lavie
                Garden is the synonym for &lsquo;celebration of life itself&rsquo;.
                Embraced by lush greenery, the aesthetic setup stood as Nature
                welcomed you with open arms and delicious flavors altogether making
                it the best restaurant in Kathmandu.
              </p>
              <p>
                From contemplating morning coffee to vibrant evening glass of
                cocktail, from cozy quiet corners for quiet moments to lively
                gatherings under the stars with crackling bonfires, we&apos;ve got
                the perfect setting for any mood, accompanied by soul-soothing
                live music.
              </p>
              <p>
                And the best part? We&apos;re just a leisurely ten-minute stroll
                from the prestigious UNESCO World Heritage Site, Boudha Stupa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ MENU ════════════ */}
      <section
        id="menu"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundImage: `url(${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/background/green-texture.png.bv.webp?bv_host=garden.laviehospitality.com.np)`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-4" data-reveal>
              Our Menu
            </p>
            <h2
              className="font-serif text-white leading-[1.08] italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              Extensive Menu &amp; Dreamy Experience.
            </h2>
            <p
              className="mt-4 text-white/60 max-w-xl mx-auto"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              Whether you&apos;re a local food fanatic or an international cuisine
              explorer, Lavie Garden offers irresistible value &mdash; earning its
              place as the best restaurant in Kathmandu.
            </p>
          </div>

          {/* Decorative food images */}
          <img
            src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/food/food-plate.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
            alt=""
            className="absolute -top-10 -right-10 w-[200px] opacity-30 pointer-events-none hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MENU_ITEMS.map((item, i) => (
              <div
                key={item.name}
                className="card-lift bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col sm:flex-row border border-white/10 hover:border-gold/30"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="img-zoom w-full sm:w-[180px] h-[200px] sm:h-auto flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-serif text-lg text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-reveal style={{ ["--reveal-delay" as string]: "300ms" }}>
            <a
              href="https://garden.laviehospitality.com.np/menu/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-flex items-center gap-3 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              View Full Menu
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ ACCOMMODATION ════════════ */}
      <section
        id="accommodation"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundImage: `url(${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/background/white-texture.png.bv.webp?bv_host=garden.laviehospitality.com.np)`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/leaf-one.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute top-0 right-0 w-[140px] opacity-30 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4" data-reveal>
              Accommodation
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08] italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              Heavenly Stay Amidst a Green Garden
            </h2>
            <p
              className="mt-4 text-taupe max-w-xl mx-auto"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              At Lavie Garden, we offer you an ideal accommodation in the heart of
              Boudha, Kathmandu, situated in lush greenery and just a short walk
              from the UNESCO World Heritage Site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room, i) => (
              <div
                key={room.name}
                className="card-lift bg-white rounded-2xl overflow-hidden shadow-lg"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
              >
                <RoomSlider imgs={room.imgs} name={room.name} />
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
      <section
        className="py-24 md:py-32"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundImage: `url(${IMG}/wp-content/uploads/2024/02/facilities.png.bv.webp?bv_host=garden.laviehospitality.com.np)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-serif text-charcoal leading-[1.08] italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              Convenience and Facility
            </h2>
            <p className="mt-3 text-taupe" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
              To spice up your experience and ensure a hassle-free stay
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {FACILITIES.map((f, i) => (
              <div
                key={f.name}
                className="card-lift text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <p className="text-sm text-charcoal font-medium">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ NEPALI BANNER ════════════ */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={`${IMG}/wp-content/uploads/2024/04/collage.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt="Lavie Garden Collage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/80" />
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/leaf-one.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute top-0 left-0 w-[120px] opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <img
          src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/flowers/leaf-two.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute bottom-0 right-0 w-[120px] opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6" data-reveal>
          <h2
            className="font-serif text-white leading-[1.15]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            &#x0909;&#x0924;&#x094D;&#x0938;&#x0935; &#x092E;&#x0939;&#x094B;&#x0924;&#x094D;&#x0938;&#x0935; &#x092C;&#x0928;&#x094D;&#x091B; &#x0932;&#x092D;&#x0940;&#x092E;&#x093E;
          </h2>
        </div>
      </section>

      {/* ════════════ REVIEWS ════════════ */}
      <section
        id="reviews"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          paddingLeft: "5vw",
          paddingRight: "5vw",
          backgroundImage: `url(${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/background/white-texture.png.bv.webp?bv_host=garden.laviehospitality.com.np)`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4" data-reveal>
              Reviews
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08] italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto" data-reveal>
            <img
              src={`${IMG}/wp-content/themes/WPSTARTER/imagio_s/img/icons/testimonial.png.bv.webp?bv_host=garden.laviehospitality.com.np`}
              alt=""
              className="w-12 h-12 mx-auto mb-6 opacity-40"
              aria-hidden="true"
            />
            <div className="bg-sand/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center min-h-[240px] flex flex-col items-center justify-center border border-sand">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
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
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === reviewIdx ? "bg-gold w-7" : "bg-forest/20"}`}
                    aria-label={`Review ${i + 1}`}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto mt-16">
            {[
              { title: "#1 in TripAdvisor", sub: "Kathmandu Restaurants" },
              { title: "Top Rated", sub: "Google Reviews" },
            ].map((award, i) => (
              <div
                key={award.title}
                className="card-lift bg-leaf/50 rounded-2xl p-6 text-center border border-emerald/10"
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
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4" data-reveal>
              Food & Drinks
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08] italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              A Foodie Paradise
            </h2>
            <p
              className="mt-4 text-taupe max-w-xl mx-auto"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              From mouthwatering fast food dishes to four-course meals, Lavie Garden
              is a foodie paradise. And a dedicated Beer Garden for both the
              teetotalers and the tipplers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FOOD_GALLERY.map((img, i) => (
              <div
                key={i}
                className="img-zoom rounded-2xl overflow-hidden aspect-square shadow-sm"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                <img
                  src={img}
                  alt={`Lavie Garden dish ${i + 1}`}
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
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4" data-reveal>
              From Our Blog
            </p>
            <h2
              className="font-serif text-charcoal leading-[1.08] italic"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              data-reveal
            >
              Recent Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((ev, i) => (
              <a
                key={ev.title}
                href={ev.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift rounded-2xl overflow-hidden bg-white shadow-lg group"
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
                <div className="p-6 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-charcoal">{ev.title}</h3>
                  <span className="text-forest group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10" data-reveal>
            <a
              href="https://garden.laviehospitality.com.np/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic text-sm text-forest tracking-[0.12em] uppercase border-b border-forest/30 pb-1 hover:border-gold hover:text-gold transition-colors"
            >
              View All Events &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ════════════ CTA / BOOK A TABLE ════════════ */}
      <section
        id="contact"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <img
          src={`${IMG}/wp-content/uploads/2024/02/banner.jpg.bv.webp?bv_host=garden.laviehospitality.com.np`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div
          className="relative z-10"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4" data-reveal>
                Hungry for Happiness?
              </p>
              <h2
                className="font-serif text-white leading-[1.08] mb-6 italic"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                data-reveal
              >
                Book your table &amp; join the carnival.
              </h2>
              <div
                className="space-y-3 text-white/70"
                data-reveal
                style={{ ["--reveal-delay" as string]: "100ms" }}
              >
                <p className="text-sm uppercase tracking-[0.12em] text-gold/80 font-semibold mb-4">
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
                  className="magnetic inline-flex items-center gap-3 rounded-full bg-gold text-forest px-8 py-4 text-sm font-semibold tracking-[0.1em] uppercase hover:bg-gold-light transition-all duration-300"
                >
                  Book via WhatsApp
                </a>
                <a
                  href="tel:+9779808996175"
                  className="magnetic inline-flex items-center gap-3 rounded-full border-2 border-white/30 text-white px-8 py-4 text-sm tracking-[0.1em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  Call Us &middot; +977 980-8996175
                </a>
              </div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              data-reveal
              style={{ ["--reveal-delay" as string]: "150ms" }}
            >
              <h3 className="font-serif text-2xl text-white mb-6 italic">
                Get Directions
              </h3>
              <div className="rounded-2xl overflow-hidden h-[300px]">
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
              <div className="mt-4 text-sm text-white/50">
                <p>Boudha Ramhiti, Kathmandu, Nepal 44600</p>
                <p className="mt-1">10 min walk from Boudha Stupa (UNESCO World Heritage Site)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

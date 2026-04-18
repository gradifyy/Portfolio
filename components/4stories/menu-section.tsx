"use client";

const MENU_CATEGORIES = [
  {
    name: "Morning",
    items: [
      {
        title: "Eggs on Toast",
        description: "Free-range eggs, sourdough, herb butter, microgreens",
        price: "Rs 450",
      },
      {
        title: "Smoothie Bowl",
        description: "Acai, granola, seasonal fruits, coconut flakes, honey drizzle",
        price: "Rs 520",
      },
      {
        title: "Wild Mushroom Benedict",
        description: "Poached eggs, sauteed forest mushrooms, hollandaise, brioche",
        price: "Rs 580",
      },
      {
        title: "Matcha Latte",
        description: "Ceremonial-grade matcha, oat milk, light vanilla",
        price: "Rs 350",
      },
    ],
  },
  {
    name: "Kitchen",
    items: [
      {
        title: "Tofu Tacos",
        description: "Crispy tofu, pickled slaw, chipotle aioli, corn tortillas",
        price: "Rs 620",
      },
      {
        title: "Pulled Pork Bowl",
        description: "Slow-braised pork, jasmine rice, kimchi, sesame, soft egg",
        price: "Rs 750",
      },
      {
        title: "Himalayan Momo Platter",
        description: "Steamed and fried, three fillings, house-made achaar",
        price: "Rs 480",
      },
      {
        title: "Grilled Chicken Salad",
        description: "Mixed greens, avocado, cherry tomatoes, citrus vinaigrette",
        price: "Rs 650",
      },
    ],
  },
  {
    name: "Bar",
    items: [
      {
        title: "Blueberry Matcha",
        description: "Iced matcha, blueberry compote, coconut cream, tonic",
        price: "Rs 420",
      },
      {
        title: "Kathmandu Sour",
        description: "Local whiskey, lemon, Timur pepper syrup, egg white foam",
        price: "Rs 680",
      },
      {
        title: "Thamel Negroni",
        description: "Gin, Campari, sweet vermouth, orange zest, Nepali spice",
        price: "Rs 720",
      },
      {
        title: "Coconut Espresso Martini",
        description: "Vodka, fresh espresso, coconut liqueur, vanilla",
        price: "Rs 690",
      },
    ],
  },
];

export default function FsMenuSection() {
  return (
    <section
      id="menu"
      className="relative py-[18vh] px-[5vw]"
      style={{ background: "var(--fs-bg)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-[10vh]">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-5"
            style={{ color: "var(--fs-gold)" }}
            data-fs-reveal
          >
            The Menu
          </p>
          <h2
            className="font-serif leading-[1.05] mx-auto"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
              color: "var(--fs-cream)",
              maxWidth: "20ch",
            }}
            data-fs-reveal
          >
            Crafted with intention.
          </h2>
          <p
            className="mt-5 text-[1rem] leading-[1.7] max-w-lg mx-auto"
            style={{ color: "var(--fs-muted)" }}
            data-fs-reveal
          >
            A curated selection from our kitchen, café, and bar — each dish a
            conversation between local ingredients and global inspiration.
          </p>
        </div>

        {/* Menu categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {MENU_CATEGORIES.map((category, ci) => (
            <div
              key={category.name}
              data-fs-reveal
              style={{ ["--fs-delay" as string]: `${ci * 100}ms` }}
            >
              <h3
                className="font-serif text-xl mb-8 pb-4"
                style={{
                  color: "var(--fs-gold)",
                  borderBottom: "1px solid var(--fs-border)",
                }}
              >
                {category.name}
              </h3>
              <div className="flex flex-col gap-7">
                {category.items.map((item) => (
                  <div key={item.title} className="group">
                    <div className="flex justify-between items-baseline gap-4 mb-1.5">
                      <h4
                        className="text-[0.95rem] tracking-wide transition-colors duration-300 group-hover:text-[var(--fs-gold)]"
                        style={{ color: "var(--fs-cream)" }}
                      >
                        {item.title}
                      </h4>
                      <div
                        className="flex-1 min-w-[2rem]"
                        style={{
                          borderBottom: "1px dotted var(--fs-border)",
                          marginBottom: "4px",
                        }}
                      />
                      <span
                        className="text-xs tracking-wider whitespace-nowrap"
                        style={{ color: "var(--fs-muted)" }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className="text-[0.8rem] leading-[1.6]"
                      style={{ color: "var(--fs-muted)", opacity: 0.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-[8vh]" data-fs-reveal>
          <p
            className="text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "var(--fs-muted)" }}
          >
            This is a curated selection — full menu available on-site
          </p>
        </div>
      </div>
    </section>
  );
}

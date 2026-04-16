# Ayro — Portfolio

An editorial-minimal, multi-page portfolio for Ayro — an app developer and
designer crafting strategy-led digital experiences. The aesthetic is warm,
cloudy, and quietly editorial: DM Serif Display paired with Inter, a cream
and sand palette, generous negative space, and invisible motion.

## Stack

- **Next.js 16** (App Router, Turbopack build)
- **Tailwind CSS v4** with a custom palette (`cream`, `sand`, `stone`,
  `terracotta`, `dustyrose`, `charcoal`, `taupe`)
- **Lenis** for smooth scrolling (`lerp: 0.1`, `duration: 1.2`)
- **Framer Motion** for page transitions (cloudy fade + blur)
- **IntersectionObserver** for `[data-reveal]` scroll-reveal animations
- Respects `prefers-reduced-motion` across all motion layers

## Pages

- `/` — Home (hero, meta strip, selected work, philosophy pull quote)
- `/work` — Floating Archives index
- `/about` — Approach, capabilities, process
- `/contact` — Inquiry surface

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Notes on motion

- All reveal animations use `transform` and `opacity` only — no layout
  thrashing.
- Parallax on project images is driven by a lightweight `requestAnimationFrame`
  loop that reads `getBoundingClientRect()` once per frame.
- The nav hides on scroll-down (`translateY(-100%)`), reveals on scroll-up, and
  becomes frosted (`backdrop-filter: blur(12px)`) once the viewport has
  scrolled past 100px.

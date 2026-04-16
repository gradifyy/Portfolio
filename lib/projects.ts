export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  summary: string;
  image: string;
  align: "left" | "right";
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "lumen-fieldbook",
    title: "A quieter way to capture a day",
    client: "Lumen Fieldbook",
    year: "2025",
    category: "Mobile Product",
    summary:
      "An iOS journaling app that translates unstructured thoughts into gentle daily narratives — built around restraint, rhythm, and residue.",
    image: "/images/p-lumen.svg",
    align: "left",
    accent: "#C4A484",
  },
  {
    slug: "meridian-atlas",
    title: "Maps that remember where you have been",
    client: "Meridian Atlas",
    year: "2024",
    category: "Web Platform",
    summary:
      "A travel-first mapping canvas with slow zoom interactions, handwritten annotations, and a private index of places that mattered.",
    image: "/images/p-meridian.svg",
    align: "right",
    accent: "#D4A5A5",
  },
  {
    slug: "soft-systems",
    title: "Design tools that feel like sketchbooks",
    client: "Soft Systems",
    year: "2024",
    category: "Brand · Product",
    summary:
      "A design-tool rebrand and interface rethink, replacing density with ceremony. A slower, more confident way to work.",
    image: "/images/p-soft.svg",
    align: "left",
    accent: "#C4A484",
  },
  {
    slug: "north-current",
    title: "Editorial for a weather-obsessed publication",
    client: "North Current",
    year: "2023",
    category: "Editorial · Web",
    summary:
      "A long-form magazine template with typography that inhales, images that drift, and navigation that steps out of the way.",
    image: "/images/p-north.svg",
    align: "right",
    accent: "#D4A5A5",
  },
  {
    slug: "paper-garden",
    title: "A commerce shell that treats products like artifacts",
    client: "Paper Garden",
    year: "2023",
    category: "E-commerce",
    summary:
      "A slow, image-led storefront for a small-batch stationery house — built around catalog as collection, not inventory.",
    image: "/images/p-paper.svg",
    align: "left",
    accent: "#C4A484",
  },
  {
    slug: "kindred-ledger",
    title: "A personal finance tool that speaks gently",
    client: "Kindred Ledger",
    year: "2022",
    category: "Fintech · Product",
    summary:
      "A money app built for reflection instead of anxiety — with slow charts, kind copy, and an architecture that hides detail until invited.",
    image: "/images/p-kindred.svg",
    align: "right",
    accent: "#D4A5A5",
  },
];

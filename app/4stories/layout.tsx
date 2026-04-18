import type { Metadata } from "next";
import FourStoriesShell from "@/components/4stories/shell";

export const metadata: Metadata = {
  title: "4Stories — Where Every Floor Tells a Different Tale",
  description:
    "A contemporary eatery in Thamel, Kathmandu. Four floors of artsy ambiance, innovative dishes, and refreshing drinks — from morning coffee to midnight cocktails.",
  openGraph: {
    title: "4Stories — Thamel, Kathmandu",
    description:
      "Four floors of artsy ambiance, innovative dishes, and refreshing drinks.",
    type: "website",
  },
};

export default function FourStoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FourStoriesShell>{children}</FourStoriesShell>;
}

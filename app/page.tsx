import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Community from "@/components/community";
import FeaturedProjects from "@/components/featured-projects";
import CaseStudies from "@/components/case-studies";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Cream → lime transition band */}
      <div
        data-nav-theme="light"
        className="cream-to-lime"
        style={{ height: "12vh" }}
        aria-hidden
      />
      <Community />
      {/* Lime → charcoal transition */}
      <div
        data-nav-theme="dark"
        className="lime-to-charcoal"
        style={{ height: "12vh" }}
        aria-hidden
      />
      <HowItWorks />
      <FeaturedProjects />
      {/* Charcoal → cream transition */}
      <div
        data-nav-theme="light"
        className="charcoal-to-cream"
        style={{ height: "14vh" }}
        aria-hidden
      />
      <CaseStudies />
    </>
  );
}

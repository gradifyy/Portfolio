import FsScrollObserver from "@/components/4stories/scroll-observer";
import FsNavbar from "@/components/4stories/navbar";
import FsHero from "@/components/4stories/hero";
import FsStory from "@/components/4stories/story";
import FsExperience from "@/components/4stories/experience";
import FsMenuSection from "@/components/4stories/menu-section";
import FsGallery from "@/components/4stories/gallery";
import FsTestimonials from "@/components/4stories/testimonials";
import FsVisit from "@/components/4stories/visit";
import FsFooter from "@/components/4stories/fs-footer";

export default function FourStoriesPage() {
  return (
    <>
      <FsScrollObserver />
      <FsNavbar />
      <FsHero />
      <FsStory />
      <FsExperience />
      <FsMenuSection />
      <FsGallery />
      <FsTestimonials />
      <FsVisit />
      <FsFooter />
    </>
  );
}

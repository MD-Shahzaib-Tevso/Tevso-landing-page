import { AboutCapabilitiesSection } from "@/components/sections/AboutCapabilitiesSection";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { AboutStatsStripSection } from "@/components/sections/AboutStatsStripSection";
import { ServicesTestimonialsSection } from "@/components/sections/ServicesTestimonialsSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutStatsStripSection />
      <AboutCapabilitiesSection />
      <ServicesTestimonialsSection />
    </>
  );
}
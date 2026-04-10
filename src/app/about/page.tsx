import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutIntroSection } from "@/components/sections/AboutIntroSection";
import { AboutStatsStripSection } from "@/components/sections/AboutStatsStripSection";
import { AboutCapabilitiesSection } from "@/components/sections/AboutCapabilitiesSection";
import { HomeTestimonialsSection } from "@/components/sections/HomeTestimonialsSection";

export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutStatsStripSection />
      <AboutCapabilitiesSection />
      <HomeTestimonialsSection />
    </main>
  );
}
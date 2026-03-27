import { CaseStudiesFeaturedListSection } from "@/components/sections/CaseStudiesFeaturedListSection";
import { CaseStudiesHeroSection } from "@/components/sections/CaseStudiesHeroSection";
import { CaseStudiesIntroSection } from "@/components/sections/CaseStudiesIntroSection";

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHeroSection />
      <CaseStudiesIntroSection />
      <CaseStudiesFeaturedListSection />
    </>
  );
}
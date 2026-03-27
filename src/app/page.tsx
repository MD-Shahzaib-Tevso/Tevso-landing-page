import { HomeCaseStudiesSection } from "@/components/sections/HomeCaseStudiesSection";
import { HomeContactFormSection } from "@/components/sections/HomeContactFormSection";
import { HomeCTASection } from "@/components/sections/HomeCTASection";
import { HomeEngagementSection } from "@/components/sections/HomeEngagementSection";
import { HomeFAQSection } from "@/components/sections/HomeFAQSection";
import { HomeFeatureShowcaseSection } from "@/components/sections/HomeFeatureShowcaseSection";
import { HomeHeroSection } from "@/components/sections/HomeHeroSection";
import { HomeStatsSection } from "@/components/sections/HomeStatsSection";
import { HomeTestimonialsSection } from "@/components/sections/HomeTestimonialsSection";
import { HomeTransformationSection } from "@/components/sections/HomeTransformationSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomeFeatureShowcaseSection />
      <HomeCaseStudiesSection />
      <HomeEngagementSection />
      <HomeTransformationSection />
      <HomeCTASection />
      <HomeTestimonialsSection />
      <HomeFAQSection />
      <HomeContactFormSection />
    </>
  );
}
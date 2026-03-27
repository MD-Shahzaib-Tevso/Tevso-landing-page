import { ServicesCTASection } from "@/components/sections/ServicesCTASection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesProcessSection } from "@/components/sections/ServicesProcessSection";
import { ServicesTestimonialsSection } from "@/components/sections/ServicesTestimonialsSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesCTASection />
      <ServicesProcessSection />
      <ServicesTestimonialsSection />
    </>
  );
}
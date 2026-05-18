import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesProcessSection } from "@/components/sections/ServicesProcessSection";
// import { ServicesCTASection } from "@/components/sections/ServicesCTASection";
// import { ServicesGridSection } from "@/components/sections/ServicesGridSection";

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden">
      <ServicesHeroSection />
      {/* <ServicesGridSection />
      <ServicesCTASection /> */}
      <ServicesProcessSection />
    </main>
  );
}
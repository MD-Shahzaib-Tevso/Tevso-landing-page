import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesProcessSection } from "@/components/sections/ServicesProcessSection";

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden">
      <ServicesHeroSection />
      <ServicesProcessSection />
    </main>
  );
}
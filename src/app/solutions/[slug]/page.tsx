import { ServiceDetailsHeroSection } from "@/components/sections/ServiceDetailsHeroSection";
import { ServiceDetailsOverviewSection } from "@/components/sections/ServiceDetailsOverviewSection";
import { ServiceDetailsWorkSection } from "@/components/sections/ServiceDetailsWorkSection";
import { ServiceDetailsBenefitsSection } from "@/components/sections/ServiceDetailsBenefitsSection";
import { ServiceDetailsFAQSection } from "@/components/sections/ServiceDetailsFAQSection";
import { ServiceDetailsSidebar } from "@/components/sections/ServiceDetailsSidebar";

type ServiceDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const serviceData: Record<string, { title: string }> = {
  "web-development": { title: "Web development" },
  "ui-ux-design": { title: "UI / UX design" },
  "mvp-launch": { title: "MVP launch" },
  "product-traction": { title: "Product traction" },
  "scaling-infrastructure": { title: "Scaling infrastructure" },
};

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const { slug } = await params;
  const service = serviceData[slug] || { title: "Service Details" };

  return (
    <main className="w-full overflow-hidden bg-white">
      <ServiceDetailsHeroSection />
      
      <div className="mx-auto w-full px-6 md:px-12 lg:px-16 py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Content Column */}
          <div className="w-full lg:w-2/3 space-y-12">
            <ServiceDetailsOverviewSection title={service.title} />
            <ServiceDetailsWorkSection />
            <ServiceDetailsBenefitsSection />
          </div>

          {/* Sidebar Column */}
          <div className="w-full lg:w-1/3">
            <ServiceDetailsSidebar />
          </div>
        </div>
      </div>

      <ServiceDetailsFAQSection />
    </main>
  );
}
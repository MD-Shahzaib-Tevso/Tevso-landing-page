import { ServiceDetailsHeroSection } from "@/components/sections/ServiceDetailsHeroSection";
import { ServiceDetailsOverviewSection } from "@/components/sections/ServiceDetailsOverviewSection";
import { ServiceDetailsWorkSection } from "@/components/sections/ServiceDetailsWorkSection";
import { ServiceDetailsBenefitsSection } from "@/components/sections/ServiceDetailsBenefitsSection";
import { ServiceDetailsFAQSection } from "@/components/sections/ServiceDetailsFAQSection";
import { ServicesCTASection } from "@/components/sections/ServicesCTASection";
import { ServicesTestimonialsSection } from "@/components/sections/ServicesTestimonialsSection";

type ServiceDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

// Service titles mapping
const serviceData: Record<
  string,
  {
    title: string;
  }
> = {
  "web-development": { title: "Web Development" },
  "ui-ux-design": { title: "UI / UX Design" },
  "mvp-launch": { title: "MVP Launch" },
  "product-traction": { title: "Product Traction" },
  "scaling-infrastructure": { title: "Scaling Infrastructure" },
};

export default async function ServiceDetailsPage({
  params,
}: ServiceDetailsPageProps) {
  const { slug } = await params;
  const service = serviceData[slug] || { title: "Service" };

  return (
    <>
      <ServiceDetailsHeroSection title={service.title} />
      <ServiceDetailsOverviewSection />
      <ServiceDetailsWorkSection />
      <ServiceDetailsBenefitsSection />
      <ServiceDetailsFAQSection />
      <ServicesCTASection />
      <ServicesTestimonialsSection />
    </>
  );
}
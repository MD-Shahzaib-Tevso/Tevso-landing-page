import { CaseStudiesDetailsHeroSection } from "@/components/sections/CaseStudiesDetailsHeroSection";
import { CaseStudiesDetailsContentSection } from "@/components/sections/CaseStudiesDetailsContentSection";
import { CaseStudiesDetailsImpactSection } from "@/components/sections/CaseStudiesDetailsImpactSection";
import { CaseStudiesDetailsSolutionSection } from "@/components/sections/CaseStudiesDetailsSolutionSection";
import { CaseStudiesDetailsFeaturesSection } from "@/components/sections/CaseStudiesDetailsFeaturesSection";
// import { CaseStudiesDetailsFeaturesSection } from "@/components/sections/CaseStudiesDetailsFeaturesSection";

type CaseStudyDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

// Updated case study titles mapping based on screenshot expectations
const caseStudyData: Record<
  string,
  {
    title: string;
    overviewTitle: string;
  }
> = {
  "digital-veterinary-care-platform": {
    title: "Fortknow application",
    overviewTitle: "24/7 digital veterinary care platform",
  },
  "online-pet-pharmacy-platform": {
    title: "Online Pet Pharmacy",
    overviewTitle: "Scalable e-commerce and regulatory solution",
  },
  "energy-and-utility-switching-platform": {
    title: "Energy Switch",
    overviewTitle: "Energy and utility switching platform",
  },
};

export default async function CaseStudyDetailsPage({
  params,
}: CaseStudyDetailsPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudyData[slug] || {
    title: "Case Study",
    overviewTitle: "Case study overview"
  };

  return (
    <main className="w-full bg-white overflow-hidden pb-32">
      <CaseStudiesDetailsHeroSection title={caseStudy.title} />

      <div className="mx-auto w-full px-6 md:px-12 lg:px-16 space-y-24 mt-[-80px] relative z-10">
        <CaseStudiesDetailsContentSection overviewTitle={caseStudy.overviewTitle} />

        <CaseStudiesDetailsSolutionSection />
        <CaseStudiesDetailsFeaturesSection />
        <CaseStudiesDetailsImpactSection />
      </div>
    </main>
  );
}
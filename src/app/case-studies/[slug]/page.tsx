import { CaseStudiesDetailsHeroSection } from "@/components/sections/CaseStudiesDetailsHeroSection";
import { CaseStudiesDetailsOverviewSection } from "@/components/sections/CaseStudiesDetailsOverviewSection";
import { CaseStudiesDetailsChallengeSection } from "@/components/sections/CaseStudiesDetailsChallengeSection";
import { CaseStudiesDetailsSolutionSection } from "@/components/sections/CaseStudiesDetailsSolutionSection";
import { CaseStudiesDetailsApproachSection } from "@/components/sections/CaseStudiesDetailsApproachSection";
import { CaseStudiesDetailsTestimonialSection } from "@/components/sections/CaseStudiesDetailsTestimonialSection";
import { HomeCTASection } from "@/components/sections/HomeCTASection";

type CaseStudyDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

// Case study titles mapping
const caseStudyData: Record<
  string,
  {
    title: string;
  }
> = {
  "digital-veterinary-care-platform": {
    title: "24/7 Digital Veterinary Care Platform",
  },
  "online-pet-pharmacy-platform": {
    title: "Online Pet Pharmacy Platform",
  },
  "energy-and-utility-switching-platform": {
    title: "Energy and Utility Switching Platform",
  },
};

export default async function CaseStudyDetailsPage({
  params,
}: CaseStudyDetailsPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudyData[slug] || { title: "Case Study" };

  return (
    <>
      <CaseStudiesDetailsHeroSection title={caseStudy.title} />
      <CaseStudiesDetailsOverviewSection />
      <CaseStudiesDetailsChallengeSection />
      <CaseStudiesDetailsSolutionSection />
      <CaseStudiesDetailsApproachSection />
      <CaseStudiesDetailsTestimonialSection />
      <HomeCTASection />
    </>
  );
}
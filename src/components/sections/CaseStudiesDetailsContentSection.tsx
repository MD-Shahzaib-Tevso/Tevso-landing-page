import { CaseStudy } from "@/interfaces";
import { FallbackImage } from "../shared/FallbackImage";

interface Props {
  study: CaseStudy;
}

export function CaseStudiesDetailsContentSection({ study }: Props) {
  return (
    <section className="space-y-16">
      {/* Featured Mockup Image */}
      <div className="relative w-full aspect-video md:aspect-2/1 rounded-3xl overflow-hidden bg-[#E8E8E8] shadow-2xl flex items-center justify-center max-w-6xl mx-auto">
        <FallbackImage
          src={study?.previewImage} // Placeholder URL for laptop mockup
          alt={study?.alt}
          fill
          fallbackText={study?.title}
          className="object-cover md:object-cover rounded-3xl"
          priority
        />
      </div>

      {/* Overview & Challenge Text */}
      <div className="space-y-12">
        {/* Overview */}
        <div className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#311EE6] tracking-tight">
            {study?.title}
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
            {study?.description}
          </p>
        </div>

        {/* Client Challenge */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
            Client challenge
          </h3>
          <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
            {study?.challenge}
          </p>
        </div>
      </div>
    </section>
  );
}

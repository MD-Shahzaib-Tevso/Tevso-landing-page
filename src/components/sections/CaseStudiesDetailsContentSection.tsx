import Image from "next/image";

export function CaseStudiesDetailsContentSection({
  overviewTitle,
}: {
  overviewTitle: string;
}) {
  return (
    <section className="space-y-16">
      {/* Featured Mockup Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden bg-[#E8E8E8] shadow-2xl flex items-center justify-center border-[4px] border-white max-w-6xl mx-auto">
        <Image
          src="/laptop.png" // Placeholder URL for laptop mockup
          alt="Fortknow Application Mockup"
          fill
          className="object-cover md:object-contain p-4 md:p-8"
          priority
        />
      </div>

      {/* Overview & Challenge Text */}
      <div className="max-w-4xl mx-auto space-y-12 px-2">
        {/* Overview */}
        <div className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#311EE6] tracking-tight">
            {overviewTitle}
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
            Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure. We developed a white label digital platform that allows clinics to provide round the clock virtual consultations under their own brand, connecting pet parents with licensed veterinarians seamlessly.
          </p>
        </div>

        {/* Client Challenge */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
            Client challenge
          </h3>
          <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
            Clinics could not scale consultation availability without hiring more staff or building costly technology. They also lacked a unified system for scheduling, payments, and emergency care.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesDetailsFeaturesSection() {
  const features = [
    "Video Consultations",
    "Automated Dispatch",
    "Appoint Scheduling",
    "Admin Dashboard",
    "Billing & Invoicing",
    "Pet Health Records",
    "Pet Parent Portal",
    "Appoint Scheduling",
    "Admin Dashboard",
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-8 px-2 pb-24">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#311EE6] tracking-tight">
        Key features
      </h2>

      <div className="flex flex-wrap gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl bg-[#311EE6] px-6 py-3 font-body text-[14px] font-semibold text-white shadow-md hover:-translate-y-0.5 transition-transform cursor-default min-w-[160px] text-center"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}

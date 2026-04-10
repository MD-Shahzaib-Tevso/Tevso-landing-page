const steps = [
  {
    number: "01",
    title: "Operational Audit",
    description: "We map your current workflows, data landscape, and pain points — identifying where AI can generate measurable, near-term value versus longer-term transformation."
  },
  {
    number: "02",
    title: "Solution Design",
    description: "We co-design the right approach — selecting capabilities, defining scope, and aligning on success metrics before any development begins."
  },
  {
    number: "03",
    title: "Focused Deployment",
    description: "We build and deploy in structured phases — starting with high-impact, lower-risk implementations that demonstrate value and build internal confidence."
  },
  {
    number: "04",
    title: "Measure & Scale",
    description: "We track outcomes against defined metrics, refine based on performance, and design pathways for scaling successful implementations across the organisation."
  }
];

export function AiSolutionsMethodologySection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-20 space-y-4">
          <p className="font-body text-[15px] font-bold text-[#64748B] uppercase tracking-widest">
            Our Methodology
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#020617] leading-[1.2] tracking-tight">
            A structured path from<br className="hidden md:block" /> assessment to impact.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`p-10 flex flex-col space-y-8 relative ${
                index !== steps.length - 1 ? "lg:border-r border-[#E2E8F0]" : ""
              } ${
                index < 2 ? "border-b md:border-b-0" : ""
              } ${
                index % 2 === 0 ? "md:border-r lg:border-r-0" : ""
              }`}
            >
              <span className="font-heading text-4xl font-bold text-[#3B32C4]">
                {step.number}
              </span>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-[#020617]">
                  {step.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

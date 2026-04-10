const futureCapabilities = [
  {
    title: "Agentic Workflows",
    description: "AI agents that don't just answer questions, but take structured action — researching, planning, executing, and reporting across multi-step operational tasks.",
    tag: "Emerging"
  },
  {
    title: "Multimodal Intelligence",
    description: "Systems that process images, documents, audio, and structured data simultaneously — enabling richer context and more accurate outputs across diverse inputs.",
    tag: "Advanced"
  },
  {
    title: "Knowledge Architecture",
    description: "Building proprietary AI knowledge bases from your operational data — creating institutional intelligence that improves continuously and compounds over time.",
    tag: "Strategic"
  },
  {
    title: "Real-Time Decision Engines",
    description: "Deploying high-frequency AI models that react to live data streams — making micro-decisions in milliseconds to optimize pricing, routing, or risk.",
    tag: "High Impact"
  },
  {
    title: "AI Governance Frameworks",
    description: "Establishing the guardrails, safety protocols, and monitoring systems required to deploy AI at scale while maintaining compliance and trust.",
    tag: "Enterprise"
  },
  {
    title: "Cross-System Orchestration",
    description: "Coordinating multiple AI models and legacy tools into a unified operational layer that manages complex end-to-end business processes.",
    tag: "Scale"
  }
];

export function AiSolutionsFutureCapabilitiesSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <p className="font-body text-[15px] font-bold text-[#64748B] uppercase tracking-widest">
            Future-Ready Capabilities
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#020617] leading-[1.2] tracking-tight">
            Building for tomorrow's<br className="hidden md:block" /> operations, today.
          </h2>
          <p className="font-body text-lg text-[#64748B] max-w-2xl mx-auto">
            Beyond immediate efficiency gains, we help forward-thinking organisations build 
            the foundation for increasingly sophisticated AI capability over time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {futureCapabilities.map((item, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl border border-[#E2E8F0] bg-white transition-all hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between h-full group hover:bg-[#3B32C4] hover:border-[#3B32C4] overflow-hidden"
            >
              {/* Corner Decoration */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <h3 className="font-heading text-2xl font-bold text-[#3B32C4] group-hover:text-white transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-[#64748B] group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 text-left relative z-10">
                <span className="inline-block px-4 py-2 rounded-sm bg-[#3B32C4] group-hover:bg-white text-white group-hover:text-[#3B32C4] transition-colors font-body text-[13px] font-bold shadow-sm">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

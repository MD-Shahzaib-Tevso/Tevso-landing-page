const capabilities = [
  {
    number: "01",
    title: "Intelligent Automation",
    description: "Automate workflows, document processing, approvals, and reporting cycles — reducing manual effort without disrupting your existing systems or team structure.",
    tag: "Process Efficiency",
    isPrimary: true
  },
  {
    number: "02",
    title: "Decision Intelligence",
    description: "Transform raw data into structured insights — real-time dashboards, anomaly detection, and AI-driven recommendations that support faster, better-informed decisions.",
    tag: "Analytics",
    isPrimary: false
  },
  {
    number: "03",
    title: "AI Assistants & Copilots",
    description: "Deploy intelligent assistants for customer support, internal queries, or knowledge management — trained on your context, operating within your guardrails.",
    tag: "Conversational AI",
    isPrimary: false
  },
  {
    number: "04",
    title: "Predictive Systems",
    description: "Forecast demand, flag risk, and model outcomes before they occur — enabling proactive management across supply chain, finance, maintenance, and operations.",
    tag: "Forecasting",
    isPrimary: false
  },
  {
    number: "05",
    title: "Document & Knowledge AI",
    description: "Extract, classify, and structure information from unstructured documents — contracts, reports, forms — making institutional knowledge searchable and actionable.",
    tag: "Unstructured Data",
    isPrimary: false
  },
  {
    number: "06",
    title: "System Enhancement",
    description: "Augment your existing platforms — ERP, CRM, custom tools — with intelligent modules that add capability without requiring a full rebuild or migration.",
    tag: "Integration Layer",
    isPrimary: false
  }
];

export function AiSolutionsCapabilitiesSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <p className="font-body text-[15px] font-bold text-[#64748B] uppercase tracking-widest">
            What We Bring
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#020617] leading-[1.2] tracking-tight">
            A broad set of AI capabilities, applied<br className="hidden md:block" /> with precision.
          </h2>
          <p className="font-body text-lg text-[#64748B] max-w-2xl mx-auto">
            We don't sell one solution. We map your operations and apply the right capability — 
            whether that's automation, prediction, intelligence, or something in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all hover:shadow-2xl flex flex-col justify-between h-full group overflow-hidden ${
                item.isPrimary 
                ? "bg-[#3B32C4] border-[#3B32C4] text-white" 
                : "bg-white border-[#E2E8F0] text-[#020617] hover:bg-[#3B32C4] hover:border-[#3B32C4]"
              }`}
            >
              {/* Corner Decoration */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-[0.08] bg-white transition-opacity ${item.isPrimary ? "opacity-10" : "opacity-0 group-hover:opacity-10"}`}></div>
              
              <div className="space-y-6 relative z-10">
                <span className={`font-heading text-xl font-bold transition-colors ${item.isPrimary ? "text-white/60" : "text-[#3B32C4] group-hover:text-white/60"}`}>
                  {item.number}
                </span>
                <div className="space-y-4">
                  <h3 className={`font-heading text-2xl font-bold leading-tight transition-colors ${item.isPrimary ? "text-white" : "text-[#020617] group-hover:text-white"}`}>
                    {item.title}
                  </h3>
                  <p className={`font-body text-[15px] leading-relaxed transition-colors ${item.isPrimary ? "text-white/80" : "text-[#64748B] group-hover:text-white/80"}`}>
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 relative z-10 text-left">
                <span className={`inline-block px-4 py-2 rounded-sm font-body text-[13px] font-bold transition-colors ${
                  item.isPrimary 
                  ? "bg-white text-[#3B32C4]" 
                  : "bg-[#F1F5F9] text-[#3B32C4] group-hover:bg-white"
                }`}>
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

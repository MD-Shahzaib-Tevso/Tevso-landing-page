const transformations = [
  {
    before: "Reports compiled manually every week — involving multiple people, spreadsheets, and email chains.",
    after: "Reports generated automatically from live data. delivered on schedule with zero manual effort."
  },
  {
    before: "Customer queries handled by a growing support team — increasing headcount cost as volume scales.",
    after: "AI assistant handles tier-1 queries 24/7 — escalating only complex cases with full context already captured."
  },
  {
    before: "Inventory decisions based on last month's sales and gut instinct — leading to overstock or shortfalls.",
    after: "Demand forecasting models predict requirements weeks ahead — enabling precision procurement."
  },
  {
    before: "Data sits in disconnected systems — no single view of operations, performance, or risk.",
    after: "Unified intelligence layer aggregates data in real time — surfacing what matters, when it matters."
  },
  {
    before: "Document review requires senior staff hours — contracts, invoices, and forms handled one by one.",
    after: "AI processes, classifies, and extracts key data from documents at volume — in seconds, not hours."
  }
];

export function AiSolutionsTransformationSection() {
  return (
    <section className="relative w-full py-24 bg-[#F8FAFC]">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16 space-y-4">
          <p className="font-body text-[15px] font-bold text-[#64748B] uppercase tracking-widest">
            The Transformation
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#020617] leading-[1.2] tracking-tight">
            From operational friction to<br className="hidden md:block" /> intelligent flow.
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Column */}
          <div className="space-y-0 rounded-2xl overflow-hidden shadow-lg bg-white border border-[#E2E8F0]">
            <div className="bg-[#3B32C4] p-6">
              <h3 className="font-heading text-xl font-bold text-white text-center">
                Before — Current State
              </h3>
            </div>
            <div className="divide-y divide-[#E2E8F0]">
              {transformations.map((item, index) => (
                <div key={index} className="p-6 h-[120px] flex items-center">
                  <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
                    {item.before}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div className="space-y-0 rounded-2xl overflow-hidden shadow-lg bg-white border border-[#E2E8F0]">
            <div className="bg-[#3B32C4] p-6">
              <h3 className="font-heading text-xl font-bold text-white text-center">
                After — Applied Intelligence
              </h3>
            </div>
            <div className="divide-y divide-[#E2E8F0]">
              {transformations.map((item, index) => (
                <div key={index} className="p-6 h-[120px] flex items-center">
                  <p className="font-body text-[15px] leading-relaxed text-[#020617]">
                    {item.after}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

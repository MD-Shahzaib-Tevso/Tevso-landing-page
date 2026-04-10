const waysToUse = [
  "Automate repetitive internal workflows",
  "Deploy an AI assistant for your team or customers",
  "Build predictive models for key decisions",
  "Unlock insights from unstructured data",
  "Add AI modules to your existing systems",
  "Create standalone tools for specific problems"
];

export function AiSolutionsContextSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-body text-[15px] font-bold text-[#64748B] uppercase tracking-widest">
                More Than Integration
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#020617] leading-[1.2] tracking-tight">
                AI applied in the way that<br className="hidden md:block" /> fits your context.
              </h2>
            </div>
            
            <p className="font-body text-lg text-[#64748B] leading-relaxed">
              We don't arrive with a fixed product. We assess your operations and identify where 
              intelligence creates the most value — whether that's a standalone tool, a workflow 
              layer, an embedded module, or a fully integrated system.
            </p>

            <ul className="space-y-4">
              {[
                "Improve existing workflows without replacing them",
                "Add intelligent automation as a layer, not a disruption",
                "Build net-new AI-driven tools for specific problems",
                "Enhance decision-making at every organisational level",
                "Reduce operational load through targeted automation",
                "Embed AI into the tools your team already uses"
              ].map((bullet, index) => (
                <li key={index} className="flex items-center gap-3 font-body text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B32C4] flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Featured Box */}
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#3B32C4] to-[#251E91] text-white overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
            
            <div className="relative z-10 space-y-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                Ways You Can Use AI Today
              </h3>
              
              <div className="divide-y divide-white/20">
                {waysToUse.map((item, index) => (
                  <div key={index} className="py-5 flex items-start gap-4 group">
                    <span className="font-heading text-sm font-bold opacity-40 mt-1">
                      0{index + 1}
                    </span>
                    <p className="font-body text-lg font-medium group-hover:translate-x-1 transition-transform">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

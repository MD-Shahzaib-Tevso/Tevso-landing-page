import { Cpu, Search, Share2, TrendingUp, Bot, BarChart3, Quote } from "lucide-react";

const cards = [
  {
    icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Manual Process Overload",
    description: "Hours lost to repetitive tasks that trained staff perform mechanically — work that can be handled by intelligent systems, freeing your team for higher-value thinking."
  },
  {
    icon: <Search className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Data That Doesn't Inform",
    description: "Organisations collect vast amounts of data but lack the frameworks to translate it into decisions. Reports arrive late. Insights are buried. Opportunities pass unnoticed."
  },
  {
    icon: <Share2 className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Systems That Don't Communicate",
    description: "Disconnected tools force manual handoffs between departments, creating delays, errors, and blind spots that compound across operations and erode margins quietly over time."
  },
  {
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Scaling Without Structure",
    description: "As volume grows, so does complexity — but most businesses scale by adding headcount, not by redesigning the operational model to handle growth intelligently."
  },
  {
    icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Partial Adoption of AI Tools",
    description: "Tools get purchased. Pilots get launched. But without a coherent implementation strategy, AI investments fragment into isolated experiments that don't create compounding value."
  },
  {
    icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Reactive Over Predictive",
    description: "Most operations respond to problems after they happen. AI enables a shift toward predictive awareness — anticipating demand, risk, and bottlenecks before they materialise."
  }
];

export function AiSolutionsUntappedSection() {
  return (
    <section className="relative w-full py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#4F46E5 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      
      {/* Background Image Layer - Easily configurable by user */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/ai-untapped-bg.png')" }} // Placeholder URL
        ></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        {/* Title */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#4F46E5] leading-[1.2] tracking-tight">
            Most businesses are sitting on untapped efficiency and don't know it yet.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#3B32C4] to-[#251E91] text-white flex flex-col space-y-6 transition-all hover:scale-[1.03] hover:shadow-2xl overflow-hidden"
            >
              {/* Subtle background icon for aesthetic */}
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {card.icon}
              </div>

              <div className="flex-shrink-0">
                {card.icon}
              </div>
              
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed text-white/80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative p-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
            <div className="bg-[#020617] rounded-[1.8rem] p-10 md:p-14 text-center">
              <p className="font-body text-lg md:text-2xl text-white italic leading-relaxed">
                "The gap is rarely a lack of data or tools. It's the absence of a structured approach to turning operational friction into a solvable problem."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

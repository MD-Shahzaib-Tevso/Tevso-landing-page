import { Wrench, Maximize, Zap, Search } from "lucide-react";
import Image from "next/image";

const marketItems = [
  {
    icon: <Wrench className="w-6 h-6 text-[#3B32C4]" />,
    title: "Tools Are Commoditised",
    description: "AI platforms, automation tools, and LLMs are widely accessible. The competitive advantage now lies in how intelligently they are applied."
  },
  {
    icon: <Maximize className="w-6 h-6 text-[#3B32C4]" />,
    title: "Pilots Fail Without Structure",
    description: "Most AI pilots stall at proof-of-concept stage — not due to technology failure, but due to unclear objectives, poor change management, and no path to scale."
  },
  {
    icon: <Zap className="w-6 h-6 text-[#3B32C4]" />,
    title: "Context Matters More Than Tools",
    description: "Off-the-shelf solutions rarely fit operational reality. Effective AI is shaped to your data, your workflows, and your business constraints."
  },
  {
    icon: <Search className="w-6 h-6 text-[#3B32C4]" />,
    title: "The ROI Gap Is Real",
    description: "Many organisations invest in AI without a clear measurement framework. We build ROI tracking into every engagement from the outset."
  }
];

export function AiSolutionsMarketContextSection() {
  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden text-white">
      {/* Background Image Layer - Configure the URL here */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-market-bg.png" // Placeholder URL
          alt="Market Context Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent z-1" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <p className="font-body text-[15px] font-bold text-white/60 uppercase tracking-widest">
                Market Context
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight">
                The tools exist. The gap<br className="hidden md:block" /> is implementation.
              </h2>
            </div>
            
            <p className="font-body text-lg text-white/80 leading-relaxed">
              The AI tool landscape has matured rapidly. The bottleneck for most organisations 
              is no longer access to technology — it's the structured methodology to identify 
              the right use case, implement with rigour, and capture measurable value without disruption.
            </p>
          </div>

          {/* Right Cards Overlay */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {marketItems.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F1F5F9] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold text-[#020617]">
                      {item.title}
                    </h3>
                    <p className="font-body text-[14px] leading-relaxed text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

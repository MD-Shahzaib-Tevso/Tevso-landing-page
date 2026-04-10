import Image from "next/image";

export function AiSolutionsCTASection() {
  return (
    <section className="relative w-full bg-[#020617] overflow-hidden text-white">
      {/* Background with Globe Graphic */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-0">
        <Image
          src="/ai-cta-globe.png" // Placeholder URL for globe/earth graphic
          alt="Global Network"
          fill
          className="object-cover object-bottom opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]/80 z-1" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto pt-24 pb-16">
        {/* Main CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
          <p className="font-body text-[15px] font-bold text-white/60 uppercase tracking-widest">
            Begin Here
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Ready to find where AI<br className="hidden md:block" /> can work for you?
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every engagement begins with an honest conversation about your operations. 
            No hard sell. No generic pitch. Just a structured look at where 
            intelligence can make a genuine difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-sm bg-[#3B32C4] px-10 py-4 font-body text-[15px] font-bold text-white transition-all hover:bg-[#3B32C4]/90 active:scale-[0.98] shadow-lg">
              Request an AI Audit
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-sm border border-white/30 px-10 py-4 font-body text-[15px] font-bold text-white transition-all hover:bg-white/10 active:scale-[0.98]">
              Book a Discovery Call
            </button>
          </div>
        </div>

        {/* Informational Grid Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-white/10 pt-16">
          <div className="p-8 lg:p-12 space-y-4 lg:border-r border-white/10">
            <h3 className="font-heading text-xl font-bold text-white">
              AI Readiness Audit
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-white/60">
              A structured review of your operations, data, and processes — identifying 
              the highest-value AI opportunities.
            </p>
          </div>
          
          <div className="p-8 lg:p-12 space-y-4 lg:border-r border-white/10">
            <h3 className="font-heading text-xl font-bold text-white text-blue-400">
              Solution Discovery
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-white/60">
              A focused session to define the right approach, scope, and success 
              metrics for a specific challenge or domain.
            </p>
          </div>
          
          <div className="p-8 lg:p-12 space-y-4">
            <h3 className="font-heading text-xl font-bold text-white">
              Capability Consultation
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-white/60">
              An open conversation about what AI can realistically achieve in 
              your context — no obligation, no jargon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

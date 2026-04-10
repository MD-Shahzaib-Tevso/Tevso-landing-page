const steps = [
  { 
    id: "01", 
    title: "Select a project", 
    description: "Continua scale empowered metrics with cost effective innovation." 
  },
  { 
    id: "02", 
    title: "Project analysis", 
    description: "Continua scale empowered metrics with cost effective innovation." 
  },
  { 
    id: "03", 
    title: "Plan execute", 
    description: "Continua scale empowered metrics with cost effective innovation." 
  },
  { 
    id: "04", 
    title: "Deliver result", 
    description: "Continua scale empowered metrics with cost effective innovation." 
  },
];

export function ServicesProcessSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6">
        <h2 className="text-center font-heading text-4xl md:text-5xl font-bold text-[#3B32C4] mb-20 tracking-tight">
          How to work it !
        </h2>

        <div className="relative">
          {/* Connecting SVG Curves (Desktop) */}
          <div className="absolute top-8 left-0 w-full hidden lg:block opacity-20 pointer-events-none">
            <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path d="M125 50 Q 250 10, 375 50 T 625 50 T 875 50" stroke="#3B32C4" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.id} className="relative group">
                {/* Step Marker */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-10 grid h-12 w-12 place-items-center rounded-full bg-[#3B32C4] font-heading text-lg font-bold text-white shadow-lg ring-4 ring-white transition-transform group-hover:scale-110">
                  {step.id}
                </div>
                
                {/* Step Card */}
                <div className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-8 pt-12 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <h3 className="font-heading text-2xl font-bold text-[#3B32C4] mb-4 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] leading-relaxed text-[#64748B] text-center lg:text-left">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

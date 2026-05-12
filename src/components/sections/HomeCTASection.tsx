"use client";

const steps = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "We start by understanding the product, workflow, business model, and actual problem.",
  },
  {
    number: "02",
    title: "Shape the solution",
    description:
      "We define a realistic approach covering features, architecture, integrations, and delivery priorities.",
  },
  {
    number: "03",
    title: "Deliver in phases",
    description:
      "We structure delivery so progress stays visible and priorities can adapt without losing momentum.",
  },
  {
    number: "04",
    title: "Communicate clearly",
    description:
      "Clients always know what is in progress, what is blocked, what is done, and what comes next.",
  },
  {
    number: "05",
    title: "Build with long-term thinking",
    description:
      "We create systems that remain stable, useful, and scalable as the business evolves.",
  },
];

export function HomeCTASection() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-14 md:py-16 lg:py-14">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 lg:px-6">
        {/* Heading */}
        <h2 className="text-center text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[34px] lg:text-[30px]">
          How we work
        </h2>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-5 lg:gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative min-h-[210px] w-full cursor-pointer rounded-[14px] border border-[#e5e5e5] bg-white p-5 text-[#333] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#3924e8] hover:text-white hover:shadow-lg sm:min-h-[230px] lg:min-h-[250px]"
            >
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                <span className="text-[22px] font-bold text-[#333] transition-colors duration-300 group-hover:text-white sm:text-[24px]">
                  {step.number}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3924e8] text-[18px] font-medium text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#3924e8] sm:h-10 sm:w-10">
                  →
                </div>
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-[16px] font-bold leading-snug transition-colors duration-300 group-hover:text-white sm:text-[17px] lg:text-[14px]">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-[14px] leading-[1.7] text-[#555] transition-colors duration-300 group-hover:text-white/90 sm:text-[15px] lg:text-[13px] lg:leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}
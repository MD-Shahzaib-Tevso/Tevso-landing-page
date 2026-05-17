"use client";

import Image from "next/image";

export function AiSolutionsScenariosSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3b22f4] py-12 md:py-16">
      {/* Right background subtle pattern */}
      <div className="absolute right-0 top-0 h-full w-[45%] opacity-15">
        <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border-35 border-white/20" />
        <div className="absolute right-10 top-10 h-[180px] w-[180px] rounded-full border-28 border-white/20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 sm:px-8 lg:flex-row lg:px-14">
        {/* Left laptop image */}
        <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[250px] lg:w-[500px]">
          <Image
            src="/Gemini.png"
            alt="AI laptop"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="max-w-[520px] text-center lg:text-left">
          <h2 className="mb-4 text-[28px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[32px] lg:text-[38px]">
            Ready to explore a use case?
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-white/75 sm:text-base">
            Tell us what you are trying to improve and we will figure out
            whether AI is the right lever and how to add it without disruption.
          </p>

          <button className="px-4 py-3 bg-white text-sm font-semibold text-[#352FE1] transition rounded-md hover:bg-white/90">
            Discuss an AI use case
          </button>
        </div>
      </div>
    </section>
  );
}
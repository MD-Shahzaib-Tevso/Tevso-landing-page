"use client";

import Image from "next/image";

export function AiSolutionsScenariosSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3b22f4] py-12 md:py-16">
      {/* Right background subtle pattern */}
      <div className="absolute right-0 top-0 h-full w-[45%] opacity-15">
        <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border-[35px] border-white/20" />
        <div className="absolute right-10 top-10 h-[180px] w-[180px] rounded-full border-[28px] border-white/20" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1100px] items-center justify-between gap-8 px-6 md:px-12">
        {/* Left laptop image */}
        <div className="relative hidden h-[250px] w-[230px] md:block">
          <Image
            src="/Gemini.png"
            alt="AI laptop"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="max-w-[520px] text-left">
          <h2 className="mb-4 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-white md:text-[32px]">
            Ready to explore a use case?
          </h2>

          <p className="mb-5 max-w-[500px] text-[12px] leading-relaxed text-white/75 md:text-[13px]">
            Tell us what you are trying to improve and we will figure out
            whether AI is the right lever and how to add it without disruption.
          </p>

          <button className="bg-white px-5 py-2 text-[11px] font-semibold text-[#3b22f4] shadow-sm transition hover:bg-white/90">
            Discuss an AI use case
          </button>
        </div>
      </div>
    </section>
  );
}
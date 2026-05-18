"use client";

import Image from "next/image";
import Link from "next/link";

export function AiSolutionsScenariosSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3b22f4] py-12 md:py-16">

      {/* Right background logo pattern */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-0 -translate-y-1/2 hidden lg:block">
        <Image
          src="/Tevso-white-logo 1.png"
          alt="Tevso background logo"
          width={300}
          height={500}
          className="h-80 w-auto md:h-105 lg:h-125"
        />
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

          <Link href="/contact" className="no-underline">
            <button className="px-4 py-3 bg-white text-sm font-semibold text-[#352FE1] transition rounded-md hover:bg-white/90 cursor-pointer">
              Discuss an AI use case
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
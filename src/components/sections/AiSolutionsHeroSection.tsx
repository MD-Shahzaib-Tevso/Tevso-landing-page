import Image from "next/image";

export function AiSolutionsHeroSection() {
  return (
    <section className="relative mt-[72px] min-h-[560px] w-full overflow-hidden bg-[#061b55] sm:mt-20 sm:min-h-[520px] lg:min-h-[420px]">
      {/* Background Image */}
      <Image
        src="/Rectangle-22229 1 (1).png"
        alt="AI Enablement Background"
        fill
        priority
        quality={100}
        className="z-0 object-cover object-center"
      />

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 z-[1] bg-[#020617]/55 sm:bg-[#020617]/35 lg:bg-[#020617]/20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#061b55]/65 via-[#061b55]/55 to-[#061b55]/85 sm:bg-gradient-to-r sm:from-[#061b55]/85 sm:via-[#061b55]/45 sm:to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[560px] w-full items-center justify-center px-5 py-16 sm:min-h-[520px] sm:justify-start sm:px-8 md:px-12 lg:min-h-[420px] lg:px-16 lg:py-12">
        <div className="w-full max-w-[520px] text-center sm:text-left lg:max-w-[460px]">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-white/90 sm:mb-4 sm:text-[13px]">
            AI Enablement
          </p>

          <h1 className="mx-auto mb-4 max-w-[420px] text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-white xs:text-[32px] sm:mx-0 sm:max-w-[520px] sm:text-[40px] md:text-[44px] lg:mb-5 lg:max-w-[420px] lg:text-[48px]">
            Add AI where it improves real systems
          </h1>

          <p className="mx-auto mb-7 max-w-[430px] text-[14px] leading-[1.7] text-white/90 sm:mx-0 sm:max-w-[460px] sm:text-[15px] lg:max-w-[430px] lg:leading-[1.45]">
            Tevso helps businesses introduce AI in practical, commercially
            useful ways without rebuilding everything from scratch.
          </p>

          <button className="inline-flex w-full max-w-[245px] items-center justify-center rounded-md bg-white px-5 py-3 text-[12px] font-semibold text-[#061b55] transition hover:bg-white/90 sm:w-auto sm:max-w-none lg:px-4 lg:py-2 lg:text-[11px]">
            Discuss an AI use case
          </button>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export function AiSolutionsHeroSection() {
  return (
    <section className="relative mt-[72px] h-[350px] w-full overflow-hidden bg-black sm:mt-20">
      {/* Background Image */}
      <Image
        src="/Rectangle-22229 2.png"
        alt="AI Enablement Background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Very Light Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Light Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Light Bottom Shade */}
      <div className="absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        <div className="ml-[36px] max-w-[430px] pt-[43px]">
          <p className="mb-[14px] font-['Inter'] text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]">
            AI ENABLEMENT
          </p>

          <h1 className="mb-[16px] max-w-[410px] font-['Lato'] text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.75)]">
            Add AI where it improves real systems
          </h1>

          <p className="mb-[15px] max-w-[405px] font-['Inter'] text-[13px] font-normal leading-[1.45] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Tevso helps businesses introduce AI in practical, commercially useful
            ways without rebuilding everything from scratch.
          </p>

          <button className="h-[29px] bg-white px-[10px] font-['Inter'] text-[10px] font-bold text-[#1d22c8] transition hover:bg-white/90">
            Discuss an AI use case
          </button>
        </div>
      </div>
    </section>
  );
}
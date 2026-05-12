import Image from "next/image";

export function CaseStudiesHeroSection() {
  return (
    <section className="relative mt-20 min-h-[377px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Rectangle-22229.png"
          alt="Case Studies Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* VERY LIGHT OVERLAY ONLY FOR TEXT READABILITY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* LIGHT LEFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-[377px] max-w-[1200px] flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row lg:py-20">
        {/* LEFT TEXT */}
        <div className="max-w-[550px] text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80 drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
            Case Studies
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] sm:text-4xl lg:text-5xl">
            Work that proves the approach
          </h1>

          <p className="mt-4 text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] sm:text-base">
            Six platforms built or improved across veterinary, property,
            utilities, logistics, e-commerce, and AI — each with a real business
            problem at the center.
          </p>

          <button className="mt-6 bg-white px-5 py-2 text-sm font-semibold text-[#0b1f5b] transition hover:bg-gray-200">
            Discuss an AI use case
          </button>
        </div>
      </div>
    </section>
  );
}
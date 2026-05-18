import Image from "next/image";

export function CaseStudiesHeroSection() {
  return (
    <section className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]">
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
        <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full">
        {/* LEFT TEXT */}
        <div className="flex flex-col h-full w-full gap-5 max-w-[660px] items-start p-14">
          {/* <p className="text-[22px] font-medium uppercase tracking-wider text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Case Studies
          </p> */}

          <h1 className="mt-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] sm:text-4xl lg:text-5xl">
            Work that proves the approach
          </h1>

          <p className="mt-5 texts-base leading-normal text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Six platforms built or improved aross veterinary, property,
            utilities, logistics, e-commerce, and AI — each with a real business
            problem at the center.
          </p>

          <button className="bg-white p-4 text-sm font-medium text-[#352FE1] transition rounded-md hover:bg-white/90">
            Discuss an AI use case
          </button>
        </div>
      </div>
    </section>
  );
}
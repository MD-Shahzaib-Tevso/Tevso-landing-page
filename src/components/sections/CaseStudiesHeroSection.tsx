import Image from "next/image";

export function CaseStudiesHeroSection() {
  return (
    <section className="relative mt-20 overflow-hidden bg-[#0b1f5b]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/techHero.jpg" // your background image
          alt="Case Studies Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f5b]/95 via-[#0b1f5b]/80 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row lg:py-20">
        
        {/* LEFT TEXT */}
        <div className="max-w-[550px] text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
            Case Studies
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Work that proves the approach
          </h1>

          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Six platforms built or improved across veterinary, utilities,
            logistics, e-commerce, and AI — each with a real business problem
            at the center.
          </p>

          <button className="mt-6 bg-white px-5 py-2 text-sm font-semibold text-[#0b1f5b] transition hover:bg-gray-200">
            Discuss an AI use case
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-[500px]">
          <Image
            src="/Rectangle-22229 1.png" // 👉 add your laptop image in public folder
            alt="Laptop AI"
            width={500}
            height={400}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

export function CaseStudiesDetailsHeroSection({ title }: { title: string }) {
  return (
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-[#020617]">
        <Image
          src="/case-study-hero-bg.png" // Placeholder URL for office background
          alt="Case Study Hero Background"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Gradients to blend with the bottom and top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617] opacity-80" />
      </div>

      <div className="relative z-10 w-full px-6 text-center -mt-16">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}

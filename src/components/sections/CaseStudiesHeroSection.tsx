import Image from "next/image";

export function CaseStudiesHeroSection() {
  return (
    <section className="relative mt-20 h-[300px] overflow-hidden sm:h-[400px]">
      <div className="absolute inset-0">
        <Image
          src="/techHero.jpg"
          alt="Case Studies Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative flex h-full items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          All case studies
        </h1>
      </div>
    </section>
  );
}

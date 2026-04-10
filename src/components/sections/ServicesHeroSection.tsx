import Image from "next/image";

export function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-hero-bg.png" // Placeholder URL, user will change this
          alt="Services Hero Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-1" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl md:text-7xl tracking-tight">
          Services
        </h1>
      </div>
    </section>
  );
}

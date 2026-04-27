import Image from "next/image";

export function ServiceDetailsHeroSection() {
  return (
    <section className="relative h-80 md:h-96 w-full overflow-hidden flex items-center justify-center">
      {/* Background image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/service-details-hero-bg.png" // Placeholder URL
          alt="Service Details Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 z-1" />
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <h1 className="font-heading text-5xl font-bold text-white md:text-7xl leading-tight tracking-tight">
          Service details
        </h1>
      </div>
    </section>
  );
}

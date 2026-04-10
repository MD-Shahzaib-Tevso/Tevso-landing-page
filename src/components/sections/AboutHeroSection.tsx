import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative h-[480px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-person.png"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center justify-center px-6">
        <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl md:text-7xl">
          About Us
        </h1>
      </div>
    </section>
  );
}


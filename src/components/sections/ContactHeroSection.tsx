import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section className="relative mt-20 h-[350px] overflow-hidden sm:h-[450px]">
      <div className="absolute inset-0">
        <Image
          src="/about-person.png"
          alt="Contact Us Background"
          fill
          className="object-cover object-top opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative flex h-full items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
          Contact Us
        </h1>
      </div>
    </section>
  );
}

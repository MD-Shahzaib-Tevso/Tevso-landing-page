import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section className="relative mt-[72px] h-[500px] w-full overflow-hidden bg-[#06272d] sm:mt-20">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Rectangle 2340 (5).png"
        alt="Contact Hero Background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-[#06242a]/15" />

      {/* LEFT LIGHT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05171d]/55 via-[#05171d]/25 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full w-full px-[38px] pt-[48px]">
        <div className="max-w-[560px] text-white">
          <p className="mb-[12px] font-['Inter'] text-[12px] font-medium uppercase leading-none tracking-[0.04em] text-white">
            CONTACT
          </p>

          <h1 className="max-w-[390px] font-['Lato'] text-[36px] font-semibold leading-[1.15] tracking-[0.2px] text-white">
            Let’s discuss what
            <br />
            your system needs
            <br />
            next
          </h1>

          <p className="mt-[21px] max-w-[590px] font-['Inter'] text-[13px] font-normal leading-[1.55] text-white">
            Whether you are building a new product, cleaning up an existing
            <br />
            platform, adding AI into workflows, or looking for reliable
            <br />
            technical partner, we would be glad to explore how Tevso can help.
          </p>
        </div>
      </div>
    </section>
  );
}
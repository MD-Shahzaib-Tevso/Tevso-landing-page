import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section className="relative mt-[72px] min-h-[520px] w-full overflow-hidden sm:mt-20 sm:min-h-[560px] lg:min-h-[570px]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 2340 (2).png"
          alt="Contact Hero Background"
          fill
          priority
          className="object-cover object-[68%_center] sm:object-[72%_center]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#121b2b]/65 sm:bg-[#121b2b]/55" />

        {/* RESPONSIVE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-[#111827]/60 to-[#111827]/85 sm:bg-gradient-to-r sm:from-[#111827]/95 sm:via-[#111827]/75 sm:to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1180px] items-center justify-center px-5 py-14 sm:min-h-[560px] sm:justify-start sm:px-8 md:px-10 lg:min-h-[570px] lg:px-6">
        <div className="mx-auto max-w-[520px] text-center text-white sm:mx-0 sm:text-left">
          <h1 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px] md:text-[48px] lg:leading-[1.08]">
            Let&apos;s discuss what
            <br />
            your system needs
            <br />
            next
          </h1>

          <p className="mx-auto mt-5 max-w-[500px] text-[14px] leading-[1.7] text-white/90 sm:mx-0 sm:mt-6 sm:text-[14px] md:text-[15px] lg:text-[14px] lg:leading-[1.55]">
            Whether you are building a new product, cleaning up an existing
            platform, adding AI into workflows, or looking for a reliable
            technical partner, we would be glad to explore how Tevso can help.
          </p>
        </div>
      </div>
    </section>
  );
}
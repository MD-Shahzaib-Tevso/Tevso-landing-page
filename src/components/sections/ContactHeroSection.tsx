import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]">
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
      <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full">
        {/* LEFT TEXT */}
        <div className="flex flex-col h-full w-full gap-5 max-w-[660px] items-start p-14">
          {/* <p className="text-[22px] font-medium uppercase tracking-wider text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            CONTACT
          </p> */}

          <h1 className="mt-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] sm:text-4xl lg:text-5xl">
            Let’s discuss what
            <br />
            your system needs
            <br />
            next
          </h1>

          <p className="mt-5 texts-base leading-normal text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
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
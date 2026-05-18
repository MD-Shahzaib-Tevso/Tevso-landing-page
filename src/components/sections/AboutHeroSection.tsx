import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 2340 (7).png"
          alt="About Tevso"
          fill
          className="object-cover object-center"
          priority
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/25 sm:bg-black/20" />

        {/* RESPONSIVE LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/20 to-black/40 sm:bg-linear-to-r sm:from-black/45 sm:via-black/20 sm:to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full">
        {/* LEFT TEXT */}
        <div className="flex flex-col h-full w-full gap-5 max-w-[660px] items-start p-14">
          {/* <p className="text-[22px] font-medium uppercase tracking-wider text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            About
          </p> */}

          <h1 className="mt-4 text-[30px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[42px] md:text-[50px] lg:text-[58px]">
            A technical partner
            <br />
            built for long-term
            <br />
            product growth
          </h1>

          <p className="mt-5 texts-base leading-normal text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] lg:max-w-[500px]">
            Tevso helps startups and growing businesses build, improve, and
            scale digital products with stronger technical foundations.
          </p>
        </div>
      </div>
    </section>
  );
}
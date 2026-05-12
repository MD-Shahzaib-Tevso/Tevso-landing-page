import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="relative mt-[72px] min-h-[750px] w-full overflow-hidden sm:mt-20 sm:min-h-[540px] lg:min-h-[520px]">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40 sm:bg-gradient-to-r sm:from-black/45 sm:via-black/20 sm:to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1180px] items-center px-5 py-14 sm:min-h-[540px] sm:px-8 md:px-10 lg:min-h-[520px] lg:px-6">
        <div className="mx-auto max-w-[620px] text-center text-white sm:mx-0 sm:text-left">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/85 sm:text-[13px]">
            About
          </p>

          <h1 className="mt-4 text-[30px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[42px] md:text-[50px] lg:text-[58px]">
            A technical partner
            <br />
            built for long-term
            <br />
            product growth
          </h1>

          <p className="mx-auto mt-6 max-w-[470px] text-[14px] leading-[1.7] text-white/90 sm:mx-0 sm:mt-7 sm:text-[15px]">
            Tevso helps startups and growing businesses build, improve, and
            scale digital products with stronger technical foundations.
          </p>
        </div>
      </div>
    </section>
  );
}
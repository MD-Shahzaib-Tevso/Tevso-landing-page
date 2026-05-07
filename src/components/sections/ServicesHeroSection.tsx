import Image from "next/image";

export function ServicesHeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden py-24 md:py-32">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 2340.png" // 👉 add your background image
          alt="Solutions Background"
          fill
          priority
          className="object-cover"
        />
        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#020c1b]/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">
        
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/70">
          Solutions
        </p>

        <h1 className="mt-4 max-w-[700px] text-[36px] font-bold leading-[1.2] text-white sm:text-[48px] md:text-[56px]">
          Solutions built around <br />
          business problems, not <br />
          generic service lists
        </h1>

        <p className="mt-5 max-w-[520px] text-[13px] leading-[1.5] text-white/80">
          Every engagement starts with understanding the real problem — then we
          define the right technical approach to solve it.
        </p>

        <button className="mt-6 bg-white px-5 py-2.5 text-[12px] font-semibold text-[#0a0f2c] hover:bg-gray-200 transition">
          Talk to Tevso
        </button>

      </div>
    </section>
  );
}
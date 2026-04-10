import Image from "next/image";

export function HomeFeatureShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#2c28d8] py-24 text-white">
      {/* Abstract Pixelated/Blocky Patterns on Right Side */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.07] pointer-events-none select-none">
        <div className="absolute right-0 top-1/4 h-32 w-32 bg-white" />
        <div className="absolute right-32 top-[calc(25%+128px)] h-32 w-32 bg-white" />
        <div className="absolute right-0 top-[calc(25%+256px)] h-48 w-48 bg-white" />
        <div className="absolute right-48 top-[calc(25%+384px)] h-32 w-32 bg-white" />
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-20 px-6 md:px-12 lg:px-16 lg:grid-cols-2">

        {/* Left: Stacked Laptops Illustration */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md lg:max-w-xl">


            {/* Top Laptop (Main Dashboard) */}
            <div className="relative z-20 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/laptop.png"
                alt="Main Feature Showcase Dashboard"
                width={750}
                height={550}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Subtle glow behind the laptops */}

          </div>
        </div>

        {/* Right: Content */}
        <div className="max-w-2xl space-y-10 text-left">
          <div className="space-y-4">
            <p className="font-['Raleway'] font-bold text-[20px] leading-[100%] tracking-[0%] align-middle uppercase text-white/90">
              The New Era of Tevso
            </p>
            <h2 className=" text-white font-['Raleway'] font-bold text-[44px] leading-[100%] tracking-[0px] align-middle">
              Turning complex data into actionable insights
            </h2>
          </div>

          <div className="space-y-8">
            <p className="font-['Lato'] font-normal text-[16px] leading-[100%] tracking-[0%] align-middle text-blue-50/90">
              "Streamlining data through intuitive design. This layout uses a spacious, card-based system and clear KPI hierarchy to make complex analytics easy to navigate and act upon instantly."
            </p>

            <div>
              <button className="theme-btn">
                Discuss Your SaaS
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
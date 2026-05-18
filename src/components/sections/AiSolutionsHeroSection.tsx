import Image from "next/image";
import Link from "next/link";

export function AiSolutionsHeroSection() {
  return (
    <section className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]">
      {/* Background Image */}
      <Image
        src="/Rectangle-22229 2.png"
        alt="AI Enablement Background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Very Light Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Light Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Light Bottom Shade */}
      <div className="absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full">
        <div className="flex flex-col h-full w-full gap-5 items-start p-14">
          <p className="text-[22px] font-medium uppercase tracking-wider text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            AI ENABLEMENT
          </p>

          <h2 className="max-w-[700px] text-[36px] font-normal leading-normal text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)] sm:text-[48px] md:text-[56px]">
            Add AI where it improves real systems
          </h2>

          <p className="max-w-[520px] text-[18px] leading-normal text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Tevso helps businesses introduce AI in practical, commercially useful
            ways without rebuilding everything from scratch.
          </p>

          <Link href="/contact" className="no-underline">
            <button className="bg-white p-4 text-sm font-semibold text-[#352FE1] transition rounded-md hover:bg-white/90 cursor-pointer">
              Discuss an AI use case
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
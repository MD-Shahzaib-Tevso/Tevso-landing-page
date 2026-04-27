import Image from "next/image";
import { MoveRight } from "lucide-react";

export function AiSolutionsHeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden pt-32 pb-20 mt-20 flex items-center bg-[#020617]">
      {/* Background Image Layer - Easily configurable by changing the src */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-hero-bg.png" // Placeholder URL, user will change this
          alt="AI Solutions Hero Background"
          fill
          priority
          className="object-cover object-right md:object-center opacity-70"
          quality={100}
        />
        {/* Modern AI Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-[#020617]/20 z-1" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-3xl space-y-8 text-left">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight">
              Smarter Operations.<br />
              Better Decisions.<br />
              Real Results.
            </h1>

            <p className="font-body text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl">
              We help organisation embed intelligence where it matters most not as a trend, but as a structured capability that improves how your business thinks, operates, and scales.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 font-body text-[15px] font-bold text-[#020617] transition-all hover:bg-white/90 active:scale-[0.98]">
                Request an AI Audit
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 group font-body text-[15px] font-bold text-white transition-all hover:opacity-80">
                Request an AI Audit
                <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Content - Laptop/AI Graphic Placeholder */}
          <div className="hidden lg:block relative h-[500px]">
            <Image
              src="/ai-laptop-graphic.png" // Placeholder URL
              alt="AI Graphic"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

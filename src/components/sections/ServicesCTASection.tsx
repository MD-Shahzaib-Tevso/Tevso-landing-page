import Image from "next/image";

export function ServicesCTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-cta-bg.png" // Placeholder URL, user will change this
          alt="CTA Background"
          fill
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#020617]/70 z-1" />
      </div>

      {/* Decorative Diagonal Overlays */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-full w-1/2 -skew-x-12 bg-[#3B32C4]/40" />
        <div className="absolute -right-1/4 top-0 h-full w-1/2 skew-x-12 bg-[#3B32C4]/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center text-white">
        <h2 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl tracking-tight">
          Need any kind of it solution for your business?
        </h2>
        
        <div className="mt-12 flex justify-center">
          <button className="rounded-md bg-[#3B32C4] px-10 py-4 font-body text-[15px] font-bold text-white shadow-xl transition-all hover:bg-[#3B32C4]/90 active:scale-[0.98]">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

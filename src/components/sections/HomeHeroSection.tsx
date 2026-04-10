import Image from "next/image";

export function HomeHeroSection() {
  return (
    <section className="hero-section relative min-h-[calc(100vh-114px)] overflow-hidden pt-32 pb-20 mt-[114px]">
      {/* High-Performance Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Tevso Hero Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 px-6 md:px-12 lg:px-16 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="hero-content max-w-2xl space-y-8 text-left">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl tracking-tight">
            Build & Scale Your SaaS From MVP to Investor Ready Infrastructure.
          </h1>

          <div className="space-y-6">
            <p className="font-body text-lg leading-relaxed text-white">
              Tevso is a SaaS Growth Engineering Partner helping founders design, build, and scale products without technical debt or scalability risks.
            </p>
            <p className="font-body text-lg leading-relaxed text-white">
              We combine engineering excellence, DevOps mastery, and a managed talent network to deliver end-to-end technology solutions — from idea validation to post launch growth.
            </p>
          </div>

          <div>
            <button className="theme-btn">
              Discuss Your SaaS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

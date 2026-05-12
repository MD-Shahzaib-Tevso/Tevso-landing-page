import Image from "next/image";

export function AboutIntroSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-5 sm:px-6 md:px-10 lg:h-[380px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-12">
        
        {/* LEFT CONTENT */}
        <div className="order-2 flex w-full flex-col justify-between text-center lg:order-1 lg:w-[48%] lg:text-left">
          <div>
            <h2 className="text-[28px] font-bold leading-tight text-[#333333] sm:text-[34px] md:text-[38px]">
              About Us
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.65] text-[#333333] sm:text-[15px] md:text-[16px] lg:mx-0">
              Tevso helps startups and growing businesses build, improve, and
              scale digital products with stronger technical foundations. We work
              across SaaS, internal systems, AI-enabled workflows, integrations,
              and modernization projects, bringing together technical execution,
              architecture thinking, and commercial awareness.
            </p>

            <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.65] text-[#333333] sm:text-[15px] md:text-[16px] lg:mx-0">
              We are best suited to teams that value clear communication,
              practical thinking, hands-on ownership, and systems built for
              long-term usefulness rather than short-term patchwork.
            </p>

            <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.65] text-[#333333] sm:text-[15px] md:text-[16px] lg:mx-0">
              That positioning is already present in your profile and should stay
              central.
            </p>
          </div>

          <div className="mt-7 flex justify-center lg:mt-0 lg:justify-start">
            <button className="w-full max-w-[240px] rounded-md bg-[#2d22e8] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#1d16bd] sm:w-auto sm:max-w-none">
              Discuss an AI use case
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 w-full lg:order-2 lg:w-[48%]">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[14px] shadow-md sm:h-[340px] md:h-[360px] lg:h-full">
            <Image
              src="/Rectangle 22357 (7).png"
              alt="About Tevso Team"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
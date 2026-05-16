import Image from "next/image";

export function AboutIntroSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-8 sm:px-14 lg:flex-row lg:justify-between lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[46%]">
          <h2 className="text-[34px] font-bold leading-tight text-[#333333]">
            About Us
          </h2>

          <p className="mt-4 lg:max-w-117.5 text-sm leading-[1.7] text-[#444444]">
            Tevso helps startups and growing businesses build, improve, and
            scale digital products with stronger technical foundations. We work
            across SaaS, internal systems, AI-enabled workflows, integrations,
            and modernization projects, bringing together technical execution,
            architecture thinking, and commercial awareness.
          </p>

          <p className="mt-4 lg:max-w-117.5 text-sm leading-[1.7] text-[#444444]">
            We are best suited to teams that value clear communication,
            practical thinking, hands-on ownership, and systems built for
            long-term usefulness rather than short-term patchwork.
          </p>

          <p className="mt-4 lg:max-w-117.5 text-sm leading-[1.7] text-[#444444]">
            That positioning is already present in your profile and should stay
            central.
          </p>

          <button className="mt-4 rounded-sm bg-[#2d22e8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f17b8]">
            Discuss an AI use case
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-auto">
          <div className="relative h-62.5 w-full overflow-hidden rounded-xl sm:h-80 lg:h-97.5 lg:w-107.5">
            <Image
              src="/Rectangle 22357 (7).png"
              alt="About Tevso Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
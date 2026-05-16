import Image from "next/image";

export function AboutIntroSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col justify-between lg:w-[46%]">
          <div>
            <h2 className="text-[34px] font-bold leading-tight text-[#333333]">
              About Us
            </h2>

            <p className="mt-5 lg:max-w-117.5 text-sm leading-[1.7] text-[#444444]">
              Tevso helps startups and growing businesses build, improve, and
              scale digital products with stronger technical foundations. We work
              across SaaS, internal systems, AI-enabled workflows, integrations,
              and modernization projects, bringing together technical execution,
              architecture thinking, and commercial awareness.
            </p>

            <p className="mt-6 lg:max-w-117.5 text-sm leading-[1.7] text-[#444444]">
              We are best suited to teams that value clear communication,
              practical thinking, hands-on ownership, and systems built for
              long-term usefulness rather than short-term patchwork.
            </p>

            <p className="mt-6 lg:max-w-117.5 text-sm leading-[1.7] text-[#444444]">
              That positioning is already present in your profile and should stay
              central.
            </p>
          </div>

          <button className="mt-8 w-fit rounded-sm bg-[#2d22e8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f17b8]">
            Discuss an AI use case
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-107.5">
          <div className="relative h-62.5 w-full overflow-hidden rounded-xl sm:h-80 lg:h-full">
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
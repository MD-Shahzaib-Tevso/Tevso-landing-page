"use client";

import Image from "next/image";

const supportCards = [
  {
    icon: "/Group (4).png",
    title: "Build stronger SaaS products",
    description:
      "From MVPs to mature platforms, we structure, build, and scale software with long-term maintainability in mind.",
  },
  {
    icon: "/Group (4).png",
    title: "Fix messy systems and workflows",
    description:
      "We turn manual, fragmented operations into structured digital workflows that improve speed, visibility, and control.",
  },
  {
    icon: "/Group (4).png",
    title: "Strengthen architecture and backend foundations",
    description:
      "We design reliable backend systems, APIs, and technical foundations that support scale, security, and future growth.",
  },
  {
    icon: "/Group (4).png",
    title: "Introduce AI where it adds real value",
    description:
      "We help businesses add AI into existing systems for automation, internal productivity, and operational efficiency.",
  },
  {
    icon: "/Group (4).png",
    title: "Modernize legacy platforms",
    description:
      "We improve and extend older systems without forcing unnecessary rebuilds or disrupting daily operations.",
  },
  {
    icon: "/Group (4).png",
    title: "Provide technical delivery capacity",
    description:
      "Whether you need a dedicated resource or retained support, we bring reliable technical execution with accountability.",
  },
];

export function HomeCaseStudiesSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-14 md:py-16 lg:py-10">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 md:px-10 lg:px-6">
        <h2 className="mx-auto max-w-[760px] text-center text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[34px] lg:text-[28px]">
          Practical technical support for systems that matter
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mt-9 lg:grid-cols-3 lg:gap-8">
          {supportCards.map((card) => (
            <article
              key={card.title}
              className="group min-h-[180px] cursor-pointer rounded-[12px] border border-[#e5e5e5] bg-white p-5 text-left text-[#333] shadow-[0_4px_12px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#3924e8] hover:text-white hover:shadow-lg sm:min-h-[200px] md:p-6 lg:min-h-[145px] lg:p-5"
            >
              <div className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-[#3924e8] transition-all duration-300 group-hover:bg-white sm:h-[42px] sm:w-[42px] lg:h-[34px] lg:w-[34px]">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain transition-all duration-300 group-hover:[filter:invert(20%)_sepia(95%)_saturate(3972%)_hue-rotate(246deg)_brightness(92%)_contrast(101%)]"
                />
              </div>

              <h3 className="text-[15px] font-bold leading-snug transition-colors duration-300 sm:text-[16px] lg:text-[14px]">
                {card.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.7] text-[#333] transition-colors duration-300 group-hover:text-white/90 sm:text-[14px] lg:text-[13px] lg:leading-[1.6]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-8">
          <button className="w-full max-w-[240px] rounded-md bg-[#3924e8] px-5 py-3 text-[12px] font-medium text-white transition hover:bg-[#2f1fd0] sm:w-auto sm:max-w-none sm:text-[13px] lg:text-[11px]">
            Plan Your Next Build
          </button>
        </div>
      </div>
    </section>
  );
}
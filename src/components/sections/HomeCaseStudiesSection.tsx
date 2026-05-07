"use client";

import { useState } from "react";

const supportCards = [
  {
    icon: "☁️",
    title: "Build stronger SaaS products",
    description:
      "From MVPs to mature platforms, we structure, build, and scale software with long-term maintainability in mind.",
  },
  {
    icon: "⚙️",
    title: "Fix messy systems and workflows",
    description:
      "We turn manual, fragmented operations into structured digital workflows that improve speed, visibility, and control.",
  },
  {
    icon: "🏗️",
    title: "Strengthen architecture and backend foundations",
    description:
      "We design reliable backend systems, APIs, and technical foundations that support scale, security, and future growth.",
  },
  {
    icon: "🤖",
    title: "Introduce AI where it adds real value",
    description:
      "We help businesses add AI into existing systems for automation, internal productivity, and operational efficiency.",
  },
  {
    icon: "🏆",
    title: "Modernize legacy platforms",
    description:
      "We improve and extend older systems without forcing unnecessary rebuilds or disrupting daily operations.",
  },
  {
    icon: "🎯",
    title: "Provide technical delivery capacity",
    description:
      "Whether you need a dedicated resource or retained support, we bring reliable technical execution with accountability.",
  },
];

export function HomeCaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-14 md:py-16 lg:py-10">
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 md:px-10 lg:px-6">
        <h2 className="mx-auto max-w-[760px] text-center text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[34px] lg:text-[28px]">
          Practical technical support for systems that matter
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mt-9 lg:grid-cols-3 lg:gap-8">
          {supportCards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={card.title}
                onClick={() => setActiveIndex(index)}
                className={`min-h-[180px] cursor-pointer rounded-[12px] border p-5 text-left shadow-[0_4px_12px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 sm:min-h-[200px] md:p-6 lg:min-h-[145px] lg:p-5 ${
                  isActive
                    ? "border-transparent bg-[#3924e8] text-white"
                    : "border-[#e5e5e5] bg-white text-[#333] hover:shadow-lg"
                }`}
              >
                {/* ICON */}
                <div
                  className={`mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-[8px] text-[18px] sm:h-[42px] sm:w-[42px] sm:text-[20px] lg:h-[34px] lg:w-[34px] lg:text-[18px] ${
                    isActive
                      ? "bg-white text-[#3924e8]"
                      : "bg-[#3924e8] text-white"
                  }`}
                >
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-[15px] font-bold leading-snug sm:text-[16px] lg:text-[14px]">
                  {card.title}
                </h3>

                {/* DESC */}
                <p
                  className={`mt-3 text-[13px] leading-[1.7] sm:text-[14px] lg:text-[13px] lg:leading-[1.6] ${
                    isActive ? "text-white/90" : "text-[#333]"
                  }`}
                >
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-8">
          <button className="w-full max-w-[240px] rounded-md bg-[#3924e8] px-5 py-3 text-[12px] font-medium text-white transition hover:bg-[#2f1fd0] sm:w-auto sm:max-w-none sm:text-[13px] lg:text-[11px]">
            Plan Your Next Build
          </button>
        </div>
      </div>
    </section>
  );
}
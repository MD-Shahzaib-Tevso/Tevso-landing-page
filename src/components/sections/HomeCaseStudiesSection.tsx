"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const supportCards = [
  {
    icon: "/technical-support/support1.png",
    title: "Build stronger SaaS products",
    description:
      "From MVPs to mature platforms, we structure, build, and scale software with long-term maintainability in mind.",
  },
  {
    icon: "/technical-support/support2.png",
    title: "Fix messy systems and workflows",
    description:
      "We turn manual, fragmented operations into structured digital workflows that improve speed, visibility, and control.",
  },
  {
    icon: "/technical-support/support3.png",
    title: "Strengthen architecture and backend foundations",
    description:
      "We design reliable backend systems, APIs, and technical foundations that support scale, security, and future growth.",
  },
  {
    icon: "/technical-support/support4.png",
    title: "Introduce AI where it adds real value",
    description:
      "We help businesses add AI into existing systems for automation, internal productivity, and operational efficiency.",
  },
  {
    icon: "/technical-support/support5.png",
    title: "Modernize legacy platforms",
    description:
      "We improve and extend older systems without forcing unnecessary rebuilds or disrupting daily operations.",
  },
  {
    icon: "/technical-support/support6.png",
    title: "Provide technical delivery capacity",
    description:
      "Whether you need a dedicated resource or retained support, we bring reliable technical execution with accountability.",
  },
];

function SupportCard({ card }: { card: (typeof supportCards)[0] }) {
  return (
    <article className="h-80 sm:h-auto group min-h-[250px] cursor-pointer rounded-2xl border border-[#e5e5e5] bg-white p-6 text-left text-[#333] shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#3924e8] hover:text-white hover:shadow-xl">
      <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#3924e8] transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
        <Image
          src={card.icon}
          alt={card.title}
          width={28}
          height={28}
          className="h-[28px] w-[28px] object-contain transition-all duration-300 brightness-2000 group-hover:brightness-105"
        />
      </div>

      <h3 className="text-[20px] font-semibold leading-tight transition-colors duration-300">
        {card.title}
      </h3>

      <p className="mt-4 text-[15px] leading-[1.7] text-[#333] transition-colors duration-300 group-hover:text-white/90">
        {card.description}
      </p>
    </article>
  );
}

export function HomeCaseStudiesSection() {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="mx-auto w-full max-w-7xl px-8 sm:px-14">
        <h2 className="mx-auto max-w-[760px] text-center text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[34px] lg:text-[42px]">
          Practical technical support for systems that matter
        </h2>

        {/* Mobile slider only */}
        <div className="mt-8 block sm:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            centeredSlides
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            className="[&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-6! [&_.swiper-pagination-bullet-active]:bg-[#3924e8]!"
          >
            {supportCards.map((card) => (
              <SwiperSlide key={card.title}>
                <SupportCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet/Desktop Grid */}
        <div className="mt-8 hidden grid-cols-2 gap-6 sm:grid md:mt-10 lg:grid-cols-3 lg:gap-8">
          {supportCards.map((card) => (
            <SupportCard key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="no-underline">
            <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0] cursor-pointer">
              Plan Your Next Build
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
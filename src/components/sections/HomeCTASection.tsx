"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const steps = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "We start by understanding the product, workflow, business model, and actual problem.",
  },
  {
    number: "02",
    title: "Shape the solution",
    description:
      "We define a realistic approach covering features, architecture, integrations, and delivery priorities.",
  },
  {
    number: "03",
    title: "Deliver in phases",
    description:
      "We structure delivery so progress stays visible and priorities can adapt without losing momentum.",
  },
  {
    number: "04",
    title: "Communicate clearly",
    description:
      "Clients always know what is in progress, what is blocked, what is done, and what comes next.",
  },
  {
    number: "05",
    title: "Build with long-term thinking",
    description:
      "We create systems that remain stable, useful, and scalable as the business evolves.",
  },
];

function StepCard({ step }: { step: (typeof steps)[0] }) {
  return (
    <div className="group relative min-h-[250px] w-full cursor-pointer rounded-2xl border border-[#e5e5e5] bg-white p-6 text-[#333] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[#3924e8] hover:text-white hover:shadow-lg">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span className="text-[24px] font-bold transition-colors duration-300 group-hover:text-white">
          {step.number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3924e8] text-[18px] font-medium text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#3924e8]">
          →
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[18px] font-bold leading-snug transition-colors duration-300 group-hover:text-white">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[15px] leading-[1.7] text-[#555] transition-colors duration-300 group-hover:text-white/90">
        {step.description}
      </p>
    </div>
  );
}

export function HomeCTASection() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-8 sm:px-14">
        {/* Heading */}
        <h2 className="text-center text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[34px] lg:text-[42px]">
          How we work
        </h2>

        {/* Mobile Slider */}
        <div className="mt-8 block sm:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="[&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-6! [&_.swiper-pagination-bullet-active]:bg-[#3924e8]!"
          >
            {steps.map((step) => (
              <SwiperSlide key={step.number}>
                <StepCard step={step} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet/Desktop Grid */}
        <div className="mt-8 hidden grid-cols-2 gap-6 sm:grid md:mt-10 lg:grid-cols-5 lg:gap-5">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
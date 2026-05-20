"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CaseStudiesHeroSection } from "@/components/sections/CaseStudiesHeroSection";
import { FallbackImage } from "@/components/shared/FallbackImage";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { CASE_STUDIES } from "./caseStudies";

const CaseStudyCard = ({
  title,
  slug,
  image,
  alt,
  description,
  challenge,
  approach,
  reverse,
}: {
  title: string;
  slug: string;
  image: string;
  alt: string;
  description: string;
  challenge: string;
  approach: string;
  reverse: boolean;
}) => {
  return (
    <section className="bg-white py-5">
      <div className="mx-auto w-full max-w-7xl px-8 sm:px-14">
        <div className="flex w-full flex-col overflow-hidden rounded-[26px] bg-linear-to-r from-[#eeeeee] via-[#f4f4f4] to-[#d7d4ff] px-6 py-7 lg:flex-row lg:items-center lg:px-8">

          {/* LEFT IMAGE */}
          {!reverse && (
            <div className="flex w-full justify-center lg:w-[52%] lg:justify-start">
              <FallbackImage
                src={image}
                alt={alt}
                fallbackText={title}
                width={560}
                height={350}
                className="h-87.5 w-full rounded-3xl object-cover lg:h-auto lg:max-w-135 lg:object-contain"
                priority
              />
            </div>
          )}

          {/* RIGHT CONTENT */}
          <div className={`${!reverse ? ("mt-8 w-full lg:mt-0 lg:w-[48%] lg:pl-7") : ("w-full lg:w-[50%]")}`}>
            <h2 className="lg:max-w-115 text-[28px] font-bold leading-[1.05] text-[#2417ff] sm:text-[34px]">
              {title}
            </h2>

            <p className="mt-4 lg:max-w-130 text-[12px] leading-[1.35] text-[#2f2f2f]">
              {description}
            </p>

            <div className="mt-4">
              <h3 className="text-[12px] font-bold text-[#2417ff]">
                Client challenge
              </h3>
              <p className="mt-1 lg:max-w-130 text-[12px] leading-[1.35] text-[#2f2f2f]">
                {challenge}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-[12px] font-bold text-[#2417ff]">
                Product design approach
              </h3>
              <p className="mt-1 lg:max-w-130 text-[12px] leading-[1.35] text-[#2f2f2f]">
                {approach}
              </p>
            </div>

            <Link className="no-underline" href={`/case-studies/${slug}`}>
              <button className="mt-5 rounded-md bg-[#2417ff] px-5 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#1208d8] cursor-pointer">
                View Case Study
              </button>
            </Link>
          </div>

          {reverse && (
            <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-[50%] lg:justify-end">
              <FallbackImage
                src={image}
                alt={alt}
                fallbackText={title}
                width={560}
                height={350}
                className="h-87.5 w-full rounded-md object-cover lg:h-auto lg:max-w-135 lg:object-contain"
                priority
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <CaseStudiesHeroSection />
      <div className="my-10">

        {/* MOBILE */}
        <section className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            loop
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="[&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-6! [&_.swiper-pagination-bullet-active]:bg-[#3924e8]!"
          >
            {CASE_STUDIES.map((item, i) => (
              <SwiperSlide key={i}>
                <CaseStudyCard
                  {...item}
                  reverse={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* DESKTOP */}
        <div className="hidden md:block">
          {CASE_STUDIES.map((item, i) => (
            <CaseStudyCard
              key={i}
              {...item}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
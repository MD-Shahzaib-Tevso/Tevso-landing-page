"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CaseStudiesHeroSection } from "@/components/sections/CaseStudiesHeroSection";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { CASE_STUDIES } from "./caseStudies";

// const CASE_STUDIES = [
//   {
//     title: "24/7 Digital Veterinary Care Platform",
//     slug: "digital-veterinary-care-platform",
//     image: "/5 1.png",
//     alt: "24/7 Digital Veterinary Care Platform",
//     description:
//       "Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure. We developed a white label digital platform that allows clinics to provide round the clock virtual consultations under their own brand, connecting pet parents with licensed veterinarians seamlessly.",
//     challenge:
//       "Clinics could not scale consultation availability without hiring more staff or building costly technology. They also lacked a unified system for scheduling, payments, and emergency care.",
//     approach:
//       "Simple, intuitive, and trust-building experiences for pet parents. Clinics get full operational control through branded dashboards with insights and metrics for decision making.",
//   },
//   {
//     title: "Online Pet Pharmacy Platform",
//     slug: "online-pet-pharmacy-platform",
//     image: "/4 1.png",
//     alt: "Online Pet Pharmacy Platform",
//     description:
//       "Veterinary businesses needed a scalable platform to sell medications online while ensuring compliance. We built a white label pharmacy platform that manages OTC and prescription medications, logistics, payments, and regulatory workflows.",
//     challenge:
//       "Online pharmacy operations are complex due to compliance, tax handling, courier integration, and order automation. Many clinics lacked the technical capability to manage these efficiently.",
//     approach:
//       "Frictionless checkout experience, prescription upload and validation, real-time order tracking, and pharmacy dashboards for operational insights.",
//   },
//   {
//     title: "Tenant Referencing and Verification Platform",
//     slug: "tenant-referencing-and-verification-platform",
//     image: "/1 9.png",
//     alt: "Tenant Referencing and Verification Platform",
//     description:
//       "A platform automating tenant, guarantor, and property verification, streamlining compliance and referencing workflows for letting agents.",
//     challenge:
//       " Manual verification caused delays, errors, and compliance risks. Agents also relied on process applications quickly while ensuring credit and AML checks were accurate.",
//     approach:
//       "GuiGuided submission flows for applicants and real-time dashboards for agents. Transparent status tracking enhances user experience.",
//   },
//   {
//     title: "Shipping and Clearing Platform",
//     slug: "shipping-and-clearing-platform",
//     image: "/2 5.png",
//     alt: "Shipping and Clearing Platform",
//     description:
//       "A comprehensive platform centralizing shipping, clearing, and logistics         workflows across multiple regions.",
//     challenge:
//       "FFragmented operations and lack of real-time visibility caused delays and financial errors.",
//     approach:
//       "Workflow-based interface, financial dashboards, and real-time visibility for all operations.",
//   },
//   {
//     title: "AI Marketing Automation Platform",
//     slug: "ai-marketing-automation-platform",
//     image: "/3 1.png",
//     alt: "AI Marketing Automation Platform",
//     description:
//       "An AI-powered platform generating personalized campaigns from user behavior and engagement data, increasing conversions and revenue.",
//     challenge:
//       "Traditional marketing lacked personalization, required manual effort, and was difficult to scale.",
//     approach:
//       "Dynamic content generation with intuitive campaign builder, personalized experience per user segment, cost control for AI usage.",
//   },
// ];

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
              <Image
                src={image}
                alt={alt}
                width={560}
                height={350}
                className="lg:h-auto w-full h-87.5 lg:max-w-135 rounded-md object-cover lg:object-contain"
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
              <Image
                src={image}
                alt={alt}
                width={560}
                height={360}
                className="lg:h-auto w-full h-87.5 lg:max-w-135 rounded-md object-cover lg:object-contain"
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
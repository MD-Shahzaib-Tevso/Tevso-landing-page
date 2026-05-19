"use client";
import Image from "next/image";
import {
  Briefcase,
  Workflow,
  MessageCircleMore,
  Headset,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const cards = [
  {
    icon: <Briefcase className="h-5 w-5 text-white" />,
    title: "Internal productivity",
    description:
      "Summarization, classification, triage, and drafting — built into existing tools rather than bolted on as separate products.",
  },
  {
    icon: <Workflow className="h-5 w-5 text-white" />,
    title: "Workflow automation",
    description:
      "Replace manual decision trees in existing workflows with AI-assisted routing, flagging, or completion — without rebuilding the whole system.",
  },
  {
    icon: <MessageCircleMore className="h-5 w-5 text-white" />,
    title: "Communication and follow-ups",
    description:
      "Personalized communication at scale — triggered by real signals from your data, not generic scheduling.",
  },
  {
    icon: <Headset className="h-5 w-5 text-white" />,
    title: "Intelligent support operations",
    description:
      "First-line resolution, context-aware escalation, and structured ticket handling that reduces load without removing human judgment.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-white" />,
    title: "Personalization inside existing products",
    description:
      "Add personalized recommendations, surfacing, or responses to existing SaaS products without a full rebuild.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-white" />,
    title: "Data-assisted decision workflows",
    description:
      "Surface patterns in existing data to support operational decisions — without building a full analytics platform.",
  },
];

function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="h-72 sm:h-auto rounded-2xl bg-[#4330f1] p-5 text-white shadow-[0_8px_20px_rgba(67,48,241,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(67,48,241,0.28)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
        {icon}
      </div>

      <h3 className="mb-3 text-base font-semibold leading-snug">
        {title}
      </h3>

      <p className="text-[13px] leading-[1.7] text-white/90">
        {description}
      </p>
    </div>
  );
}

export function AiSolutionsUntappedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f4f7] py-10">
      {/* Background Image */}
      <Image
        src="/Frame.png"
        alt="AI background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-center"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 z-1 bg-white/55 sm:bg-white/45 md:bg-white/35" />

      {/* Subtle dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 z-2 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#7c7c7c 0.6px, transparent 0.6px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 sm:px-14">
        {/* Heading */}
        <div className="mb-7 text-center sm:mb-8 md:mb-10">
          <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-[#2f2f2f] sm:text-[30px] md:text-[36px]">
            Where AI adds genuine value
          </h2>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block sm:hidden">
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
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Quote box */}
        <div className="mt-7 sm:mt-8">
          <div className="mx-auto max-w-212.5 rounded-2xl border border-white/75 bg-white/0 px-5 py-5 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] sm:px-6">
            <p className="text-[13px] italic leading-relaxed text-white sm:text-[14px]">
              AI is most valuable when it strengthens real operations, not when
              it is added as a trend. This mirrors the profile well.
            </p>
          </div>
        </div>

        {/* Bottom button */}
        <div className="mt-7 flex justify-center sm:mt-8">
          <Link href="/contact" className="no-underline">
            <button className="bg-white p-4 text-sm font-semibold text-[#352FE1] transition rounded-md hover:bg-white/90 cursor-pointer">
              Discuss an AI opportunity
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
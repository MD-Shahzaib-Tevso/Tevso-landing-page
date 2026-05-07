"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    value: "500k+",
    label: "Project delivered",
    description: "Follow a hashtag growth total posts, videos and images.",
  },
  {
    value: "500k+",
    label: "Active clients",
    description: "Follow a hashtag growth total posts, videos and images.",
  },
  {
    value: "100k+",
    label: "Lines of code",
    description: "Follow a hashtag growth total posts, videos and images.",
  },
  {
    value: "50k+",
    label: "Engineers & designers",
    description: "Follow a hashtag growth total posts, videos and images.",
  },
  {
    value: "8k+",
    label: "Engineers & designers",
    description: "Follow a hashtag growth total posts, videos and images.",
  },
];

export function HomeStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".stat-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotateX: -35,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.12,
          ease: "back.out(1.5)",
          clearProps: "transformPerspective",
        }
      )
        .fromTo(
          ".stat-value-reveal",
          { yPercent: 120, rotateZ: 8, opacity: 0, scale: 0.5 },
          {
            yPercent: 0,
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.12,
            ease: "elastic.out(1, 0.7)",
          },
          "-=1"
        )
        .fromTo(
          ".stat-label-reveal",
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.9"
        )
        .fromTo(
          ".stat-desc-reveal",
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="stats-section bg-slate-50/40 py-12 sm:py-16 md:py-20 lg:py-24 [perspective:2000px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8 [transform-style:preserve-3d]">
          {stats.map((stat, index) => (
            <article
              key={`${stat.label}-${index}`}
              className="stat-card flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-[#D2D2D4] bg-white px-5 py-8 text-center shadow-[0px_4px_14px_0px_#00000040] transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:min-h-[250px] sm:px-6 md:px-7 lg:px-6 xl:px-5"
            >
              <span className="flex items-center justify-center overflow-hidden pb-2 -mb-2 font-['Raleway'] text-[34px] font-semibold leading-none tracking-tight text-[#2c28d8] sm:text-[38px] md:text-[40px]">
                <span className="stat-value-reveal block origin-bottom-left pt-2 -mt-2 will-change-transform">
                  {stat.value}
                </span>
              </span>

              <h3 className="mt-4 flex items-center justify-center overflow-hidden pb-2 -mb-2 font-['Raleway'] text-[20px] font-semibold leading-tight text-[#222222] sm:text-[22px] md:text-[24px]">
                <span className="stat-label-reveal block origin-bottom-left pt-2 -mt-2 will-change-transform">
                  {stat.label}
                </span>
              </h3>

              <p className="stat-desc-reveal mt-3 max-w-[230px] text-center font-['Lato'] text-[15px] font-normal leading-[1.5] text-[#555555] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[15px]">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
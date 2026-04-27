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
    value: "18+",
    label: "Project delivered",
    description: "Follow a hashtag growth total posts, videos and images."
  },
  {
    value: "10+",
    label: "Active clients",
    description: "Follow a hashtag growth total posts, videos and images."
  },
  {
    value: "50k+",
    label: "Lines of code",
    description: "Follow a hashtag growth total posts, videos and images."
  },
  {
    value: "10+",
    label: "Engineers & designers",
    description: "Follow a hashtag growth total posts, videos and images."
  },
];

export function HomeStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // 1. Cards popping in with a cool 3D flip and elastic bounce
    tl.fromTo(
      ".stat-card",
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.85, 
        rotateX: -45,
        transformPerspective: 1000
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.5)",
        clearProps: "transformPerspective"
      }
    )
    // 2. The Stat value bursting up creatively
    .fromTo(
      ".stat-value-reveal",
      { yPercent: 120, rotateZ: 8, opacity: 0, scale: 0.5 },
      {
        yPercent: 0,
        rotateZ: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.out(1, 0.7)",
      },
      "-=1.2" // Matches exactly with the cards stagger sync
    )
    // 3. Label text sliding up smoothly inside the mask
    .fromTo(
      ".stat-label-reveal",
      { yPercent: 120 },
      {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=1.1" // Starts cleanly after card is visible
    )
    // 4. Description fading up gracefully
    .fromTo(
      ".stat-desc-reveal",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=1.0"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="stats-section bg-slate-50/40 py-24 [perspective:2000px]">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 [transform-style:preserve-3d]">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="stat-card flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-[0px_4px_14px_0px_#00000040] border border-[#D2D2D4] transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <span className="flex overflow-hidden pb-3 -mb-3 items-center justify-center font-['Raleway'] font-semibold text-[40px] leading-[100%] tracking-[0%] tracking-tight text-[#2c28d8]">
                <span className="block stat-value-reveal origin-bottom-left will-change-transform pt-3 -mt-3">
                  {stat.value}
                </span>
              </span>
              <h3 className="flex overflow-hidden pb-2 -mb-2 mt-4 items-center justify-center font-['Raleway'] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#222222]">
                <span className="block stat-label-reveal origin-bottom-left will-change-transform pt-2 -mt-2">
                  {stat.label}
                </span>
              </h3>
              <p className="stat-desc-reveal mt-3 font-['Lato'] font-normal text-[18px] leading-[100%] tracking-[0%] text-center">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
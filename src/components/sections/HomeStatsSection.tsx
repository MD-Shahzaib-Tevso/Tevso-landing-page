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
    label: "Active users",
    secondLine: "supported",
  },
  {
    value: "500k+",
    label: "Sales processed",
    secondLine: "",
  },
  {
    value: "10+",
    label: "Letting agents served",
    secondLine: "",
  },
  {
    value: "50+",
    label: "Clinics onboarded",
    secondLine: "",
  },
  {
    value: "8+",
    label: "White-label",
    secondLine: "deployments",
  },
];

export function HomeStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stat-card",
        {
          opacity: 0,
          y: 18,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden border-t border-[#e5e7eb] bg-[#f8f9fb] px-[30.07px] pt-[25px] pb-[38px]"
    >
      <div className="mx-auto h-[123px] w-full max-w-[1381px] rotate-0 rounded-[10px] opacity-100">
        <div className="grid h-full grid-cols-2 gap-[11px] sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <article
              key={`${stat.value}-${index}`}
              className="stat-card flex h-[123px] flex-col items-center justify-center rounded-[10px] border border-[#e6e6e6] bg-white px-2 text-center shadow-[0_2px_8px_rgba(0,0,0,0.28)]"
            >
              <h3 className="font-['Raleway'] text-[47px] font-semibold leading-none tracking-wide text-[#352FE1]">
                {stat.value}
              </h3>

              <p className="mt-[3px] font-['Lato'] text-[9.5px] font-medium leading-[1.15] text-[#111111]">
                {stat.label}
                {stat.secondLine && (
                  <>
                    <br />
                    {stat.secondLine}
                  </>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Scroll down"
        className="absolute bottom-[7px] right-[13px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#352FE1] shadow-md"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
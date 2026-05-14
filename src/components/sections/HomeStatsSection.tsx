"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "500k+", label: "Active users", secondLine: "supported" },
  { value: "500k+", label: "Sales processed" },
  { value: "10+", label: "Letting agents served" },
  { value: "50+", label: "Clinics onboarded" },
  { value: "8+", label: "White-label", secondLine: "deployments" },
];

const CARD_WIDTH = 240;
const GAP = 24;

export function HomeStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useSlider, setUseSlider] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const totalCardsWidth = stats.length * CARD_WIDTH + (stats.length - 1) * GAP;
      setUseSlider(totalCardsWidth > containerWidth);
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stats-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

  const renderCard = (stat: (typeof stats)[0], index: number) => (
    <article
      key={index}
      className="flex h-[150px] min-w-[240px] flex-col items-center justify-center rounded-2xl border border-[#e6e6e6] bg-white px-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="font-['Raleway'] text-4xl font-bold text-[#352FE1] lg:text-5xl">
        {stat.value}
      </h3>

      <p className="mt-3 text-sm font-medium leading-tight text-[#111]">
        {stat.label}
        {stat.secondLine && (
          <>
            <br />
            {stat.secondLine}
          </>
        )}
      </p>
    </article>
  );

  return (
    <section
      ref={containerRef}
      className="border-t border-[#e5e7eb] bg-[#f5f6fa] py-10"
    >
      <div className="min-w-6xl px-14">
        {useSlider ? (
          <Swiper
            modules={[Autoplay]}
            className="stats-content "
            loop
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={GAP}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index} className="w-auto!">
                {renderCard(stat, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="stats-content flex justify-center gap-6">
            {stats.map(renderCard)}
          </div>
        )}
      </div>
    </section>
  );
}
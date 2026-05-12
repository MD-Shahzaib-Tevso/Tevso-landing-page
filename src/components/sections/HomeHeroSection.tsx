"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeHeroSection() {
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
        ".word-reveal",
        { yPercent: 120, rotateZ: 4, opacity: 0 },
        {
          yPercent: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.025,
        }
      ).fromTo(
        ".fade-up-element",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        },
        "-=0.55"
      );
    },
    { scope: containerRef }
  );

  const renderWords = (text: string) => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.trim() === "") return <span key={i}>{word}</span>;

      return (
        <span
          key={i}
          className="relative inline-block overflow-hidden pb-1 -mb-1"
        >
          <span className="word-reveal inline-block origin-bottom-left will-change-transform">
            {word}
          </span>
        </span>
      );
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative mt-[72px] h-[100vh] w-full overflow-hidden bg-[#06133d] sm:mt-20"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Tevso Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1180px] items-start px-[50px] pt-[78px]">
        <div className="w-full max-w-[410px]">
          <h1 className="font-['Raleway'] font-bold text-[45px] leading-[100%] tracking-normal text-white">
            {renderWords(
              "Build software that scales with your business, not against it"
            )}
          </h1>

          <p className="fade-up-element mt-[28px] max-w-[405px] font-body text-[16px] font-normal leading-[1.35] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Tevso is a founder-led technical partner for SaaS products, internal
            platforms, workflow automation, and AI-enabled systems. We help
            growing businesses fix messy architecture, reduce manual operations,
            and build digital systems that are stable, scalable, and commercially
            useful.
          </p>

          <div className="fade-up-element mt-[24px] flex items-center gap-[9px]">
            <button className="h-[32px] bg-white px-[13px] text-[11px] font-medium text-[#352FE1] transition hover:bg-white/90">
              Book a discovery call
            </button>

            <button className="h-[32px] bg-white px-[14px] text-[11px] font-medium text-[#352FE1] transition hover:bg-white/90">
              View case studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
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
        { yPercent: 120, rotateZ: 5, opacity: 0 },
        {
          yPercent: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.03,
        }
      ).fromTo(
        ".fade-up-element",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.9"
      );
    },
    { scope: containerRef }
  );

  const renderWords = (text: string) => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.trim() === "") {
        return <span key={i}>{word}</span>;
      }

      return (
        <span
          key={i}
          className="relative inline-block overflow-hidden pb-1 -mb-1 sm:pb-2 sm:-mb-2"
        >
          <span className="word-reveal inline-block origin-bottom-left pt-1 -mt-1 will-change-transform sm:pt-2 sm:-mt-2">
            {word}
          </span>
        </span>
      );
    });
  };

  return (
    <section
      ref={containerRef}
      className="hero-section relative mt-[72px] min-h-[620px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[114px] lg:min-h-[calc(100vh-114px)]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Tevso Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-[58%_center] sm:object-center"
        />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/40 lg:bg-black/0" />

        {/* Mobile gradient for readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60 lg:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[620px] w-full items-center justify-center px-5 py-14 sm:min-h-[720px] sm:px-8 md:px-12 lg:min-h-[calc(100vh-114px)] lg:justify-start lg:px-16 lg:py-20">
        <div className="w-full max-w-[680px] text-center lg:text-left">
          <h1 className="font-heading text-[30px] font-bold leading-[1.15] tracking-tight text-white xs:text-[32px] sm:text-[46px] md:text-[56px] lg:text-6xl">
            {renderWords(
              "Build & Scale Your SaaS From MVP to Investor Ready Infrastructure."
            )}
          </h1>

          <div className="fade-up-element mt-5 space-y-4 sm:mt-6 sm:space-y-5 lg:space-y-6">
            <p className="mx-auto max-w-[600px] font-body text-[14px] leading-[1.75] text-white sm:text-base md:text-lg lg:mx-0">
              Tevso is a SaaS Growth Engineering Partner helping founders
              design, build, and scale products without technical debt or
              scalability risks.
            </p>

            <p className="mx-auto max-w-[600px] font-body text-[14px] leading-[1.75] text-white sm:text-base md:text-lg lg:mx-0">
              We combine engineering excellence, DevOps mastery, and a managed
              talent network to deliver end-to-end technology solutions from
              idea validation to post launch growth.
            </p>
          </div>

          <div className="fade-up-element mt-7 flex justify-center lg:justify-start">
            <button className="theme-btn w-full max-w-[240px] sm:w-auto sm:max-w-none">
              Discuss Your SaaS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
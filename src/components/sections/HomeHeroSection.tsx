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
      className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]"
    >
      {/* BACKGROUND IMAGE */}
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
        {/* <div className="absolute inset-0 bg-black/55 sm:bg-black/40 lg:bg-black/0" /> */}

        {/* Mobile gradient for readable text */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60 lg:hidden" /> */}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full w-full items-start p-14">
        <div className="w-full max-w-[660px] gap-8 flex flex-col">
          <h1 className="font-['Raleway'] font-bold text-5xl leading-[100%] tracking-normal text-white">
            {renderWords(
              "Build software that scales with your business, not against it"
            )}
          </h1>

          <p className="fade-up-element font-body text-xl  font-normal leading-[35px] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Tevso is a founder-led technical partner for SaaS products, internal
            platforms, workflow automation, and AI-enabled systems. We help
            growing businesses fix messy architecture, reduce manual operations,
            and build digital systems that are stable, scalable, and commercially
            useful.
          </p>

          <div className="fade-up-element flex items-center gap-4">
            <button className="bg-white p-4 text-sm font-normal text-[#352FE1] transition hover:bg-white/90">
              Book a discovery call
            </button>

            <button className="bg-white p-4 text-sm font-normal text-[#352FE1] transition hover:bg-white/90">
              View case studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
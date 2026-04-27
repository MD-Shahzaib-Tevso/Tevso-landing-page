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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
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
  }, { scope: containerRef });

  const renderWords = (text: string) => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.trim() === "") {
        return <span key={i}>{word}</span>;
      }
      return (
        <span key={i} className="inline-block overflow-hidden relative pb-2 -mb-2">
          <span className="inline-block word-reveal will-change-transform origin-bottom-left pt-2 -mt-2">
            {word}
          </span>
        </span>
      );
    });
  };

  return (
    <section 
      ref={containerRef}
      className="hero-section relative min-h-[calc(100vh-114px)] overflow-hidden pt-32 pb-20 mt-[114px]"
    >
      {/* High-Performance Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Tevso Hero Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 px-6 md:px-12 lg:px-16 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="hero-content max-w-2xl space-y-8 text-left">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl tracking-tight">
            {renderWords("Build & Scale Your SaaS From MVP to Investor Ready Infrastructure.")}
          </h1>

          <div className="space-y-6 fade-up-element">
            <p className="font-body text-lg leading-relaxed text-white">
              Tevso is a SaaS Growth Engineering Partner helping founders design, build, and scale products without technical debt or scalability risks.
            </p>
            <p className="font-body text-lg leading-relaxed text-white">
              We combine engineering excellence, DevOps mastery, and a managed talent network to deliver end-to-end technology solutions — from idea validation to post launch growth.
            </p>
          </div>

          <div className="fade-up-element">
            <button className="theme-btn">
              Discuss Your SaaS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

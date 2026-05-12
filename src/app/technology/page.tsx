"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TechnologyShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-top-animate",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".stack-section-animate",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".stack-section-trigger",
            start: "top 90%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".platform-animate",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".platform-section-trigger",
            start: "top 90%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".success-animate",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".success-section-trigger",
            start: "top 90%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
        }
      );

      ScrollTrigger.refresh();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full bg-white text-[#111111]">
      {/* HERO TOP */}
      <section className="relative mt-[72px] min-h-[520px] w-full overflow-hidden bg-[#020817] sm:mt-20 sm:min-h-[500px] lg:min-h-[430px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Rectangle 2340 (3).png"
            alt="How We Work Background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />

          {/* Light readable overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45 sm:bg-[linear-gradient(90deg,_rgba(0,0,0,0.45)_0%,_rgba(0,0,0,0.28)_45%,_rgba(0,0,0,0.05)_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[#020817]/15" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[520px] items-center justify-center px-5 py-14 text-center sm:min-h-[500px] sm:justify-start sm:px-8 sm:text-left md:px-10 lg:min-h-[430px] lg:px-12">
          <div className="max-w-[610px]">
            <p className="hero-top-animate mb-3 font-body text-[12px] font-medium uppercase tracking-[0.5px] text-white sm:text-[13px]">
              HOW WE WORK
            </p>

            <h1 className="hero-top-animate font-heading text-[30px] font-semibold leading-[1.22] tracking-wide text-white sm:text-[38px] md:text-[45px]">
              A working style built around{" "}
              <br className="hidden sm:block" />
              clarity, momentum, and{" "}
              <br className="hidden sm:block" />
              ownership
            </h1>

            <p className="hero-top-animate mx-auto mt-5 max-w-[610px] font-body text-[14px] leading-[1.75] text-white/90 sm:mx-0">
              What clients value in a technical partner is not only skill, but
              reliability in execution. Tevso combines hands-on technical
              delivery with practical business awareness to help clients move
              faster with more confidence and less technical friction.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="stack-section-trigger relative w-full overflow-hidden bg-[#f3f3f3] py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10 lg:px-[52px]">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_275px] md:gap-[70px] lg:gap-[95px]">
            {/* Left Content */}
            <div className="stack-section-animate mx-auto max-w-[560px] text-center md:mx-0 md:max-w-[390px] md:text-left">
              <h2 className="font-['Raleway'] text-[26px] font-bold leading-tight text-[#333333] md:text-[25px]">
                Core principles
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-left font-['Raleway'] text-[14px] leading-[1.6] text-[#333333] md:mt-[18px] md:space-y-[4px] md:text-[12px] md:leading-[14px]">
                <li>Founder-level ownership and accountability</li>
                <li>Practical decision-making, not overengineering</li>
                <li>Direct and transparent communication</li>
                <li>Documentation and process clarity</li>
                <li>
                  Flexibility across project, retainer, and team-extension
                  models
                </li>
                <li>
                  Strong technical involvement where product decisions matter
                </li>
              </ul>
            </div>

            {/* Right Image - hidden on mobile */}
            <div className="stack-section-animate hidden justify-end md:flex">
              <img
                src="/Rectangle 22357 (8).png"
                alt="Core principles"
                className="h-[158px] w-full max-w-[275px] rounded-[7px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="platform-section-trigger w-full bg-[#f3f3f3] py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[320px_1fr] md:gap-x-[70px] lg:gap-x-[95px]">
            {/* Left Image - hidden on mobile */}
            <div className="platform-animate hidden justify-start md:flex">
              <img
                src="/Rectangle 22359.png"
                alt="Process steps"
                className="h-auto w-full max-w-[290px] rounded-[12px] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="platform-animate mx-auto max-w-[560px] text-center md:mx-0 md:max-w-[420px] md:text-left">
              <h2 className="font-['Raleway'] text-[26px] font-bold leading-tight text-[#333333] sm:text-[28px] md:text-[30px]">
                Process steps
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-left font-['Raleway'] text-[14px] leading-[1.6] text-[#333333] md:mt-[22px] md:space-y-[6px]">
                <li>Understand the business and workflow</li>
                <li>Shape the right technical approach</li>
                <li>Deliver in visible phases</li>
                <li>Communicate clearly</li>
                <li>Plan for long-term usefulness and scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS */}
      <section className="success-section-trigger w-full overflow-hidden bg-[#352FE1]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Image - hidden on mobile */}
          <div className="success-animate hidden h-[212px] w-full overflow-hidden md:block">
            <img
              src="/Frame .png"
              alt="Talk with us"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Right Content */}
          <div className="success-animate relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#352FE1] px-5 py-10 text-center sm:px-8 md:min-h-[212px] md:justify-start md:px-[26px] md:text-left lg:px-[28px]">
            {/* Quote Background */}
            <div className="pointer-events-none absolute right-[-20px] top-[-50px] font-['Raleway'] text-[180px] font-bold leading-none text-white/[0.05] sm:text-[220px] md:right-[-12px] md:top-[-74px] md:text-[260px]">
              ”
            </div>

            <h2 className="relative z-10 max-w-[560px] font-['Raleway'] text-[26px] font-bold leading-[1.25] tracking-[-0.3px] text-white sm:text-[30px] md:text-[31px] lg:text-[32px]"></h2>
          </div>
        </div>
      </section>
    </section>
  );
}
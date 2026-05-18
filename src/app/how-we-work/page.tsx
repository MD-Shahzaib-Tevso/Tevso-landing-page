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
      <section className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]">
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

          {/* VERY LIGHT OVERLAY ONLY FOR TEXT READABILITY */}
          <div className="absolute inset-0 bg-black/10" />

          {/* LIGHT LEFT GRADIENT */}
          <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" /></div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full">
          {/* LEFT TEXT */}
          <div className="flex flex-col h-full w-full gap-5 max-w-[660px] items-start p-14">
            {/* <p className="text-[22px] font-medium uppercase tracking-wider text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
              HOW WE WORK
            </p> */}

            <h1 className="mt-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] sm:text-4xl lg:text-5xl">
              A working style built around{" "}
              <br className="hidden sm:block" />
              clarity, momentum, and{" "}
              <br className="hidden sm:block" />
              ownership
            </h1>

            <p className="mt-5 texts-base leading-normal text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
              What clients value in a technical partner is not only skill, but
              reliability in execution. Tevso combines hands-on technical
              delivery with practical business awareness to help clients move
              faster with more confidence and less technical friction.
            </p>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="stack-section-trigger relative w-full overflow-hidden bg-[#f3f3f3] py-10">
        <div className="mx-auto max-w-7xl px-8 sm:px-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* text */}
            <div className="stack-section-animate w-full md:w-[48%]">
              <h2 className="text-[32px] font-bold text-[#333]">
                Core principles
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-[#444]">
                <li>Founder-level ownership and accountability</li>
                <li>Practical decision-making, not overengineering</li>
                <li>Direct and transparent communication</li>
                <li>Documentation and process clarity</li>
                <li>Flexibility across project, retainer, and team-extension models</li>
                <li>Strong technical involvement where product decisions matter</li>
              </ul>
            </div>

            {/* image */}
            <div className="stack-section-animate w-full md:w-[42%]">
              <div className="relative h-60 overflow-hidden rounded-2xl md:h-65">
                <Image
                  src="/Rectangle 22357 (8).png"
                  alt="Core principles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="platform-section-trigger bg-[#f3f3f3] pb-10">
        <div className="mx-auto max-w-7xl px-8 sm:px-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* image first desktop */}
            <div className="order-2 w-full md:order-1 md:w-[42%]">
              <div className="platform-animate relative h-60 overflow-hidden rounded-2xl md:h-65">
                <Image
                  src="/Rectangle 22359.png"
                  alt="Process steps"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* text */}
            <div className="platform-animate order-1 w-full md:order-2 md:w-[48%]">
              <h2 className="text-[32px] font-bold text-[#333]">
                Process steps
              </h2>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-[#444]">
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

      {/* CTA */}
      <section className="success-section-trigger bg-[#352FE1]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
          {/* LEFT IMAGE */}
          <div className="success-animate relative hidden md:block">
            <div className="relative h-full min-h-60 w-full">
              <Image
                src="/technology-talk-with-us.png"
                alt="Talk with us"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="success-animate relative flex min-h-45 items-center justify-center overflow-hidden bg-[#352FE1] px-6 md:py-24 py-10 text-center md:min-h-60 md:justify-start md:px-12 md:text-left">

            {/* Right background logo pattern */}
            <div className="pointer-events-none absolute right-0 top-1/2 z-0 -translate-y-1/2">
              <Image
                src="/Tevso-white-logo 1.png"
                alt="Tevso background logo"
                width={300}
                height={500}
                className="w-auto h-48 md:h-80"
              />
            </div>

            <h2 className="relative z-10 max-w-lg md:w-full lg:text-4xl md:text-3xl text-4xl font-bold leading-tight text-white">
              Talk With Us About Your Product Or Platform
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
}
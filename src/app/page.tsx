"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { HomeCaseStudiesSection } from "@/components/sections/HomeCaseStudiesSection";
import { HomeContactFormSection } from "@/components/sections/HomeContactFormSection";
import { HomeCTASection } from "@/components/sections/HomeCTASection";
import { HomeEngagementSection } from "@/components/sections/HomeEngagementSection";
import { HomeFAQSection } from "@/components/sections/HomeFAQSection";
import { HomeFeatureShowcaseSection } from "@/components/sections/HomeFeatureShowcaseSection";
import { HomeHeroSection } from "@/components/sections/HomeHeroSection";
import { HomeStatsSection } from "@/components/sections/HomeStatsSection";
import { HomeTestimonialsSection } from "@/components/sections/HomeTestimonialsSection";
import { HomeTransformationSection } from "@/components/sections/HomeTransformationSection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hero Content Entrance (Runs immediately)
    gsap.from(".hero-content > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "all"
    });

    // 2. Element Level Scroll Reveals
    const sections = gsap.utils.toArray("section") as HTMLElement[];
    
    sections.forEach((section) => {
      // Find top-level children of the section OR top-level children of a grid
      // This avoids deep selector conflicts like targeting both an article AND its internal paragraphs
      const targets = section.querySelectorAll(":scope > *, .grid > *, article, .swiper-slide");
      
      // Filter out elements that are nested inside already targeted containers in this specific loop
      const filteredTargets = Array.from(targets).filter(el => {
        const isDirectChild = el.parentElement === section;
        const isGridChild = el.parentElement?.classList.contains('grid');
        const isSwiperSlide = el.classList.contains('swiper-slide');
        return isDirectChild || isGridChild || isSwiperSlide;
      });

      if (filteredTargets.length > 0) {
        gsap.from(filteredTargets, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all"
        });
      }
    });

    // Refresh ScrollTrigger to ensure all markers and points are correct after initial render
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomeFeatureShowcaseSection />
      <HomeCaseStudiesSection />
      <HomeEngagementSection />
      <HomeTransformationSection />
      <HomeCTASection />
      <HomeTestimonialsSection />
      <HomeFAQSection />
      <HomeContactFormSection />
    </div>
  );
}
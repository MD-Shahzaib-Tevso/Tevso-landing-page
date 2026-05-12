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

import { HomeTransformationSection } from "@/components/sections/HomeTransformationSection";
import { ContactSectionSS } from "@/components/ContactSectionSS";
import { PracticalAISection } from "@/components/sections/PracticalAISection";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. HomeHeroSection Entrance will be handled inside its own component

    // 2. "One by One" Scroll Reveals for All Sections
    const sections = gsap.utils.toArray("section") as HTMLElement[];
    
    sections.forEach((section) => {
      // Find logical blocks that should animate "one by one"
      // We target high-level content elements like headers, grid cells, and articles.
      const elements = section.querySelectorAll(":scope > *, .grid > *, article, .swiper-slide, h2, .max-w-2xl > *, .hero-content > *");
      
      // Filter the elements to ensure we only get a flat list of top-level "entrance" items
      // This prevents nested elements from also animating and causing conflicts.
      const entranceItems = Array.from(elements).filter((el: any) => {
        // Only include if the parent is a section or a grid or a container we previously targeted
        const parent = el.parentElement;
        if (!parent) return false;
        
        const isDirect = parent === section;
        const isGridChild = parent.classList.contains('grid');
        const isContentChild = parent.classList.contains('max-w-2xl') || parent.classList.contains('space-y-8') || parent.classList.contains('space-y-10');
        const isSwiperSlide = el.classList.contains('swiper-slide');
        
        return isDirect || isGridChild || isContentChild || isSwiperSlide;
      });

      // Remove sections that manage their own complex GSAP animations
      if (section.classList.contains('hero-section') || section.classList.contains('stats-section')) return;

      if (entranceItems.length > 0) {
        gsap.set(section, { perspective: 1500 });
        
        gsap.from(entranceItems, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 80,
          opacity: 0,
          scale: 0.85,
          rotationX: -25,
          transformOrigin: "bottom center",
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.4)",
          clearProps: "all"
        });
      }
    });

    // Refresh everything after setup
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* home  */}
      <HomeHeroSection />

      {/* stats  */}
      <HomeStatsSection />  
      <HomeFeatureShowcaseSection />
      <HomeCaseStudiesSection />
      <HomeEngagementSection />
      <HomeTransformationSection />
      <HomeCTASection />
      <PracticalAISection />
      <HomeFAQSection />
      <HomeContactFormSection />
      <ContactSectionSS/>
    </div>
  );
}
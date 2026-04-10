"use client";

import React, { useState } from "react";
import { CaseStudiesHeroSection } from "@/components/sections/CaseStudiesHeroSection";
import { CaseStudiesFeaturedListSection } from "@/components/sections/CaseStudiesFeaturedListSection";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Web development",
  "Mobile app development",
  "Custom software development",
  "Product design",
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <main className="bg-white">
      <CaseStudiesHeroSection />
      
      {/* Intermediate Header & Tabs */}
      <section className="bg-white pt-20">
        <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
          {/* Header Area */}
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-[500px] font-heading text-[32px] font-bold leading-tight text-brand md:text-[40px]">
              Core digital transformation & technology services
            </h2>
            <button className="rounded-[4px] bg-brand px-8 py-3.5 font-body text-[16px] font-semibold text-white transition-all hover:bg-brand/90">
              Transform With Tevso
            </button>
          </div>

          {/* Tab Bar */}
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-black/5 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className="relative py-2 font-body text-[15px] transition-colors"
                style={{
                  color: activeTab === category ? "#311EE6" : "#666666",
                  fontWeight: activeTab === category ? "600" : "400",
                }}
              >
                {category}
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <CaseStudiesFeaturedListSection activeTab={activeTab} />
    </main>
  );
}
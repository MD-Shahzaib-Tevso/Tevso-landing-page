"use client";

import { useState } from "react";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

type Scenario = {
  tag: string;
  title: string;
  description: string;
  stat: string;
};

const scenariosData: Record<string, Scenario[]> = {
  Operations: [
    {
      tag: "Supply Chain",
      title: "Demand Forecasting & Inventory Optimisation",
      description: "AI models analyse historical sales, seasonality, and market signals to generate accurate demand forecasts — reducing overstock and avoiding shortfalls.",
      stat: "Up to 25% reduction in excess inventory costs"
    },
    {
      tag: "Maintenance",
      title: "Predictive Equipment Monitoring",
      description: "Sensor data and usage patterns feed machine learning models that identify failure risk before breakdowns occur — enabling planned maintenance over unplanned downtime.",
      stat: "40–60% reduction in unplanned downtime"
    },
    {
      tag: "HR & Workforce",
      title: "Intelligent Scheduling & Resource Allocation",
      description: "Workforce planning tools that model capacity, predict demand peaks, and suggest optimal shift structures — reducing overtime costs and improving staff utilisation.",
      stat: "15-30% improvement in operational efficiency"
    },
    {
      tag: "Quality Control",
      title: "Automated Inspection & Anomaly Detection",
      description: "Vision AI or statistical models monitor product or process output in real time — flagging deviations before they propagate across production batches.",
      stat: "Reduction in defect-related costs by 20-35%"
    }
  ],
  Finance: [
    {
      tag: "Risk Management",
      title: "Fraud Detection & Prevention",
      description: "Real-time analysis of transaction patterns to identify and block fraudulent activities before they impact the bottom line.",
      stat: "45% reduction in false positives"
    },
    // ... placeholders for other tabs if content not provided
  ],
  Customer: [],
  Reporting: []
};

export function AiSolutionsScenariosSection() {
  const [activeTab, setActiveTab] = useState("Operations");
  const tabs = ["Operations", "Finance", "Customer", "Reporting"];

  return (
    <section className="relative w-full py-24 bg-[#020617] overflow-hidden text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-scenarios-bg.png" // Placeholder URL
          alt="Scenarios Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-[#020617] z-1" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <p className="font-body text-[15px] font-bold text-white/60 uppercase tracking-widest">
            Scenarios & Applications
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight">
            Where intelligence meets your business.
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Real-world scenarios across the areas where organisations see the highest return on applied AI investment.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white/10 backdrop-blur-md rounded-sm border border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-sm font-body text-[14px] font-bold transition-all ${
                  activeTab === tab 
                  ? "bg-[#3B32C4] text-white shadow-lg" 
                  : "text-white/60 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[500px]">
          {(scenariosData[activeTab] || []).length > 0 ? (
            scenariosData[activeTab].map((item, index) => (
              <div 
                key={index}
                className="group p-8 md:p-10 rounded-2xl bg-white text-[#020617] flex flex-col justify-between h-full transition-all hover:scale-[1.02]"
              >
                <div className="space-y-6">
                  <span className="font-body text-[13px] font-bold text-[#64748B] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-bold text-[#3B32C4] leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-2 text-[#3B32C4] font-body text-[15px] font-bold">
                    <MoveUpRight className="w-5 h-5" />
                    <span>{item.stat}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center text-white/40 font-body">
              More content coming soon for {activeTab}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

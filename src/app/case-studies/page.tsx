"use client";

import Image from "next/image";
import { CaseStudiesHeroSection } from "@/components/sections/CaseStudiesHeroSection";



export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <CaseStudiesHeroSection />

      
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="flex w-full flex-col overflow-hidden rounded-[26px] bg-gradient-to-r from-[#eeeeee] via-[#f4f4f4] to-[#d7d4ff] px-6 py-7 md:flex-row md:items-center md:px-9">
            
            {/* LEFT IMAGE */}
            <div className="flex w-full justify-center md:w-[52%] md:justify-start">
              <Image
                src="/5 1.png"
                alt="24/7 Digital Veterinary Care Platform"
                width={560}
                height={350}
                className="h-auto w-full max-w-[540px] object-contain"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="mt-8 w-full md:mt-0 md:w-[48%] md:pl-7">
              <h2 className="max-w-[460px] text-[28px] font-bold leading-[1.05] text-[#2417ff] sm:text-[34px]">
                24/7 Digital Veterinary Care Platform
              </h2>

              <p className="mt-4 max-w-[520px] text-[12px] leading-[1.35] text-[#2f2f2f]">
                Veterinary clinics needed a way to offer continuous care without
                overloading staff or infrastructure. We developed a white label
                digital platform that allows clinics to provide round the clock
                virtual consultations under their own brand, connecting pet
                parents with licensed veterinarians seamlessly.
              </p>

              <div className="mt-4">
                <h3 className="text-[12px] font-bold text-[#2417ff]">
                  Client challenge
                </h3>
                <p className="mt-1 max-w-[520px] text-[12px] leading-[1.35] text-[#2f2f2f]">
                  Clinics could not scale consultation availability without hiring
                  more staff or building costly technology. They also lacked a
                  unified system for scheduling, payments, and emergency care.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[12px] font-bold text-[#2417ff]">
                  Product design approach
                </h3>
                <p className="mt-1 max-w-[520px] text-[12px] leading-[1.35] text-[#2f2f2f]">
                  Simple, intuitive, and trust-building experiences for pet
                  parents. Clinics get full operational control through branded
                  dashboards with insights and metrics for decision making.
                </p>
              </div>

              <button
                type="button"
                className="mt-5 bg-[#2417ff] px-5 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#1208d8]"
              >
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
     <section className="bg-white py-16">
  <div className="mx-auto w-full max-w-[1180px] px-6">
    <div className="flex w-full flex-col overflow-hidden rounded-[24px] bg-gradient-to-r from-[#eeeeee] via-[#eeeeee] to-[#d9d5ff] px-7 py-7 md:flex-row md:items-center md:px-8">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[50%]">
        <h2 className="max-w-[430px] text-[30px] font-bold leading-[1.1] text-[#2417ff] sm:text-[36px]">
          Online Pet Pharmacy Platform
        </h2>

        <p className="mt-4 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
          Veterinary businesses needed a scalable platform to sell medications
          online while ensuring compliance. We built a white label pharmacy
          platform that manages OTC and prescription medications, logistics,
          payments, and regulatory workflows.
        </p>

        <div className="mt-4">
          <h3 className="text-[12px] font-bold text-[#2417ff]">
            Client challenge
          </h3>
          <p className="mt-1 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
            Online pharmacy operations are complex due to compliance, tax
            handling, courier integration, and order automation. Many clinics
            lacked the technical capability to manage these efficiently.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-[12px] font-bold text-[#2417ff]">
            Product design approach
          </h3>
          <p className="mt-1 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
            Frictionless checkout experience, prescription upload and
            validation, real-time order tracking, and pharmacy dashboards for
            operational insights.
          </p>
        </div>

        <button
          type="button"
          className="mt-6 bg-[#2417ff] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#1208d8]"
        >
          View Case Study
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-8 flex w-full justify-center md:mt-0 md:w-[50%] md:justify-end">
        <Image
          src="/4 1.png"
          alt="Online Pet Pharmacy Platform"
          width={560}
          height={360}
          className="h-auto w-full max-w-[540px] object-contain"
          priority
        />
      </div>
    </div>
  </div>
</section>
      <section className="bg-white py-16">
  <div className="mx-auto w-full max-w-[1180px] px-6">
    <div className="flex w-full flex-col overflow-hidden rounded-[24px] bg-[#eeeeee] px-5 py-5 md:flex-row md:items-center md:px-6">
      
      {/* LEFT IMAGE */}
      <div className="flex w-full justify-center md:w-[50%] md:justify-start">
        <Image
          src="/1 9.png"
          alt="Tenant Referencing and Verification Platform"
          width={540}
          height={360}
          className="h-auto w-full max-w-[520px] rounded-[14px] object-contain"
          priority
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="mt-8 w-full md:mt-0 md:w-[50%] md:pl-10">
        <h2 className="max-w-[520px] text-[28px] font-bold leading-[1.08] text-[#2417ff] sm:text-[34px]">
          Tenant Referencing and Verification Platform
        </h2>

        <p className="mt-4 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
          A platform automating tenant, guarantor, and property verification,
          streamlining compliance and referencing workflows for letting agents.
        </p>

        <div className="mt-4">
          <h3 className="text-[12px] font-bold text-[#2417ff]">
            Client Challenge
          </h3>
          <p className="mt-1 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
            Manual verification caused delays, errors, and compliance risks.
            Agents also relied on process applications quickly while ensuring
            credit and AML checks were accurate.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-[12px] font-bold text-[#2417ff]">
            Product design approach
          </h3>
          <p className="mt-1 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
            Guided submission flows for applicants and real-time dashboards for
            agents. Transparent status tracking enhances user experience.
          </p>
        </div>

        <button
          type="button"
          className="mt-5 bg-[#2417ff] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#1208d8]"
        >
          View Case Study
        </button>
      </div>
    </div>
  </div>
</section>
  <section className="bg-white py-16">
  <div className="mx-auto w-full max-w-[1180px] px-6">

    <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-r from-[#f3f3f3] via-[#ecebff] to-[#d9d6ff] px-8 py-10 md:flex-row md:items-center md:px-12">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[48%]">
        <h2 className="max-w-[420px] text-[30px] font-bold leading-[1.1] text-[#2c2cff] sm:text-[36px]">
          Shipping and Clearing Platform
        </h2>

        <p className="mt-4 max-w-[460px] text-[12.5px] leading-[1.45] text-[#4a4a4a]">
          A comprehensive platform centralizing shipping, clearing, and logistics
          workflows across multiple regions.
        </p>

        <div className="mt-5">
          <h3 className="text-[12.5px] font-semibold text-[#2c2cff]">
            Client challenge
          </h3>
          <p className="mt-1 max-w-[460px] text-[12.5px] leading-[1.45] text-[#4a4a4a]">
            Fragmented operations and lack of real-time visibility caused delays
            and financial errors.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-[12.5px] font-semibold text-[#2c2cff]">
            Product design approach
          </h3>
          <p className="mt-1 max-w-[460px] text-[12.5px] leading-[1.45] text-[#4a4a4a]">
            Workflow-based interface, financial dashboards, and real-time
            visibility for all operations.
          </p>
        </div>

        <button className="mt-6 bg-[#2c2cff] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-[#1a1ae6] transition">
          View Case Study
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 flex w-full justify-center md:mt-0 md:w-[52%] md:justify-end">
        <Image
          src="/2 5.png" // 👉 rename your image like this (no spaces)
          alt="Shipping and Clearing Platform"
          width={520}
          height={340}
          className="w-full max-w-[520px] object-contain"
          priority
        />
      </div>

    </div>
  </div>
</section>
      <section className="bg-white py-16">
  <div className="mx-auto w-full max-w-[1180px] px-6">
    <div className="flex w-full flex-col overflow-hidden rounded-[26px] bg-gradient-to-r from-[#eeeeee] via-[#f4f4f4] to-[#d7d4ff] px-6 py-7 md:flex-row md:items-center md:px-9">
      
      {/* LEFT IMAGE */}
      <div className="flex w-full justify-center md:w-[52%] md:justify-start">
        <Image
          src="/3 1.png"
          alt="AI Marketing Automation Platform"
          width={560}
          height={350}
          className="h-auto w-full max-w-[540px] rounded-[14px] object-contain"
          priority
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="mt-8 w-full md:mt-0 md:w-[48%] md:pl-7">
        <h2 className="max-w-[460px] text-[30px] font-bold leading-[1.1] text-[#2417ff] sm:text-[36px]">
          AI Marketing Automation Platform
        </h2>

        <p className="mt-4 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
          An AI-powered platform generating personalized campaigns from user
          behavior and engagement data, increasing conversions and revenue.
        </p>

        <div className="mt-4">
          <h3 className="text-[12px] font-bold text-[#2417ff]">
            Client Challenge
          </h3>
          <p className="mt-1 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
            Traditional marketing lacked personalization, required manual effort,
            and was difficult to scale.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-[12px] font-bold text-[#2417ff]">
            Product design approach
          </h3>
          <p className="mt-1 max-w-[520px] text-[11px] leading-[1.4] text-[#2f2f2f]">
            Dynamic content generation with intuitive campaign builder,
            personalized experience per user segment, cost control for AI usage.
          </p>
        </div>

        <button
          type="button"
          className="mt-5 bg-[#2417ff] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#1208d8]"
        >
          View Case Study
        </button>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
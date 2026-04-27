"use client";

import { useState } from "react";

export function ServiceDetailsFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Where can I get analytics help?",
      answer:
        "Synergistically evisculate ubiquitous niches whereas holistic resources. Assertively evolve prospective methods of empowerment before diverse web-readiness. Seamlessly incentivize market-driven schemes rather than clicks-and-mortar benefits.",
    },
    {
      question: "How long should a business plan be?",
      answer:
        "Collaboratively formulate distinctive niches whereas holistic resources. Assertively evolve prospective channels for virtual e-business.",
    },
    {
      question: "How to choose a good QA consultant?",
      answer:
        "Professionally embrace dynamic systems for exceptional applications. Authoritatively strategize scalable e-business via comprehensive expertise.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-center font-heading text-3xl font-bold text-[#3B32C4] mb-10 tracking-tight">
          Questions about services
        </h2>

        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden bg-[#3B32C4] shadow-md">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-5 text-left transition-all hover:bg-[#3B32C4]/90"
              >
                <div className="flex items-center justify-between text-white">
                  <span className="font-body text-[15px] font-semibold">{faq.question}</span>
                  <span className="ml-4 text-xl font-light transform transition-transform duration-300">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-[#2E26A5] px-8 py-5">
                    <p className="font-body text-[14px] leading-relaxed text-white/90 m-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

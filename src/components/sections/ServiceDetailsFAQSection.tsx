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
      question: "How To Choose A Good QA Consultant?",
      answer:
        "Professionally embrace dynamic systems for exceptional applications. Authoritatively strategize scalable e-business via comprehensive expertise.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-slate-900">
          Questions About Services
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-slate-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-4 text-left font-heading font-semibold transition-all ${
                  openIndex === index
                    ? "bg-brand text-white"
                    : "bg-white text-slate-900 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-lg">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <div className="border-t border-slate-200 bg-white px-6 py-4">
                  <p className="font-body text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

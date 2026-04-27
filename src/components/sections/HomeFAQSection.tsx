"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    question: "How long until we deliver your first blog post?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-[12px] bg-white transition-all duration-300 ${isOpen ? "shadow-[0_15px_40px_rgba(0,0,0,0.08)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
        }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-6 py-6 text-left"
      >
        <span className="mt-1 shrink-0">
          <div className="relative flex h-5 w-5 items-center justify-center">
            {/* Horizontal Bar */}
            <div className="absolute h-[3px] w-5 rounded-full bg-brand" />
            {/* Vertical Bar that rotates to become horizontal */}
            <motion.div
              className="absolute h-5 w-[3px] rounded-full bg-brand"
              animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </span>
        <h3 className="font-heading text-[18px] font-semibold leading-tight text-[#222222]">
          {question}
        </h3>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[60px]">
              <p className="font-body text-[15px] leading-relaxed text-[#555555]">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(4); // Setting the 5th item as open to match screenshot (3rd on left col if 2 columns)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fcfcff] py-16 lg:py-24">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="mb-12 text-center theme-heading lg:mb-16">
          Frequently ask questions
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
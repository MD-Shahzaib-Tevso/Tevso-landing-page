"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";

export function ContactSectionSS() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-8 py-12 sm:px-14 sm:py-14 md:py-16 lg:py-20 border-t border-[#ffffff]"
      style={{
        backgroundImage: "url('/Background.png')",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 z-0" />

      {/* MAIN CARD */}
      <div className="relative z-10 mx-auto max-w-7xl rounded-[18px] border-2 border-[#311DE5] bg-white p-6 shadow-xl sm:p-8 md:rounded-[20px] md:border-[3px] md:p-10 lg:p-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[28px] lg:text-[32px]">
              Let’s discuss what your{" "}
              <br className="hidden sm:block" />
              system needs next
            </h2>

            <p className="mx-auto mt-4 sm:text-base text-[14px] leading-relaxed text-gray-600 sm:mt-5 sm:text-[15px] md:mx-0">
              Whether you are building a new product, cleaning up an existing
              platform, adding AI into workflows, or looking for a reliable
              technical partner, we would be glad to explore how Tevso can help.
            </p>

            {/* CONTACT INFO */}
            <div className="mx-auto mt-6 max-w-[360px] space-y-3 text-[14px] text-[#333] md:mx-0">
              <a
                href="tel:+447400714002"
                className="flex items-center justify-center gap-3 rounded-md bg-[#f4f4f6] px-4 py-3 transition hover:bg-[#eeeeff] md:justify-start"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#311DE5]" />
                <span>+44 7400714002</span>
              </a>

              <a
                href="mailto:contact@tevsotech.com"
                className="flex items-center justify-center gap-3 rounded-md bg-[#f4f4f6] px-4 py-3 transition hover:bg-[#eeeeff] md:justify-start"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#311DE5]" />
                <span className="break-all">contact@tevsotech.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 bg-transparent py-3 text-[14px] outline-none placeholder:text-gray-400 focus:border-[#311DE5]"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="w-full border-b border-gray-300 bg-transparent py-3 text-[14px] outline-none placeholder:text-gray-400 focus:border-[#311DE5]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 bg-transparent py-3 text-[14px] outline-none placeholder:text-gray-400 focus:border-[#311DE5]"
            />

            <select className="w-full border-b border-gray-300 bg-transparent py-3 text-[14px] text-gray-500 outline-none focus:border-[#311DE5]">
              <option>Project stage</option>
              <option>MVP</option>
              <option>Scaling</option>
              <option>Enterprise</option>
            </select>

            <select className="w-full border-b border-gray-300 bg-transparent py-3 text-[14px] text-gray-500 outline-none focus:border-[#311DE5]">
              <option>Budget range</option>
              <option>$5k - $10k</option>
              <option>$10k - $50k</option>
              <option>$50k+</option>
            </select>

            <select className="w-full border-b border-gray-300 bg-transparent py-3 text-[14px] text-gray-500 outline-none focus:border-[#311DE5]">
              <option>Preferred timeline</option>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6+ Months</option>
            </select>

            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-[#311DE5] py-3 text-[14px] font-medium text-white transition hover:bg-[#2717c9]"
            >
              Book a discovery call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export function HomeContactFormSection() {
  return (
    <section className="relative min-h-[1000px] w-full overflow-hidden py-16 lg:py-32">
      {/* 1. Background Blue Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/formBack.png"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1250px]  ">
        {/* 2. White Bubble Container - Stretchable Background */}
        <div
          className="relative min-h-[700px] w-full"
          style={{
            backgroundImage: "url('/formUpper.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* 3. Content Grid (Using generous padding to stay in the 'safe zone' of the bubble) */}
          <div className="mx-auto grid grid-cols-1 items-center gap-12  lg:grid-cols-2  py-[50px] px-[200px]">

            {/* Left Column: Form */}
            <div className="space-y-6 lg:space-y-10">
              <div>
                <h2 className="font-heading text-[36px] font-bold leading-tight text-[#222222] md:text-[48px]">
                  Let&apos;s talk
                </h2>
                <p className="mt-4 max-w-lg font-body text-[15px] leading-relaxed text-[#555555] md:text-[17px]">
                  Have a project in mind or looking to integrate smart AI solutions into your business?
                  Fill out the form below and let&apos;s discuss how we can turn your ideas into a powerful digital product.
                </p>
              </div>

              <form className="space-y-5 lg:space-y-7">
                <div>
                  <label className="mb-2 block font-body text-[14px] font-semibold text-[#666666]">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-[12px] bg-[#EDF3FF] px-6 py-4 font-body text-[16px] outline-none transition-all placeholder:text-[#999999] focus:bg-white focus:ring-4 focus:ring-brand/5"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body text-[14px] font-semibold text-[#666666]">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-[12px] bg-[#EDF3FF] px-6 py-4 font-body text-[16px] outline-none transition-all placeholder:text-[#999999] focus:bg-white focus:ring-4 focus:ring-brand/5"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body text-[14px] font-semibold text-[#666666]">Message</label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-[12px] bg-[#EDF3FF] px-6 py-4 font-body text-[16px] outline-none transition-all placeholder:text-[#999999] focus:bg-white focus:ring-4 focus:ring-brand/5"
                    placeholder="Briefly describe your project"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[8px] bg-brand px-12 py-5 font-body text-[16px] font-bold text-white shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-brand/20 active:translate-y-[0px] lg:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Illustration & Info */}
            <div className="flex flex-col items-center space-y-12 lg:items-end lg:space-y-20">

              {/* Illustration Slot */}
              <div className="relative w-full max-w-[420px] lg:max-w-full">
                <Image
                  src="/formRight.png"
                  alt="Contact Illustration"
                  width={600}
                  height={500}
                  className="h-auto w-full"
                />
              </div>

              {/* Bottom Info Group */}
              <div className="flex w-full flex-col items-center space-y-10 lg:items-end">

                {/* Contact Links */}
                <div className="flex flex-col items-start space-y-5 lg:items-end">
                  <a href="tel:+447400714002" className="flex items-center gap-4 group transition-colors hover:text-brand">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 group-hover:bg-brand group-hover:text-white transition-all">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="font-body text-[18px] font-bold text-[#222222]">+ 44 7400714002</span>
                  </a>
                  <a href="mailto:contact@tevsotech.com" className="flex items-center gap-4 group transition-colors hover:text-brand">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 group-hover:bg-brand group-hover:text-white transition-all">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-body text-[18px] font-medium text-[#222222]">contact@tevsotech.com</span>
                  </a>
                </div>

                {/* Social Group */}
                <div className="flex items-center gap-5">
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/20">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.95 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/20">
                    <svg className="h-6 w-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/20">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
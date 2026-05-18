"use client";
import Image from "next/image";
import Link from "next/link";

export function HomeContactFormSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#321ee6] py-10 text-white">
      {/* Right background logo pattern */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-0 -translate-y-1/2 hidden lg:block">
        <Image
          src="/Tevso-white-logo 1.png"
          alt="Tevso background logo"
          width={300}
          height={500}
          className="h-80 w-auto md:h-105 lg:h-125"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-8 sm:px-14 md:gap-12 lg:grid-cols-2 lg:gap-14">
        {/* LEFT IMAGE */}
        <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <Image
            src="/chrome.png"
            alt="Product dashboard laptop"
            width={330}
            height={240}
            className="h-auto w-[220px] object-contain sm:w-[280px] md:w-[330px]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h2 className="text-[28px] font-bold leading-tight sm:text-[34px] md:text-[40px] lg:text-[44px]">
            If your product is growing,
            <br className="hidden sm:block" />
            your systems need to keep up
          </h2>

          <p className="mx-auto mt-5 text-sm leading-[1.8] text-white/90 md:mt-6 md:text-base">
            Whether you are building something new, improving an existing
            platform, or trying to remove friction from the systems behind your
            business, Tevso can help you move forward with stronger technical
            direction and reliable execution.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-5 lg:justify-start">
            <Link href="/contact" className="no-underline">
              <button className="w-full max-w-[260px] rounded-md bg-white px-6 py-3 text-sm font-medium text-[#321ee6] transition hover:bg-white/90 sm:w-auto cursor-pointer">
                Book a discovery call
              </button>
            </Link>

            <Link href="/contact" className="no-underline">
              <button className="w-full max-w-[260px] rounded-md border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#321ee6] sm:w-auto cursor-pointer">
                Send us your requirements
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
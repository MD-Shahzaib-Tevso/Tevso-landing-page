import Image from "next/image";

export function HomeFeatureShowcaseSection() {
  return (
    <section className="bg-[#f5f6fa] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 sm:px-14 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="order-1 space-y-8 text-left">
          <h2 className="text-[30px] font-bold leading-tight text-[#1c1c1c] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            Where growing products{" "}
            <br className="hidden lg:block" />
            usually start to break
          </h2>

          <p className="max-w-[520px] text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
            Most software problems do not start with code alone. They start when
            a business grows faster than the systems underneath it.
          </p>

          {/* BULLETS */}
          <ul className="max-w-[560px] space-y-3 text-left text-sm leading-relaxed text-gray-700 sm:text-sm">
            {[
              "Products built quickly now need structure and cleanup",
              "Manual workflows are slowing teams down",
              "Weak architecture is creating delivery risk",
              "Legacy systems need modernization without disruption",
              "Teams want AI value without a full rebuild",
              "Businesses need technical ownership without a full internal department",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4f46e5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <div className="flex justify-start">
            <button className="w-full max-w-[260px] rounded-md bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#4338ca] sm:w-auto sm:max-w-none">
              Discuss your current setup
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 justify-center lg:order-2 hidden lg:flex lg:justify-end">
          <div className="relative h-[320px] w-full max-w-[360px] overflow-hidden rounded-[18px] shadow-xl sm:h-[420px] sm:max-w-[400px] md:h-[480px] lg:h-[520px] lg:max-w-[420px]">
            <Image
              src="/TeamWork.png"
              alt="Team working"
              width={420}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
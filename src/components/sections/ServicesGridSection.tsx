import Image from "next/image";

export function ServicesGridSection() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6">

        <div className="flex w-full flex-col items-center justify-between gap-10 rounded-[20px] bg-[#f3f3f3] p-8 md:flex-row md:p-10">
          
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-[28px] font-bold text-[#2b2b2b] sm:text-[34px]">
              SaaS product development
            </h2>

            <div className="mt-6">
              <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                Problem
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                Products built without long-term architecture are hard to scale
                and expensive to maintain.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                Outcome
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                A stable, scalable product with maintainable code and a clear
                technical foundation.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                What Tevso does
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                From MVPs to mature platforms, we structure, build, and scale
                software products with long-term maintainability in mind. We
                work across full product builds, feature development,
                architecture reviews, and platform restructuring.
              </p>
            </div>

            <button className="mt-6 bg-[#3b32c4] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-[#2a239e] transition">
              Discuss your product
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[50%] flex justify-center md:justify-end">
            <Image
              src="/Rectangle 22357.png" // 👉 add this image
              alt="SaaS Product"
              width={420}
              height={420}
              className="rounded-[16px] object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

export function ServicesGridSection() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="flex w-full flex-col gap-8 rounded-[20px] bg-[#f3f3f3] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <h2 className="text-[24px] font-bold text-[#2b2b2b] sm:text-[32px]">
              SaaS product development
            </h2>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-[#3b32c4]">
                Problem
              </h3>
              <p className="mt-1 text-sm leading-normal text-[#555]">
                Products built without long-term architecture are hard to scale
                and expensive to maintain.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-[#3b32c4]">
                Outcome
              </h3>
              <p className="mt-1 text-sm leading-[1.5] text-[#555]">
                A stable, scalable product with maintainable code and a clear
                technical foundation.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-[#3b32c4]">
                What Tevso does
              </h3>
              <p className="mt-1 text-sm leading-normal text-[#555]">
                From MVPs to mature platforms, we structure, build, and scale
                software products with long-term maintainability in mind. We
                work across full product builds, feature development,
                architecture reviews, and platform restructuring.
              </p>
            </div>

            <div className="mt-5">
              <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0]">
                Discuss your product
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <Image
              src="/Rectangle 22357.png"
              alt="SaaS Product"
              width={700}
              height={500}
              priority
              className="h-[260px] w-full rounded-[16px] object-cover sm:h-[340px] md:h-[320px] lg:h-[350px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

export function ServicesCTASection() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-8 sm:px-14">
        <div className="flex w-full flex-col gap-8 rounded-[20px] bg-[#f3f3f3]  lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* LEFT IMAGE */}
          <div className="order-1 w-full lg:w-1/2">
            <Image
              src="/Rectangle 22357 (1).png"
              alt="Workflow Automation"
              width={700}
              height={500}
              priority
              className="h-[260px] w-full rounded-[16px] object-cover sm:h-[340px] md:h-[320px] lg:h-[350px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 w-full lg:w-1/2">
            <h2 className="text-[24px] font-bold text-[#2b2b2b] sm:text-[32px]">
              Workflow automation
            </h2>

            <div className="mt-6">
              <h3 className="text-base font-semibold text-[#3b32c4]">
                Problem
              </h3>
              <p className="mt-1 text-sm leading-normal text-[#555]">
                Manual, fragmented operations slow teams down and introduce
                errors as volume grows.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-[#3b32c4]">
                Outcome
              </h3>
              <p className="mt-1 text-sm leading-normal text-[#555]">
                Structured digital workflows that give teams speed, visibility,
                and control.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-[#3b32c4]">
                What Tevso does
              </h3>
              <p className="mt-1 text-sm leading-normal] text-[#555]">
                We map existing workflows, identify friction points, and build
                structured automation that replaces manual steps with reliable,
                trackable digital processes. Works across internal operations,
                customer-facing flows, and multi-system integrations.
              </p>
            </div>

            <div className="mt-5">
              <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0]">
                Discuss your workflow
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
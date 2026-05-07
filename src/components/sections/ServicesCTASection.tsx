import Image from "next/image";

export function ServicesCTASection() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6">

        <div className="flex w-full flex-col items-center justify-between gap-10 rounded-[20px] bg-[#f3f3f3] p-8 md:flex-row md:p-10">
          
          {/* LEFT IMAGE */}
          <div className="w-full md:w-[50%] flex justify-center md:justify-start">
            <Image
              src="/Rectangle 22357 (1).png" // 👉 add this image
              alt="Workflow Automation"
              width={420}
              height={420}
              className="rounded-[16px] object-cover"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-[28px] font-bold text-[#2b2b2b] sm:text-[34px]">
              Workflow automation
            </h2>

            <div className="mt-6">
              <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                Problem
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                Manual, fragmented operations slow teams down and introduce
                errors as volume grows.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                Outcome
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                Structured digital workflows that give teams speed, visibility,
                and control.
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                What Tevso does
              </h3>
              <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                We map existing workflows, identify friction points, and build
                structured automation that replaces manual steps with reliable,
                trackable digital processes. Works across internal operations,
                customer-facing flows, and multi-system integrations.
              </p>
            </div>

            <button className="mt-6 bg-[#3b32c4] px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-[#2a239e] transition">
              Discuss your workflow
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
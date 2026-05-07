import { Mail, Phone } from "lucide-react";

export function ContactFormSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-0 lg:py-28">
      {/* PURPLE DECORATIVE SHAPES */}
      <div className="absolute -right-20 -top-16 h-[200px] w-[200px] rounded-bl-[140px] bg-[#3019e8] sm:right-0 sm:top-0 sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px]" />

      <div className="absolute -bottom-16 -left-20 h-[190px] w-[260px] rounded-tr-[140px] bg-[#3019e8] sm:bottom-0 sm:left-0 sm:h-[260px] sm:w-[360px] md:h-[300px] md:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="rounded-[16px] border-[3px] border-[#2412b8] bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 md:border-[5px] md:px-10 lg:rounded-[18px] lg:border-[6px] lg:px-16 lg:py-14">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h2 className="mx-auto max-w-[420px] text-[26px] font-bold leading-tight text-[#333333] sm:text-[32px] md:text-[36px] lg:mx-0 lg:max-w-[360px] lg:leading-[1.15]">
                Let&apos;s discuss what your system needs next
              </h2>

              <p className="mx-auto mt-5 max-w-[460px] text-[14px] leading-[1.75] text-[#333333] sm:mt-6 sm:text-[15px] lg:mx-0 lg:mt-8 lg:max-w-[420px] lg:text-[13px] lg:leading-[1.65]">
                Whether you are building a new product, cleaning up an existing
                platform, adding AI into workflows, or looking for a reliable
                technical partner, we would be glad to explore how Tevso can help.
              </p>

              <div className="mx-auto mt-6 max-w-[360px] space-y-3 sm:mt-8 lg:mx-0">
                <a
                  href="tel:+447400714002"
                  className="flex items-center justify-center gap-3 rounded-md bg-[#f4f4f6] px-4 py-3 text-[14px] text-[#333333] transition hover:bg-[#eeeeff] lg:justify-start lg:bg-transparent lg:px-0 lg:py-0 lg:text-[13px]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#2412e8]" />
                  <span>+ 44 7400714002</span>
                </a>

                <a
                  href="mailto:contact@tevsotech.com"
                  className="flex items-center justify-center gap-3 rounded-md bg-[#f4f4f6] px-4 py-3 text-[14px] text-[#333333] transition hover:bg-[#eeeeff] lg:justify-start lg:bg-transparent lg:px-0 lg:py-0 lg:text-[13px]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#2412e8]" />
                  <span className="break-all">contact@tevsotech.com</span>
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form className="w-full">
              <div className="space-y-5 sm:space-y-6 lg:space-y-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-0 border-b border-[#9e9e9e] bg-transparent px-0 py-3 text-[14px] text-[#333333] outline-none placeholder:text-[#777777] focus:border-[#2412e8] lg:py-2 lg:text-[12px]"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border-0 border-b border-[#9e9e9e] bg-transparent px-0 py-3 text-[14px] text-[#333333] outline-none placeholder:text-[#777777] focus:border-[#2412e8] lg:py-2 lg:text-[12px]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-0 border-b border-[#9e9e9e] bg-transparent px-0 py-3 text-[14px] text-[#333333] outline-none placeholder:text-[#777777] focus:border-[#2412e8] lg:py-2 lg:text-[12px]"
                />

                <select
                  defaultValue=""
                  className="w-full border-0 border-b border-[#9e9e9e] bg-transparent px-0 py-3 text-[14px] text-[#777777] outline-none focus:border-[#2412e8] lg:py-2 lg:text-[12px]"
                >
                  <option value="" disabled>
                    Project stage
                  </option>
                  <option value="idea">Idea stage</option>
                  <option value="mvp">MVP</option>
                  <option value="existing">Existing product</option>
                  <option value="scale">Scaling</option>
                </select>

                <select
                  defaultValue=""
                  className="w-full border-0 border-b border-[#9e9e9e] bg-transparent px-0 py-3 text-[14px] text-[#777777] outline-none focus:border-[#2412e8] lg:py-2 lg:text-[12px]"
                >
                  <option value="" disabled>
                    Budget range
                  </option>
                  <option value="under-5k">Under £5k</option>
                  <option value="5k-10k">£5k - £10k</option>
                  <option value="10k-25k">£10k - £25k</option>
                  <option value="25k-plus">£25k+</option>
                </select>

                <select
                  defaultValue=""
                  className="w-full border-0 border-b border-[#9e9e9e] bg-transparent px-0 py-3 text-[14px] text-[#777777] outline-none focus:border-[#2412e8] lg:py-2 lg:text-[12px]"
                >
                  <option value="" disabled>
                    Preferred timeline
                  </option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2 - 3 months</option>
                  <option value="flexible">Flexible</option>
                </select>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-[#2412e8] py-3.5 text-[13px] font-semibold text-white transition hover:bg-[#1608c5] lg:mt-3 lg:py-3 lg:text-[12px]"
                >
                  Book a discovery call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
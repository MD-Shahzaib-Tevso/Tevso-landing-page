import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export function ContactFormSection() {
  return (
    <section className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden px-6 py-20">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/Background.png"
        alt="Contact form background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* CENTER FORM CARD */}
      <div className="relative z-10 w-full max-w-[1040px] rounded-[18px] border-[6px] border-[#2412b8] bg-white px-[72px] py-[62px]">
        <div className="grid grid-cols-1 items-start gap-[70px] md:grid-cols-[1fr_360px]">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="max-w-[360px] font-['Lato'] text-[32px] font-bold leading-[1.22] tracking-[-0.5px] text-[#333333]">
              Let&apos;s discuss what your system needs next
            </h2>

            <p className="mt-[28px] max-w-[390px] font-['Inter'] text-[14px] font-normal leading-[1.7] text-[#111111]">
              Whether you are building a new product, cleaning up an existing
              platform, adding AI into workflows, or looking for a reliable
              technical partner, we would be glad to explore how Tevso can help.
            </p>

            <div className="mt-[30px] space-y-[18px]">
              <a
                href="tel:+447400714002"
                className="flex items-center gap-[16px] font-['Inter'] text-[14px] font-normal text-[#222222]"
              >
                <Phone className="h-[18px] w-[18px] shrink-0 fill-[#2412e8] text-[#2412e8]" />
                <span>+ 44 7400714002</span>
              </a>

              <a
                href="mailto:contact@tevsotech.com"
                className="flex items-center gap-[16px] font-['Inter'] text-[14px] font-normal text-[#222222]"
              >
                <Mail className="h-[18px] w-[18px] shrink-0 fill-[#2412e8] text-[#2412e8]" />
                <span>contact@tevsotech.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="w-full">
            <div className="space-y-[18px]">
              <input
                type="text"
                placeholder="Name"
                className="h-[32px] w-full border-0 border-b border-[#b7b7b7] bg-transparent px-0 font-['Inter'] text-[12px] text-[#333333] outline-none placeholder:text-[#8f8f8f] focus:border-[#2412e8]"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="h-[32px] w-full border-0 border-b border-[#b7b7b7] bg-transparent px-0 font-['Inter'] text-[12px] text-[#333333] outline-none placeholder:text-[#8f8f8f] focus:border-[#2412e8]"
              />

              <input
                type="email"
                placeholder="Email"
                className="h-[32px] w-full border-0 border-b border-[#b7b7b7] bg-transparent px-0 font-['Inter'] text-[12px] text-[#333333] outline-none placeholder:text-[#8f8f8f] focus:border-[#2412e8]"
              />

              <select
                defaultValue=""
                className="h-[32px] w-full border-0 border-b border-[#b7b7b7] bg-transparent px-0 font-['Inter'] text-[12px] text-[#8f8f8f] outline-none focus:border-[#2412e8]"
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
                className="h-[32px] w-full border-0 border-b border-[#b7b7b7] bg-transparent px-0 font-['Inter'] text-[12px] text-[#8f8f8f] outline-none focus:border-[#2412e8]"
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
                className="h-[32px] w-full border-0 border-b border-[#b7b7b7] bg-transparent px-0 font-['Inter'] text-[12px] text-[#8f8f8f] outline-none focus:border-[#2412e8]"
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
                className="mt-[22px] h-[38px] w-full bg-[#2412e8] font-['Inter'] text-[12px] font-semibold text-white transition hover:bg-[#1608c5]"
              >
                Book a discovery call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
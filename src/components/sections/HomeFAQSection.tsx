import Image from "next/image";

export function HomeFAQSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-14 md:py-16">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 px-5 sm:px-6 md:gap-12 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT IMAGE */}
        <div className="relative h-[240px] w-full overflow-hidden rounded-[14px] shadow-md sm:h-[300px] md:h-[360px] lg:h-[380px] lg:rounded-[16px]">
          <Image
            src="/Rectangle 22354.png"
            alt="AI robot working"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] font-bold leading-tight text-[#333333] sm:text-[34px] md:text-[40px] lg:leading-[1.05]">
            Founder-led{" "}
            <br className="hidden sm:block" />
            technical delivery
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-[1.7] text-[#333333] sm:mt-6 sm:text-[15px] md:mt-8 lg:mx-0">
            Tevso is built around hands-on technical ownership, practical
            decision-making, and long-term delivery thinking. We work closely
            with clients who need more than developers — they need a partner who
            can understand the business, make sound technical decisions, and keep
            delivery moving with structure and accountability.
          </p>

          <div className="mt-6 flex justify-center md:mt-8 lg:justify-start">
            <button className="w-full max-w-[230px] rounded-md bg-[#3924e8] px-6 py-3 text-[12px] font-semibold text-white transition hover:bg-[#2f1fd0] sm:w-auto sm:max-w-none">
              Discuss your project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

export function HomeFAQSection() {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="mx-auto grid max-w-7xl px-8 sm:px-14 grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="hidden lg:block relative h-[450px] overflow-hidden rounded-[14px]">
          <Image
            src="/Rectangle 22354.png"
            alt="AI robot working"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:text-left">
          <h2 className="text-[28px] font-bold leading-tight text-[#333333] sm:text-[34px] md:text-[40px]">
            Founder-led{" "}
            <br className="hidden lg:block" />
            technical delivery
          </h2>

          <p className="mx-auto mt-6 text-sm leading-[1.7] text-[#333333] sm:mt-6 sm:text-[15px]">
            Tevso is built around hands-on technical ownership, practical
            decision-making, and long-term delivery thinking. We work closely
            with clients who need more than developers — they need a partner who
            can understand the business, make sound technical decisions, and keep
            delivery moving with structure and accountability.
          </p>

          <div className="mt-6 flex">
            <Link href="/contact" className="no-underline">
              <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0] cursor-pointer">
                Discuss your project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
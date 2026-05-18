import Image from "next/image";
import Link from "next/link";

const points = [
  "Founder-level ownership and accountability",
  "Practical technical decision-making",
  "Clear communication and transparency",
  "Long-term thinking, not short-term patchwork",
  "AI introduced where it creates measurable value",
  "Support across both new builds and existing systems",
];

export function HomeEngagementSection() {
  return (
    <section className="bg-[#f7f7f7] py-12 sm:py-14 md:py-16 lg:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 px-8 sm:px-14 md:gap-12 lg:grid-cols-[480px_1fr] lg:gap-14">
        {/* LEFT IMAGE */}
        <div className="hidden lg:block relative h-[220px] w-full overflow-hidden rounded-[14px] shadow-md sm:h-[280px] md:h-[320px]">
          <Image
            src="/Rectangle 22338.png"
            alt="Dashboard on laptop"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex h-full flex-col justify-between text-left">
          <div>
            <h2 className="text-[26px] font-bold leading-tight text-[#333333] sm:text-[30px] md:text-[34px] lg:text-[40px]">
              More than a development agency
            </h2>

            <p className="mx-auto mt-4 text-[14px] leading-[1.55] text-[#333333] sm:mt-4 sm:text-[15px]">
              Tevso works as a technical partner, not just a delivery vendor.
              That means we do not only build features — we help shape systems,
              technical decisions, workflows, and architecture so your business
              can grow with less friction.
            </p>

            <ul className="mx-auto mt-4 space-y-2 text-left text-[13px] leading-relaxed text-[#333333] sm:text-[14px]">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#3924e8]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex justify-start">
            <Link href="/how-we-work" className="no-underline">
              <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0] cursor-pointer">
                See how we work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
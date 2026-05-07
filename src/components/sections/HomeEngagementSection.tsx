import Image from "next/image";

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
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 px-5 sm:px-6 md:gap-12 md:px-10 lg:grid-cols-[480px_1fr] lg:gap-14">
        {/* LEFT IMAGE */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] shadow-md sm:h-[280px] md:h-[320px] lg:h-[300px]">
          <Image
            src="/Rectangle 22338.png"
            alt="Dashboard on laptop"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-[26px] font-bold leading-tight text-[#333333] sm:text-[30px] md:text-[34px]">
            More than a development agency
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.7] text-[#333333] sm:mt-5 sm:text-[15px] lg:mx-0">
            Tevso works as a technical partner, not just a delivery vendor. That
            means we do not only build features — we help shape systems,
            technical decisions, workflows, and architecture so your business can
            grow with less friction.
          </p>

          <ul className="mx-auto mt-5 max-w-[560px] space-y-3 text-left text-[13px] leading-relaxed text-[#333333] sm:text-[14px] lg:mx-0">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#3924e8]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="w-full max-w-[220px] rounded-md bg-[#3924e8] px-5 py-3 text-[12px] font-medium text-white transition hover:bg-[#2f1fd0] sm:w-auto sm:max-w-none">
              See how we work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
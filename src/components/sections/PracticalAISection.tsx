import Image from "next/image";

const points = [
  "Founder-level ownership",
  "Practical technical direction",
  "Clear communication and visibility",
  "Scalable thinking from the start",
  "AI enablement tied to real business use",
  "Strong delivery across new and existing systems",
];

export function PracticalAISection() {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-10 sm:px-6 md:px-10 lg:px-0">
      <div className="mx-auto grid max-w-[920px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h2 className="font-['Lato'] text-[28px] font-bold leading-[1.15] text-[#333333] sm:text-[30px] md:text-[32px]">
            Practical AI, not AI for show
          </h2>

          <p className="mt-5 max-w-[390px] font-['Lato'] text-[14px] font-normal leading-[1.45] text-[#333333]">
            We help businesses introduce AI where it creates measurable value
            inside real systems and workflows.
          </p>

          <ul className="mt-5 space-y-[6px]">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 font-['Lato'] text-[14px] leading-[1.15] text-[#333333]"
              >
                <span className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#311DE5]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <button className="mt-6 h-[29px] bg-[#311DE5] px-5 font-['Inter'] text-[10px] font-medium text-white transition hover:bg-[#2717c9]">
            Explore AI enablement
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[260px] w-full overflow-hidden rounded-[8px] sm:h-[300px] md:h-[315px]">
          <Image
            src="/Rectangle 22353 (1).png"
            alt="AI enablement"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
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
    <section className="w-full bg-[#f7f7f7] py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-8 sm:px-14 items-center gap-10 lg:grid-cols-2 md:gap-16">
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h2 className="text-[28px] font-bold text-[#333333] sm:text-[34px] md:text-[40px]">
            Practical AI, not AI for show
          </h2>

          <p className="mt-5 lg:max-w-[390px] text-sm font-normal text-[#333333]">
            We help businesses introduce AI where it creates measurable value
            inside real systems and workflows.
          </p>

          <ul className="mt-5 space-y-[6px]">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-[#333333]"
              >
                <span className="mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#311DE5]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-start">
            <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0]">
              Explore AI enablement
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block relative h-[450px] overflow-hidden rounded-[8px]">
          <Image
            src="/Rectangle 22353 (1).png"
            alt="AI enablement"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
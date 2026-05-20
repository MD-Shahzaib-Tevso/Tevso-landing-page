import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/case-studies/caseStudies";

export function HomeTransformationSection() {
  return (
    <section className="overflow-hidden bg-[#f7f7f7] py-10">
      <div className="mx-auto max-w-7xl px-8 sm:px-14">
        {/* Heading */}
        <h2 className="text-center text-[26px] font-bold leading-tight text-[#333] sm:text-[30px] md:text-[34px] lg:text-[40px]">
          Case studies
        </h2>

        {/* Carousel */}
        <div className="mt-8 w-full overflow-hidden">
          <div className="case-carousel-track flex w-max gap-6 lg:gap-5">
            {CASE_STUDIES.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="w-65 shrink-0 overflow-hidden rounded-xl border border-[#e5e5e5] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)] sm:w-60 md:w-62.5 lg:w-62.5 max-h-90"
              >
                {/* IMAGE */}
                <div className="relative h-44 w-full bg-[#f3f3f3] sm:h-40 md:h-44 lg:h-36">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-4">
                  <h3 className="text-[15px] font-bold leading-snug text-[#3924e8] sm:text-[14px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.7] text-[#555] sm:text-[12px] sm:leading-[1.6] line-clamp-3">
                    {item.description}
                  </p>

                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="mt-4 inline-block text-[13px] font-medium text-[#3924e8] underline sm:text-[12px]"
                  >
                    View More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-8 flex justify-center">
          <Link href="/case-studies" className="no-underline">
            <button className="rounded-md bg-[#3924e8] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2f1fd0] cursor-pointer">
              View all case studies
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .case-carousel-track {
          animation: caseSlideLeft 22s linear infinite;
        }

        .case-carousel-track:hover {
          animation-play-state: paused;
        }

        @keyframes caseSlideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
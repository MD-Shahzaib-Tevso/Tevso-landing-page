import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS } from "@/app/solutions/solutions";

export function ServicesProcessSection() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto w-full max-w-7xl space-y-15 px-8 sm:px-14">
        {SOLUTIONS.map((solution, index) => {
          const reverseLayout = index % 2 !== 0;

          return (
            <div
              id={solution.title.toLowerCase().replace(/\s+/g, "-")} // add this
              key={index}
              className={`scroll-mt-32 flex w-full flex-col gap-8 rounded-[20px] bg-[#f3f3f3] lg:gap-12 ${reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* IMAGE */}
              <div className="order-1 w-full lg:w-1/2">
                <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[360px] lg:h-full lg:min-h-[520px]">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="order-2 w-full lg:w-1/2 flex flex-col justify-between gap-3">
                <h2 className="text-2xl font-bold text-[#2b2b2b] sm:text-3xl">
                  {solution.title}
                </h2>

                {solution.sections.map((item) => (
                  <div key={item.heading} className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[#3b32c4]">
                      {item.heading}
                    </h3>
                    <p className="mt-1 text-base leading-[1.7] text-[#555]">
                      {item.text}
                    </p>
                  </div>
                ))}

                <div>
                  <Link href="/contact" className="no-underline">
                    <button className="rounded-md bg-[#3924e8] px-8 py-4 text-base font-medium text-white transition hover:bg-[#2f1fd0] cursor-pointer capitalize">
                      {solution.button}
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
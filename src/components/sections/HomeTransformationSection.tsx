import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "24 / 7 Digital Veterinary Care Platform",
    image: "/Macbook.png",
    description:
      "White-label platform with portals, consultations, payments, subscriptions, analytics, and reporting — supporting 500k+ users and 50+ clinics.",
  },
  {
    title: "Online Pet Pharmacy Platform",
    image: "/4 3.png",
    description:
      "Structured tenant and guarantor verification with automated workflows, credit checks, and AML support, used by 100+ letting agents.",
  },
  {
    title: "Shipping and Clearing Platform",
    image: "/2 7.png",
    description:
      "Partners wanted to offer energy switching services under their own brand without building complex supplier integrations.",
  },
  {
    title: "AI Marketing Automation Platform",
    image: "/3 3.png",
    description:
      "Partner portals, dashboards, APIs, and supplier automation for multiple UK partners, processing 500k+ completed sales.",
  },
];

const carouselItems = [...caseStudies, ...caseStudies];

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
            {carouselItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="w-[280px] flex-shrink-0 overflow-hidden rounded-[12px] border border-[#e5e5e5] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)] sm:w-[260px] md:w-[270px] lg:w-[260px]"
              >
                {/* IMAGE */}
                <div className="relative h-[190px] w-full bg-[#f3f3f3] sm:h-[170px] md:h-[190px] lg:h-[140px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-5 sm:p-4"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 sm:p-4">
                  <h3 className="text-[15px] font-bold leading-snug text-[#3924e8] sm:text-[14px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.7] text-[#555] sm:text-[12px] sm:leading-[1.6]">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-block text-[13px] font-medium text-[#3924e8] underline sm:text-[12px]"
                  >
                    View More
                  </a>
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
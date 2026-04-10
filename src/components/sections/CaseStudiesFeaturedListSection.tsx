import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  slug: string;
  title: string;
  category: string[];
  description: string;
  challenge: string;
  approach: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "digital-veterinary-care-platform",
    category: ["All", "Web development", "Product design"],
    title: "24/7 digital veterinary care platform",
    description: "Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure. We developed a white-label digital platform that allows clinics to provide round-the-clock virtual consultations under their own brand, connecting pet parents with licensed veterinarians seamlessly.",
    challenge: "Clinics could not scale consultation availability without hiring more staff or building costly technology. They also lacked a unified system for scheduling, payments, and emergency care.",
    approach: "Simple, intuitive, and trust-building experience for pet parents. Clinics get full operational control through branded dashboards with insights and metrics for decision making.",
    image: "/laptop.png",
  },
  {
    slug: "online-pet-pharmacy-platform",
    category: ["All", "Mobile app development", "Web development", "Custom software development"],
    title: "Online pet pharmacy platform",
    description: "Veterinary businesses needed a scalable platform to sell medications online while ensuring compliance. We built a white-label pharmacy platform that manages OTC and prescription medications, logistics, payments, and regulatory workflows.",
    challenge: "Online pharmacy operations are complex due to compliance, tax handling, courier integration, and order automation. Many clinics lacked the technical capability to manage these efficiently.",
    approach: "Frictionless checkout experience, prescription upload and validation, real-time order tracking, and pharmacy dashboards for operational insights.",
    image: "/laptop.png",
  },
  {
    slug: "energy-and-utility-switching-platform",
    category: ["All", "Custom software development", "Product design"],
    title: "Energy and utility switching platform",
    description: "Partners wanted to offer energy switching services under their own brand without building complex supplier integrations. We created a white-label platform that automates switching and partner onboarding.",
    challenge: "Manual workflows slowed sales and caused errors. Integrating with multiple suppliers was technically challenging.",
    approach: "Guided switching journey for users with clear steps. Partner dashboards provide insights, analytics, and performance tracking.",
    image: "/laptop.png",
  },
];

interface CaseStudiesFeaturedListSectionProps {
  activeTab: string;
}

export function CaseStudiesFeaturedListSection({ activeTab }: CaseStudiesFeaturedListSectionProps) {
  const filteredStudies = caseStudies.filter((item) => item.category.includes(activeTab));

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-16 px-6 sm:px-8 lg:px-12">
        {filteredStudies.map((item, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={item.slug}
              className="grid grid-cols-1 items-stretch gap-10 rounded-[48px] border-[3px] border-white bg-gradient-to-br from-[#EAEAEA] to-[#DBDBDB]/50 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] lg:grid-cols-2 lg:gap-16 lg:p-4"
            >
              {/* Image side */}
              <div className={`${imageFirst ? "order-1 lg:order-1" : "order-1 lg:order-2"} relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[40px] bg-[#E8E8E8]`}>
                <div className="relative h-full w-full p-8">
                   <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                   />
                </div>
              </div>

              {/* Content side */}
              <div className={`${imageFirst ? "order-2 lg:order-2" : "order-2 lg:order-1"} flex flex-col justify-center py-8 pr-12 pl-4 lg:py-12`}>
                <h3 className="font-heading text-[36px] font-bold leading-[1.1] text-[#311EE6] md:text-[46px]">
                  {item.title}
                </h3>
                <p className="mt-8 font-body text-[15px] leading-relaxed text-[#444444]">
                  {item.description}
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="font-heading text-[20px] font-bold text-[#311EE6]">Client challenge</p>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-[#444444]">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-[20px] font-bold text-[#311EE6]">Product design approach</p>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-[#444444]">
                      {item.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <Link
                    className="inline-flex items-center justify-center rounded-[4px] bg-[#311EE6] px-10 py-4 font-body text-[16px] font-semibold text-white transition-all hover:bg-[#311EE6]/90"
                    href={`/case-studies/${item.slug}`}
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

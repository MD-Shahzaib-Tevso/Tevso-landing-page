import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    title: "SaaS product development",
    button: "Discuss your product",
    image: "/Rectangle 22357.png",
    sections: [
      {
        heading: "Problem",
        text: "Products built without long-term architecture are hard to scale and expensive to maintain.",
      },
      {
        heading: "Outcome",
        text: "A stable, scalable product with maintainable code and a clear technical foundation.",
      },
      {
        heading: "What Tevso does",
        text: "From MVPs to mature platforms, we structure, build, and scale software products with long-term maintainability in mind. We work across full product builds, feature development, architecture reviews, and platform restructuring.",
      },
    ],
  },
  {
    title: "Workflow automation",
    button: "Discuss your workflow",
    image: "/Rectangle 22357 (1).png",
    sections: [
      {
        heading: "Problem",
        text: " Manual, fragmented operations slow teams down and introduce errors as volume grows.",
      },
      {
        heading: "Outcome",
        text: " Structured digital workflows that give teams speed, visibility, and control.",
      },
      {
        heading: "What Tevso does",
        text: "We map existing workflows, identify friction points, and build structured automation that replaces manual steps with reliable, trackable digital processes. Works across internal operations, customer-facing flows, and multi-system integrations.",
      },
    ],
  },

  {
    title: "Backend and API engineering",
    button: "Discuss your backend",
    image: "/Rectangle 22357 (2).png",
    sections: [
      {
        heading: "Problem",
        text: "Weak backend foundations create instability, security risk, and slow feature delivery.",
      },
      {
        heading: "Outcome",
        text: "Reliable, well-structured backend systems that scale with product and team growth.",
      },
      {
        heading: "What Tevso does",
        text: "We design and build backend systems, APIs, and integration layers that are secure, testable, and built for the long term. Whether greenfield or reworking an existing mess, we bring structure and reliability to the foundation of your product.",
      },
    ],
  },
  {
    title: "SaaS product development",
    button: "Discuss your product",
    image: "/Rectangle 22357 (6).png",
    sections: [
      {
        heading: "Problem",
        text: "Products built without long-term architecture are hard to scale and expensive to maintain.",
      },
      {
        heading: "Outcome",
        text: "A stable, scalable product with maintainable code and a clear technical foundation.",
      },
      {
        heading: "What Tevso does",
        text: "From MVPs to mature platforms, we structure, build, and scale software products with long-term maintainability in mind. We work across full product builds, feature development, architecture reviews, and platform restructuring.",
      },
    ],
  },
  {
    title: "Workflow automation",
    button: "Discuss your workflow",
    image: "/Rectangle 22357 (5).png",
    sections: [
      {
        heading: "Problem",
        text: "Manual, fragmented operations slow teams down and introduce errors as volume grows.",
      },
      {
        heading: "Outcome",
        text: "Structured digital workflows that give teams speed, visibility, and control.",
      },
      {
        heading: "What Tevso does",
        text: "We map existing workflows, identify friction points, and build structured automation that replaces manual steps with reliable, trackable digital processes. Works across internal operations, customer-facing flows, and multi-system integrations.",
      },
    ],
  },
  {
    title: "AI Marketing Automation Platform",
    button: "Discuss your marketing",
    image: "/Rectangle 22357 (4).png",
    sections: [
      {
        heading: "Problem",
        text: "Traditional marketing lacked personalization, required manual effort, and was difficult to scale.",
      },
      {
        heading: "Outcome",
        text: "Personalized campaigns generated from user behavior and engagement data to increase conversions and revenue.",
      },
      {
        heading: "What Tevso does",
        text: "We build dynamic campaign systems with intuitive builders, personalized user segments, automation flows, and cost control for AI usage.",
      },
    ],
  },
  {
    title: "Shipping and Clearing Platform",
    button: "Discuss your logistics",
    image: "/Rectangle 22357 (3).png",
    sections: [
      {
        heading: "Problem",
        text: "Fragmented operations and lack of real-time visibility caused delays and financial errors.",
      },
      {
        heading: "Outcome",
        text: "A centralized platform for shipping, clearing, logistics workflows, financial visibility, and operational control.",
      },
      {
        heading: "What Tevso does",
        text: "We design workflow-based platforms with dashboards, approvals, reporting, and real-time visibility for complex operations.",
      },
    ],
  },
];

export function ServicesProcessSection() {
  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="mx-auto w-full max-w-7xl space-y-15 px-8 sm:px-14">
        {servicesData.map((service, index) => {
          const reverseLayout = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex w-full flex-col gap-8 rounded-[20px] bg-[#f3f3f3] lg:gap-12 ${reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* IMAGE */}
              <div className="order-1 w-full lg:w-1/2">
                <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[360px] lg:h-full lg:min-h-[520px]">
                  <Image
                    src={service.image}
                    alt={service.title}
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
                  {service.title}
                </h2>

                {service.sections.map((item) => (
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
                    <button className="rounded-md bg-[#3924e8] px-8 py-4 text-base font-medium text-white transition hover:bg-[#2f1fd0] cursor-pointer">
                      {service.button}
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
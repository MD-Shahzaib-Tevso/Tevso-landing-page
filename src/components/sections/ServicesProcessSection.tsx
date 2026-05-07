import Image from "next/image";

const servicesData = [
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
    <section className="bg-[#f5f5f5] py-20">
      <div className="mx-auto w-full max-w-[1180px] space-y-10 px-6">
        {servicesData.map((service, index) => {
          const reverseLayout = index % 2 !== 0;

          return (
            <div
              key={service.title}
              className={`flex w-full flex-col items-center justify-between gap-10 rounded-[20px] bg-[#f3f3f3] p-8 md:p-10 ${
                reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* CONTENT */}
              <div className="w-full md:w-[50%]">
                <h2 className="text-[28px] font-bold text-[#2b2b2b] sm:text-[34px]">
                  {service.title}
                </h2>

                {service.sections.map((item) => (
                  <div key={item.heading} className="mt-5">
                    <h3 className="text-[13px] font-semibold text-[#3b32c4]">
                      {item.heading}
                    </h3>
                    <p className="mt-1 text-[13px] leading-[1.5] text-[#555]">
                      {item.text}
                    </p>
                  </div>
                ))}

                <button className="mt-6 bg-[#3b32c4] px-5 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#2a239e]">
                  {service.button}
                </button>
              </div>

              {/* IMAGE */}
              <div
                className={`flex w-full justify-center md:w-[50%] ${
                  reverseLayout ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={420}
                  height={420}
                  className="h-[320px] w-full max-w-[420px] rounded-[16px] object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
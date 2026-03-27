import Link from "next/link";

const caseStudies = [
  {
    slug: "digital-veterinary-care-platform",
    title: "24/7 digital veterinary care platform",
    challenge:
      "Clinics could not scale consultation availability without hiring additional staff or building costly technology. They also lacked a unified system for scheduling and payments.",
    approach:
      "Simple, intuitive, trust-building workflows for pet parents and clinics, supported by branded dashboards with actionable insights.",
  },
  {
    slug: "online-pet-pharmacy-platform",
    title: "Online pet pharmacy platform",
    challenge:
      "Online pharmacy operations are complex due to compliance, tax handling, and courier integrations. Many clinics lacked technical capability to manage these efficiently.",
    approach:
      "Frictionless checkout experience, prescription upload and validation, real-time order tracking, and operational dashboards.",
  },
  {
    slug: "energy-and-utility-switching-platform",
    title: "Energy and utility switching platform",
    challenge:
      "Manual workflows slowed sales and increased operational errors. Integrating with multiple suppliers introduced additional complexity.",
    approach:
      "Guided switching journey with clear user steps, partner dashboards, and analytics for performance tracking.",
  },
];

export function CaseStudiesFeaturedListSection() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        {caseStudies.map((item, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={item.slug}
              className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:grid-cols-2"
            >
              <div className={imageFirst ? "order-1" : "order-2"}>
                <div className="h-72 w-full rounded-2xl bg-slate-300 lg:h-full" />
              </div>

              <div className={imageFirst ? "order-2" : "order-1"}>
                <h3 className="font-heading text-5xl leading-tight text-brand">{item.title}</h3>
                <p className="mt-4 font-body text-sm leading-6 text-slate-600">
                  Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure. We developed a
                  white-label digital platform that allows clinics to provide round-the-clock virtual consultations.
                </p>

                <p className="mt-4 font-heading text-lg text-brand">Client challenge</p>
                <p className="mt-2 font-body text-sm leading-6 text-slate-600">{item.challenge}</p>

                <p className="mt-4 font-heading text-lg text-brand">Product design approach</p>
                <p className="mt-2 font-body text-sm leading-6 text-slate-600">{item.approach}</p>

                <Link
                  className="mt-6 inline-flex rounded-sm bg-brand px-5 py-3 font-body text-sm font-semibold text-white"
                  href={`/case-studies/${item.slug}`}
                >
                  View Case Study
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

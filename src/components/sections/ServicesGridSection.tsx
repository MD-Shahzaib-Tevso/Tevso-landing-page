import Link from "next/link";

const services = [
  { number: "01", title: "Web development", slug: "web-development", featured: true },
  { number: "02", title: "UI / UX design", slug: "ui-ux-design", featured: false },
  { number: "03", title: "MVP launch", slug: "mvp-launch", featured: false },
  { number: "04", title: "Product traction", slug: "product-traction", featured: false },
  { number: "05", title: "Scaling infrastructure", slug: "scaling-infrastructure", featured: false },
];

export function ServicesGridSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className={
                service.featured
                  ? "rounded-2xl bg-brand p-6 text-white shadow-lg"
                  : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={
                    service.featured
                      ? "h-12 w-12 rounded-full bg-white/25"
                      : "h-12 w-12 rounded-full bg-brand/15"
                  }
                />
                <p className={service.featured ? "font-heading text-5xl text-white/80" : "font-heading text-5xl text-slate-300"}>
                  {service.number}
                </p>
              </div>

              <h2 className={service.featured ? "mt-6 font-heading text-2xl text-white" : "mt-6 font-heading text-2xl text-slate-900"}>
                {service.title}
              </h2>
              <p className={service.featured ? "mt-3 font-body text-sm leading-6 text-white/80" : "mt-3 font-body text-sm leading-6 text-slate-600"}>
                Intrinsically redefine competitive e-business before adaptive potentiality. Professionally build progressive users with
                practical execution.
              </p>

              <Link
                className={
                  service.featured
                    ? "mt-6 inline-flex rounded-sm bg-white px-4 py-2 font-body text-sm font-semibold text-brand"
                    : "mt-6 inline-flex rounded-sm bg-brand px-4 py-2 font-body text-sm font-semibold text-white"
                }
                href={`/services/${service.slug}`}
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Laptop, PenTool, Rocket, LineChart, Server } from "lucide-react";

const services = [
  { id: "01", title: "Web development", slug: "web-development", icon: <Laptop className="w-6 h-6 text-white" /> },
  { id: "02", title: "UI / UX design", slug: "ui-ux-design", icon: <PenTool className="w-6 h-6 text-white" /> },
  { id: "03", title: "MVP launch", slug: "mvp-launch", icon: <Rocket className="w-6 h-6 text-white" /> },
  { id: "04", title: "Product traction", slug: "product-traction", icon: <LineChart className="w-6 h-6 text-white" /> },
  { id: "05", title: "Scaling infrastructure", slug: "scaling-infrastructure", icon: <Server className="w-6 h-6 text-white" /> },
];

export function ServicesGridSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 group hover:bg-gradient-to-br hover:from-[#3B32C4] hover:to-[#251E91]"
            >
              {/* Decorative Corner Shape (hidden on white, shown on blue) */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                {/* Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#A594FD] group-hover:bg-white/20 transition-colors shadow-inner">
                  {service.icon}
                </div>
                {/* Service Number Background */}
                <span className="font-heading text-4xl font-bold text-[#F1F5F9] group-hover:text-white/10 transition-colors">
                  {service.id}
                </span>
              </div>

              <h2 className="font-heading text-2xl font-bold text-[#020617] group-hover:text-white transition-colors mb-4 relative z-10">
                {service.title}
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-[#64748B] group-hover:text-white/80 transition-colors mb-8 relative z-10">
                Intrinsically redefine competitive e-business before adaptive potentiality.
                Professionally build progressive users with practical execution.
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center justify-center rounded-md bg-[#3B32C4] group-hover:bg-white px-6 py-2.5 font-body text-sm font-bold text-white group-hover:text-[#3B32C4] transition-all active:scale-[0.98] relative z-10"
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

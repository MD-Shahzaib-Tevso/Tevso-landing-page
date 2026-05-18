import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ServiceDetailsSidebar() {
  const services = [
    { title: "Web development", slug: "web-development" },
    { title: "UI / UX design", slug: "ui-ux-design" },
    { title: "MVP launch", slug: "mvp-launch" },
    { title: "Product traction", slug: "product-traction" },
    { title: "Scaling infrastructure", slug: "scaling-infrastructure" },
  ];

  return (
    <aside className="flex flex-col h-full space-y-8">
      {/* All services list */}
      <div className="bg-[#F8FAFC] p-8 border border-[#E2E8F0] flex-shrink-0">
        <h3 className="font-heading text-xl font-bold text-[#3B32C4] mb-6">
          All services
        </h3>
        <nav className="space-y-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/solutions/${service.slug}`}
              className="group flex items-center justify-between bg-white px-5 py-4 border border-[#E2E8F0] transition-all hover:border-[#3B32C4] hover:shadow-md"
            >
              <span className="font-body text-[14px] font-semibold text-[#64748B] transition-colors group-hover:text-[#3B32C4]">
                {service.title}
              </span>
              <ArrowRight className="w-4 h-4 text-[#D1D5DB] transition-all group-hover:text-[#3B32C4] group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar CTA */}
      <div className="relative overflow-hidden bg-[#020617] p-10 text-center flex-grow flex flex-col justify-center items-center group min-h-[400px]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sidebar-cta-bg.png" // Placeholder URL
            alt="Sidebar CTA Background"
            fill
            className="object-cover object-center opacity-40 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-1" />
        </div>

        {/* Decorative Diagonal Overlays */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-50 overflow-hidden">
           <div className="absolute -left-[30%] top-0 h-full w-[80%] -skew-x-12 bg-[#3B32C4]/40" />
           <div className="absolute -right-[30%] bottom-0 h-[60%] w-[80%] -skew-x-12 bg-[#3B32C4]/40" />
        </div>

        <div className="relative z-10 space-y-8 flex flex-col items-center">
          <p className="font-body text-[12px] font-bold text-white uppercase tracking-widest">
            Contact us now
          </p>
          <h3 className="font-heading text-4xl font-bold text-white leading-tight">
            You Need<br /> Help?
          </h3>
          <button className="inline-flex items-center justify-center bg-[#3B32C4] px-8 py-3 font-body text-[14px] font-semibold text-white transition-all hover:bg-[#3B32C4]/90 active:scale-[0.98] shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </aside>
  );
}

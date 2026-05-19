import { CaseStudy } from "@/interfaces";
import { LayoutDashboard } from "lucide-react";

interface Props {
  study: CaseStudy;
}

export function CaseStudiesDetailsSolutionSection({ study }: Props) {
  return (
    <section className="mx-auto max-w-7xl space-y-10">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#311EE6] md:text-4xl">
        Solution delivered
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:px-8">
        {study.Solution.map((card, i) => {
          return (
            <article
              key={i}
              className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 text-[#020617] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#311EE6] hover:bg-[#311EE6] hover:shadow-2xl md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* bottom diagonal overlay */}
              <div className="absolute h-150 w-147.5 -bottom-120 right-0 -left-20 rounded-[350px] bg-white/10" />
              <div className="absolute h-150 w-147.5 -bottom-120 -right-20 rounded-[350px] bg-white/10" />

              {/* bottom circles */}
              <div className="absolute -bottom-2 -right-10 h-20 w-20 rounded-full bg-white/50" />
              <div className="absolute -bottom-10 -right-2 h-20 w-20 rounded-full bg-white/50" />


              {/* header */}
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#311EE6]/10 transition-all duration-500 group-hover:bg-white">
                  <LayoutDashboard className="h-6 w-6 text-[#311EE6] transition-colors duration-500 group-hover:text-[#311EE6]" />
                </div>

                <span className="font-heading text-4xl font-bold tracking-tight text-[#311EE6]/20 transition-all duration-500 group-hover:text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* content */}
              <div className="relative z-10 space-y-2">
                <h3 className="min-h-14 font-heading text-[18px] font-bold leading-tight transition-colors duration-500 group-hover:text-white">
                  {card.title}
                </h3>

                <p className="text-[13px] leading-relaxed text-[#64748B] transition-colors duration-500 group-hover:text-white/85">
                  {card.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
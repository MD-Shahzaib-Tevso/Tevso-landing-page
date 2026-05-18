import { CaseStudy } from "@/interfaces";

interface Props {
  study: CaseStudy;
}

export function CaseStudiesDetailsImpactSection({ study }: Props) {
  return (
    <section className="max-w-7xl space-y-10">
      {/* Product design approach */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Product design approach
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
          {study.approach}
        </p>
      </div>

      {/* Development & testing */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Development & testing
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
          {study.Development}
        </p>
      </div>

      {/* Business impact & results */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Business impact & results
        </h3>
        <ul className="space-y-2 list-none">
          {study.Solution.map((sol, i) => {
            return (
              <li key={i} className="font-body text-[15px] leading-relaxed text-[#64748B] flex items-start">
                <span className="mr-2 text-[#64748B] mt-1 text-[10px]">●</span>
                {sol.title}
              </li>
            )
          })}
        </ul>
      </div>

      {/* Strategic value */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Strategic value
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
          {study.Results}
        </p>
      </div>
    </section>
  );
}

export function CaseStudiesDetailsImpactSection() {
  return (
    <section className="max-w-4xl mx-auto px-2 space-y-10">
      {/* Product design approach */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Product design approach
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
          Simple, intuitive, and trust-building experience for pet parents. Clinics get full operational control through branded dashboards with insights and metrics for decision making.
        </p>
      </div>

      {/* Development & testing */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Development & testing
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
          Laravel backend, Angular frontend, WebSockets for real-time communication, Twilio for video consultations, multiple payment gateways. Load tested for 500,000+ users to ensure reliability.
        </p>
      </div>

      {/* Business impact & results */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Business impact & results
        </h3>
        <ul className="space-y-2 list-none">
          <li className="font-body text-[15px] leading-relaxed text-[#64748B] flex items-start">
            <span className="mr-2 text-[#64748B] mt-1 text-[10px]">●</span>
            500,000+ active users and 50+ clinics onboarded
          </li>
          <li className="font-body text-[15px] leading-relaxed text-[#64748B] flex items-start">
            <span className="mr-2 text-[#64748B] mt-1 text-[10px]">●</span>
            $100,000+ monthly recurring revenue
          </li>
          <li className="font-body text-[15px] leading-relaxed text-[#64748B] flex items-start">
            <span className="mr-2 text-[#64748B] mt-1 text-[10px]">●</span>
            Increased consultation volume and service accessibility
          </li>
          <li className="font-body text-[15px] leading-relaxed text-[#64748B] flex items-start">
            <span className="mr-2 text-[#64748B] mt-1 text-[10px]">●</span>
            Reduced dependency on physical visits, saving operational costs
          </li>
        </ul>
      </div>

      {/* Strategic value */}
      <div className="space-y-3">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#311EE6] tracking-tight">
          Strategic value
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
          Clinics transformed into digital-first care providers, launched services quickly, and generated new revenue streams efficiently.
        </p>
      </div>
    </section>
  );
}

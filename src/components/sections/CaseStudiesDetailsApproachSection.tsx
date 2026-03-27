export function CaseStudiesDetailsApproachSection() {
  const approaches = [
    {
      title: "Product Design Approach",
      description:
        "Simple, intuitive, and trust-building experience for pet parents and clinics, supported by branded dashboards with actionable insights and metrics for decision making.",
    },
    {
      title: "Development & Testing",
      description:
        "Laravel backend, Angular frontend, WebSockets for real-time communication, Twilio for video consultations, multiple payment gateways. Load tested for 500,000+ concurrent users to ensure reliability.",
    },
    {
      title: "Business Impact & Results",
      description:
        "500,000+ active users and 50+ clinics onboarded. $100,000+ monthly recurring revenue. Increased consultation volume and service accessibility. Reduced dependency on physical visits, saving operational costs.",
      highlights: [
        "500,000+ active users and 50+ clinics onboarded",
        "$100,000+ monthly recurring revenue",
        "Increased consultation volume and service accessibility",
        "Reduced dependency on physical visits, saving operational costs",
      ],
    },
    {
      title: "Strategic Value",
      description:
        "Clinics transformed their digital-first care providers, launched services quickly, and generated new revenue streams efficiently.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-12">
          {approaches.map((approach, index) => (
            <div key={index}>
              <h2 className="font-heading text-3xl font-bold text-brand">
                {approach.title}
              </h2>
              <p className="mt-4 font-body text-sm leading-7 text-slate-600">
                {approach.description}
              </p>

              {approach.highlights && (
                <ul className="mt-4 space-y-2">
                  {approach.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      <span className="font-body text-sm text-slate-700">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

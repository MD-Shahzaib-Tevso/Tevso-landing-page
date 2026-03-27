export function CaseStudiesDetailsSolutionSection() {
  const solutions = [
    {
      number: "01",
      title: "Real-time video and audio consultations",
      description:
        "Connect instantly via video and audio with expert veterinarians for real-time communication without delays.",
    },
    {
      number: "02",
      title: "Automated ambulance dispatch for emergencies",
      description:
        "Uses GPS to track every ambulance in the fleet in real-time.",
    },
    {
      number: "03",
      title: "Secure payment and subscription handling",
      description:
        "Automatically handles failed payments with retry logic and notifications to prevent service interruption.",
    },
    {
      number: "04",
      title: "Automated ambulance dispatch for emergencies",
      description:
        "Real-time overview of appointments, patient records, and pending follow-ups.",
    },
    {
      number: "05",
      title: "Invoicing, analytics, and reporting dashboards",
      description:
        "Customizable email and SMS triggers that remind pet owners of upcoming appointments and service balances without manual staff intervention.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold text-brand">
          Solution Delivered
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className={`rounded-2xl p-6 transition-all ${
                index === 0
                  ? "relative overflow-hidden bg-brand text-white shadow-lg"
                  : "border border-slate-200 bg-white"
              }`}
            >
              {/* Decorative corner element for featured card */}
              {index === 0 && (
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/10" />
              )}

              <div className={`relative text-5xl font-bold ${index === 0 ? "text-white/60" : "text-slate-300"}`}>
                {solution.number}
              </div>

              <h3
                className={`mt-4 font-heading text-lg font-bold ${
                  index === 0 ? "text-white" : "text-slate-900"
                }`}
              >
                {solution.title}
              </h3>

              <p
                className={`mt-3 font-body text-sm leading-6 ${
                  index === 0 ? "text-white/90" : "text-slate-600"
                }`}
              >
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailsOverviewSection() {
  const features = [
    "Up siri intention on dependent questions",
    "Surrounded affording favourable",
    "Sed ut perspiciatis unde omnis iste status",
    "Special Careness Risk Free",
    "Blessed Jauctor Calibr est volume are beguiled",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        {/* Left side image placeholder */}
        <div className="flex-shrink-0 lg:w-1/2">
          <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300" />
        </div>

        {/* Right side content */}
        <div className="flex h-full flex-col justify-start lg:w-1/2">
          <h2 className="font-heading text-3xl font-bold text-slate-900">
            Web Development
          </h2>
          
          <p className="mt-4 font-body text-sm leading-7 text-slate-600">
            Globally optimize highly efficient solution whereas open-source application.
            Completely strategize quality internal or external sources for virtual e-business.
            Phosfluorescently re-engineer enterprise markets via value-added networks.
            Seamlessly restore inexpensive e-markets via a-vis corporate intellectual capital.
            Holistically reinvent compelling niche markets via pervasive strategy.
          </p>

          <p className="mt-4 font-body text-sm leading-7 text-slate-600">
            Authoritatively scale business meta-services before client-based technologies.
            Collaboratively strategize synergistic scenarios rather than flexible action items.
            Continually deliver convergence via mission-critical infrastructures.
          </p>

          {/* Features list */}
          <div className="mt-8 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                <span className="font-body text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

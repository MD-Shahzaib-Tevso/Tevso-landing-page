export function ServiceDetailsWorkSection() {
  const features = [
    "Up siri intention on dependent questions",
    "Surrounded affording favourable",
    "Sed ut perspiciatis unde omnis iste status",
    "Special Careness Risk Free",
    "Blessed Jauctor Calibr est volume are beguiled",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold text-brand">
          We Serve The Best Work
        </h2>

        <div className="mt-8 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
              <span className="font-body text-sm text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

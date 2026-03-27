const capabilities = [
  "Big data analysis",
  "High quality security",
  "24/7 online support",
  "24/7 support team",
  "Business improvement",
  "Easy solutions",
];

export function AboutCapabilitiesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-5xl leading-tight text-brand">We deal with the aspects IT services</h2>
          <p className="mt-4 max-w-lg font-body text-sm leading-7 text-slate-600">
            Collaboratively engineer user-friendly supply chains and cross-unit imperatives. Authoritatively fabricate competitive resources
            and holistic outcomes.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] text-white">✓</span>
                <p className="font-body text-sm text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="h-[430px] rounded-xl bg-slate-300" />
          <div className="absolute -right-4 top-1/2 h-24 w-6 -translate-y-1/2 bg-brand" />
        </div>
      </div>
    </section>
  );
}

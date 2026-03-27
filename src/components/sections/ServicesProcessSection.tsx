const steps = [
  { id: "01", title: "Select a project" },
  { id: "02", title: "Project analysis" },
  { id: "03", title: "Plan execute" },
  { id: "04", title: "Deliver result" },
];

export function ServicesProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center font-heading text-5xl text-brand">How to work it !</h2>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 md:block" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.id} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="absolute -top-5 left-6 grid h-10 w-10 place-items-center rounded-full bg-brand font-heading text-sm text-white">
                  {step.id}
                </div>
                <h3 className="mt-5 font-heading text-2xl text-brand">{step.title}</h3>
                <p className="mt-4 font-body text-sm leading-6 text-slate-600">
                  Continue scale empowered metrics with cost effective innovation.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

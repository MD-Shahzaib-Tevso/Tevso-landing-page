const benefits = [
  {
    title: "Project scaled solutions",
    description: "A concise placeholder line describing strategy, delivery, and measurable outcomes.",
  },
  {
    title: "Dedicated development teams",
    description: "A concise placeholder line describing strategy, delivery, and measurable outcomes.",
  },
  {
    title: "Product innovation partnerships",
    description: "A concise placeholder line describing strategy, delivery, and measurable outcomes.",
  },
  {
    title: "Digital transformation solutions",
    description: "A concise placeholder line describing strategy, delivery, and measurable outcomes.",
  },
];

export function HomeEngagementSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-2">
        <div className="h-[460px] rounded-2xl bg-slate-200" />
        <div>
          <h2 className="font-heading text-4xl leading-tight text-slate-900">Customized engagement & seamless delivery</h2>
          <div className="mt-8 space-y-6">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="border-b border-slate-200 pb-4">
                <h3 className="font-heading text-lg text-brand">{benefit.title}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
          <button className="mt-6 rounded-md bg-brand px-5 py-3 font-body text-sm font-semibold text-white">Book a Consultation</button>
        </div>
      </div>
    </section>
  );
}

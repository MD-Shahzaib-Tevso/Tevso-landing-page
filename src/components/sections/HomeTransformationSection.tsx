const transformationItems = [
  "Strategic product innovation",
  "Technical excellence on demand",
  "Data driven growth marketing",
  "Scalable business leadership",
];

export function HomeTransformationSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-heading text-4xl leading-tight text-slate-900">Elevate your digital transformation journey</h2>
          <button className="rounded-md bg-brand px-4 py-2 font-body text-sm font-semibold text-white">Book a Call</button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {transformationItems.map((item) => (
            <article key={item} className="relative h-48 overflow-hidden rounded-xl bg-slate-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-4 left-4 right-4 font-heading text-lg text-white">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const categories = [
  "All",
  "Web development",
  "Mobile app development",
  "Custom software development",
  "Product design",
];

export function CaseStudiesIntroSection() {
  return (
    <section className="bg-slate-50 pt-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="max-w-2xl font-heading text-5xl leading-tight text-brand">Core digital transformation & technology services</h2>
          <button className="rounded-md bg-brand px-5 py-3 font-body text-sm font-semibold text-white">Transform With Tevso</button>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 border-b border-slate-200 pb-3">
          {categories.map((category, index) => (
            <button
              key={category}
              className={
                index === 0
                  ? "border-b-2 border-brand pb-2 font-body text-sm font-semibold text-brand"
                  : "pb-2 font-body text-sm text-slate-600"
              }
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

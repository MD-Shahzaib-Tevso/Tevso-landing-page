const stats = [
  { value: "18+", label: "Projects Delivered" },
  { value: "10+", label: "Active Clients" },
  { value: "50k+", label: "Lines of Code" },
  { value: "10+", label: "Engineers & Designers" },
];

export function HomeStatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-heading text-2xl text-brand">{stat.value}</p>
              <p className="mt-1 font-body text-sm text-slate-700">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
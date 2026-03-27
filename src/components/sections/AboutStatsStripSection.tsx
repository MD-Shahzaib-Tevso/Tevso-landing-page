const stats = [
  { value: "18+", label: "Years innovation leadership" },
  { value: "200+", label: "Projects globally delivered" },
  { value: "50+", label: "Experts creative minds" },
];

export function AboutStatsStripSection() {
  return (
    <section className="bg-[#1f1f25] py-8 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.value}>
            <p className="font-heading text-4xl">{stat.value}</p>
            <p className="mt-1 font-body text-sm text-white/80">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

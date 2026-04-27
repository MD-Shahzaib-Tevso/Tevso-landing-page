const stats = [
  { value: "18+ Years", label: "Innovation leadership" },
  { value: "200+ Projects", label: "Globally delivered" },
  { value: "50+ Experts", label: "Creative minds" },
];

export function AboutStatsStripSection() {
  return (
    <section className="relative overflow-hidden bg-[#252525] py-10 text-white">
      {/* Left triangle shape */}
      <div className="absolute left-0 top-0 h-full w-[64px] bg-[#3D2BFF] [clip-path:polygon(0_0,100%_50%,0_100%)]" />

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center sm:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.value}
            className="flex flex-col items-center justify-center px-6 py-4 text-center"
          >
            <h3 className="font-['Raleway'] text-[32px] font-bold leading-[38px] text-white md:text-[34px]">
              {stat.value}
            </h3>
            <p className="mt-2 font-['Raleway'] text-[18px] font-medium leading-[28px] text-white">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
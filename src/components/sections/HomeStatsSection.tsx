const stats = [
  {
    value: "18+",
    label: "Project delivered",
    description: "Follow a hashtag growth total posts, videos and images."
  },
  {
    value: "10+",
    label: "Active clients",
    description: "Follow a hashtag growth total posts, videos and images."
  },
  {
    value: "50k+",
    label: "Lines of code",
    description: "Follow a hashtag growth total posts, videos and images."
  },
  {
    value: "10+",
    label: "Engineers & designers",
    description: "Follow a hashtag growth total posts, videos and images."
  },
];

export function HomeStatsSection() {
  return (
    <section className="bg-slate-50/40 py-24">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-[0px_4px_14px_0px_#00000040] border border-[#D2D2D4] transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <span className="font-['Raleway'] font-semibold text-[40px] leading-[100%] tracking-[0%] tracking-tight text-[#2c28d8]">
                {stat.value}
              </span>
              <h3 className="mt-4 font-['Raleway'] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#222222]">
                {stat.label}
              </h3>
              <p className="mt-3 font-['Lato'] font-normal text-[18px] leading-[100%] tracking-[0%] text-center">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
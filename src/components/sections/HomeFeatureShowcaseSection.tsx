export function HomeFeatureShowcaseSection() {
  return (
    <section className="bg-brand py-16 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="mx-auto h-64 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <div className="mb-4 h-6 w-40 rounded bg-white/20" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded bg-white/20" />
              <div className="h-28 rounded bg-white/20" />
              <div className="col-span-2 h-20 rounded bg-white/20" />
            </div>
          </div>
        </div>
        <div className="order-1 space-y-4 lg:order-2">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-white/70">The New Era of Tevso</p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">Turning complex data into actionable insights</h2>
          <p className="max-w-xl font-body text-sm leading-7 text-white/80">
            Placeholder content for the feature showcase area. This block mirrors the highlighted banner section and can hold a short
            differentiator statement.
          </p>
          <button className="rounded-md bg-white px-5 py-3 font-body text-sm font-semibold text-brand">Discover More</button>
        </div>
      </div>
    </section>
  );
}
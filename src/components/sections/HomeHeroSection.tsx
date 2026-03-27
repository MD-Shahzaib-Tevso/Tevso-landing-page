export function HomeHeroSection() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl leading-tight text-slate-900 sm:text-5xl">
            Build and Scale Your <span className="text-brand">SaaS</span> From MVP to Investor Ready Infrastructure
          </h1>
          <p className="max-w-xl font-body text-base leading-7 text-slate-600">
            Placeholder copy for the hero message. This area can describe your product development and engineering services in a concise,
            conversion-friendly way.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-md bg-brand px-5 py-3 font-body text-sm font-semibold text-white">Book a Discovery Call</button>
            <button className="rounded-md border border-brand px-5 py-3 font-body text-sm font-semibold text-brand">View Case Studies</button>
          </div>
        </div>

        <div className="relative min-h-[380px]">
          <div className="absolute -right-8 top-8 h-56 w-56 rounded-full bg-brand/20 blur-2xl" />
          <div className="absolute left-10 top-24 h-48 w-48 rounded-full bg-brand/15 blur-2xl" />
          <div className="absolute right-0 top-12 h-64 w-full max-w-lg rounded-2xl border border-slate-200 bg-slate-100 p-6 shadow-xl">
            <div className="mb-4 h-6 w-40 rounded bg-slate-300" />
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-32 rounded bg-slate-200" />
              <div className="h-32 rounded bg-slate-200" />
              <div className="h-24 rounded bg-slate-200" />
              <div className="col-span-2 h-24 rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
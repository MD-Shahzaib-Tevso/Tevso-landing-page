export function AboutIntroSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[4rem] border-2 border-dashed border-brand p-3">
            <div className="h-full w-full rounded-[3rem] bg-slate-300" />
          </div>
          <div className="absolute bottom-2 right-8 grid h-24 w-24 place-items-center rounded-full bg-brand text-white shadow-lg">
            <p className="text-center font-heading text-3xl">2</p>
            <p className="-mt-1 text-center font-body text-[10px] uppercase tracking-wide">Years experience</p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-5xl leading-tight text-brand">Extend your product team without scaling complexity</h2>
          <p className="mt-5 max-w-xl font-body text-sm leading-7 text-slate-600">
            At Tevso, we provide end-to-end technology solutions from product design to deployment backed by expert developers, DevOps
            engineers, and dedicated talent. Whether you&apos;re launching a new idea or scaling an existing product, we&apos;ve got you covered.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-heading text-sm text-slate-900">Certified company</p>
              <p className="mt-1 font-body text-xs text-slate-500">Best provide skills services</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-heading text-sm text-slate-900">Expert team</p>
              <p className="mt-1 font-body text-xs text-slate-500">100% expert team</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-5">
            <div className="rounded-md bg-slate-100 px-4 py-3">
              <p className="font-body text-xs text-slate-500">Call us on</p>
              <p className="font-heading text-sm text-slate-900">+44 7400714002</p>
            </div>
            <button className="rounded-md bg-brand px-6 py-3 font-body text-sm font-semibold text-white">Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

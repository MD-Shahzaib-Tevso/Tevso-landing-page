export function HomeCTASection() {
  return (
    <section className="bg-brand py-16 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-heading text-4xl leading-tight">Your vision, our code digital growth delivered</h2>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-md bg-white px-5 py-3 font-body text-sm font-semibold text-brand">+44 121 285 0092</button>
            <button className="rounded-md border border-white px-5 py-3 font-body text-sm font-semibold text-white">
              +44 208 123 0197
            </button>
          </div>
        </div>
        <div className="h-60 rounded-2xl border border-white/30 bg-white/10" />
      </div>
    </section>
  );
}
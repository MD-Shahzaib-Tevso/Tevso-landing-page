export function ServicesCTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-slate-500" />
      <div className="absolute inset-0 bg-brand/70" />
      <div className="absolute -left-12 top-0 h-full w-40 bg-brand/60" />
      <div className="absolute -right-12 top-0 h-full w-40 bg-brand/60" />

      <div className="relative mx-auto w-full max-w-6xl px-6 text-center text-white">
        <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight sm:text-5xl">
          Need any kind of IT solution for your business?
        </h2>
        <button className="mt-8 rounded-md bg-white px-6 py-3 font-body text-sm font-semibold text-brand">Get In Touch</button>
      </div>
    </section>
  );
}

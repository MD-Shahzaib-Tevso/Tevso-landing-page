const testimonials = [
  {
    name: "John Adams",
    role: "CTO, UK SaaS Startup",
  },
  {
    name: "Stanley Dai",
    role: "CTO, UK SaaS Startup",
  },
];

export function ServicesTestimonialsSection() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center font-heading text-5xl text-brand">Hear from our business clients</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-body text-sm text-slate-500">4.00 ★★★★★</p>
              <p className="mt-6 font-body leading-8 text-slate-700">
                We partner with you to deliver not just code, but complete product success through expertise, collaboration, and
                accountability.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-300" />
                <div>
                  <p className="font-heading text-lg text-brand">{testimonial.name}</p>
                  <p className="font-body text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <span className="h-1.5 w-8 rounded-full bg-brand" />
          <span className="h-1.5 w-8 rounded-full bg-slate-300" />
          <span className="h-1.5 w-8 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

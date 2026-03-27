const testimonials = [
  {
    quote: "We operate in a competitive market and needed clear technical execution.",
    author: "Oberon Shaw, MCH",
    role: "Head of HR",
  },
  {
    quote: "What impressed us most was the reliable delivery cadence and communication.",
    author: "Oberon Shaw, MCH",
    role: "Head of HR",
  },
  {
    quote: "A practical technology partner with ownership from planning to release.",
    author: "Oberon Shaw, MCH",
    role: "Head of HR",
  },
];

export function HomeTestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center font-heading text-4xl text-slate-900">Hear from our business clients</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              className={
                index === 0
                  ? "rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                  : "rounded-xl border border-brand/20 bg-brand p-6 text-white shadow-sm"
              }
            >
              <div className={index === 0 ? "text-4xl text-brand" : "text-4xl text-white"}>“</div>
              <p className={index === 0 ? "mt-2 font-body text-sm leading-7 text-slate-600" : "mt-2 font-body text-sm leading-7 text-white/90"}>
                {testimonial.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-300" />
                <div>
                  <p className={index === 0 ? "font-heading text-sm text-slate-900" : "font-heading text-sm text-white"}>{testimonial.author}</p>
                  <p className={index === 0 ? "font-body text-xs text-slate-500" : "font-body text-xs text-white/70"}>{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-brand/50" />
          <span className="h-2 w-2 rounded-full bg-brand/30" />
        </div>
      </div>
    </section>
  );
}
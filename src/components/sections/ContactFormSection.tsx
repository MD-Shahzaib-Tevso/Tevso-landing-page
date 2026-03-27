export function ContactFormSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="font-heading text-4xl font-bold text-brand">Have any questions?</h2>
          <p className="mt-3 max-w-2xl font-body text-sm leading-7 text-slate-600">
            Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically reintermediate compelling process improvements rather than empowered relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form left side */}
          <form className="space-y-5">
            <div>
              <input
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-sm placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-sm placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div>
              <textarea
                className="h-40 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-sm placeholder-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                placeholder="Message"
              />
            </div>
            <button
              className="w-full rounded-lg bg-brand px-5 py-3 font-body text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
              type="submit"
            >
              Send Message
            </button>
          </form>

          {/* Illustration right side */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main illustration placeholder */}
              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100" />
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-300/40 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-purple-300/30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

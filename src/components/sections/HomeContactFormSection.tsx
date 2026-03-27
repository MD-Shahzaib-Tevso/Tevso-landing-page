export function HomeContactFormSection() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-[2rem] bg-white p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-4xl text-slate-900">Let&apos;s talk</h2>
              <p className="mt-4 max-w-md font-body text-sm leading-7 text-slate-600">
                Placeholder summary for the contact area. Replace with a short, clear invitation and response-time commitment.
              </p>

              <form className="mt-8 space-y-4">
                <input className="w-full rounded-md border border-slate-200 px-4 py-3 font-body text-sm" placeholder="Name" type="text" />
                <input className="w-full rounded-md border border-slate-200 px-4 py-3 font-body text-sm" placeholder="Email" type="email" />
                <input className="w-full rounded-md border border-slate-200 px-4 py-3 font-body text-sm" placeholder="Phone" type="tel" />
                <textarea className="h-28 w-full rounded-md border border-slate-200 px-4 py-3 font-body text-sm" placeholder="Message" />
                <button className="rounded-md bg-brand px-5 py-3 font-body text-sm font-semibold text-white" type="submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="h-48 rounded-2xl bg-slate-200" />
              <div className="space-y-2 font-body text-sm text-slate-700">
                <p>+44 121 285 0092</p>
                <p>contact@tevso.com</p>
                <p>LinkedIn | Instagram | Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ContactMapSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-3xl text-slate-900">Find Us</h2>
          <p className="mt-2 font-body text-slate-600">Visit us at our office location</p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="font-body text-slate-600">Map integration will be added here</p>
              <p className="font-body text-sm text-slate-500 mt-2">123 Business Street, London, UK SW1A 1AA</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <h3 className="font-heading text-lg text-slate-900">Hours</h3>
            <p className="mt-2 font-body text-sm text-slate-600">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM GMT
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <h3 className="font-heading text-lg text-slate-900">Location</h3>
            <p className="mt-2 font-body text-sm text-slate-600">
              London, UK
              <br />
              United Kingdom
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <h3 className="font-heading text-lg text-slate-900">Timezone</h3>
            <p className="mt-2 font-body text-sm text-slate-600">
              GMT/BST
              <br />
              (London Time)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

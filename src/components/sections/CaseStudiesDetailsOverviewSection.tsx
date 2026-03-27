export function CaseStudiesDetailsOverviewSection() {
  return (
    <section className="py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        {/* Left side image placeholder */}
        <div className="flex-shrink-0 lg:w-1/2">
          <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300" />
        </div>

        {/* Right side content */}
        <div className="flex flex-col justify-start lg:w-1/2">
          <h2 className="font-heading text-3xl font-bold text-brand">
            24/7 Digital Veterinary Care Platform
          </h2>
          
          <p className="mt-4 font-body text-sm leading-7 text-slate-600">
            Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure. We developed a white-label digital platform that allows clinics to provide round-the-clock virtual consultations.
          </p>

          <p className="mt-4 font-body text-sm leading-7 text-slate-600">
            This solution reduced operational overhead by 40% while increasing consultation availability and revenue streams through automated scheduling and payment processing.
          </p>
        </div>
      </div>
    </section>
  );
}

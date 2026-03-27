const caseStudies = [
  {
    title: "24/7 Digital Veterinary Care Platform",
    description: "Placeholder description to represent a compact case-study summary card.",
  },
  {
    title: "Online Pet Pharmacy Platform",
    description: "Placeholder description to represent a compact case-study summary card.",
  },
  {
    title: "Energy and Utility Switching Platform",
    description: "Placeholder description to represent a compact case-study summary card.",
  },
  {
    title: "Islamic Mobile Application",
    description: "Placeholder description to represent a compact case-study summary card.",
  },
];

export function HomeCaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl text-slate-900">Project case study and solutions</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-32 w-full rounded-lg bg-slate-200" />
              <h3 className="mt-4 font-heading text-lg leading-6 text-brand">{caseStudy.title}</h3>
              <p className="mt-2 font-body text-sm leading-6 text-slate-600">{caseStudy.description}</p>
              <a className="mt-3 inline-flex font-body text-sm font-semibold text-brand" href="#">
                View More
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="rounded-md bg-brand px-6 py-3 font-body text-sm font-semibold text-white">View More Projects</button>
        </div>
      </div>
    </section>
  );
}
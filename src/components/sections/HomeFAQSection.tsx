const faqs = [
  "How long until we achieve your first blog post?",
  "How long until we deliver your first page sprint?",
  "How long until we onboard your first campaign?",
  "How long until we optimize your first funnel?",
  "How long until we launch your first dashboard?",
  "How long until we verify your first test cycle?",
];

export function HomeFAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center font-heading text-4xl text-slate-900">Frequently ask questions</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {faqs.map((question) => (
            <article key={question} className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="font-body text-sm text-slate-700">{question}</p>
                <span className="font-heading text-xl text-brand">+</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
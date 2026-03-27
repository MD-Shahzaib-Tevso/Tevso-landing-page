export function ServiceDetailsBenefitsSection() {
  const benefits = [
    {
      icon: "💡",
      title: "Flexible Solutions",
      description: "Completely grow multifaceted based content before global scenarios.",
    },
    {
      icon: "🔧",
      title: "24/7 Unlimited Support",
      description: "Completely grow multifaceted based content before global scenarios.",
    },
    {
      icon: "🚀",
      title: "Rapid Deployment",
      description: "Completely grow multifaceted based content before global scenarios.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Completely grow multifaceted based content before global scenarios.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-slate-900">
          Benefits With Our Service
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
            >
              <div className="text-4xl">{benefit.icon}</div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-2 font-body text-sm text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

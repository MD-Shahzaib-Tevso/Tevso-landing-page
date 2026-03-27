export function ContactInfoCardsSection() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Our Office",
      details: ["123 Business Street", "London, UK SW1A 1AA"],
    },
    {
      icon: "📞",
      title: "Call Anytime",
      details: ["+44 121 285 0092", "Mon-Fri, 9am-6pm GMT"],
    },
    {
      icon: "📧",
      title: "Send Email",
      details: ["contact@tevso.com", "We'll respond within 24 hours"],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="text-5xl">{info.icon}</div>
              <h3 className="mt-4 font-heading text-xl text-slate-900">{info.title}</h3>
              <div className="mt-3 space-y-1 font-body text-sm text-slate-600">
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

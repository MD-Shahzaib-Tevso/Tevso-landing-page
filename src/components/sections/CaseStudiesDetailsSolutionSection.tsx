import { Video, Ambulance, LayoutDashboard, CreditCard, PieChart } from "lucide-react";

export function CaseStudiesDetailsSolutionSection() {
  const cards = [
    {
      id: "01",
      title: "Real-time video and audio consultations",
      description: "Connect instantly via video and audio with expert support. Fast, seamless communication without delays.",
      icon: <Video className="w-6 h-6 text-[#311EE6]" />,
      isBlue: true,
    },
    {
      id: "02",
      title: "Automated ambulance dispatch for emergencies",
      description: "Uses GPS to track every ambulance in the fleet in real-time.",
      icon: <Ambulance className="w-6 h-6 text-white" />,
      isBlue: false,
    },
    {
      id: "03",
      title: "Custom branded portals for clinics and pet owners",
      description: "Automatically handles failed payments with retry logic and grace period notifications to prevent service interruption.",
      icon: <LayoutDashboard className="w-6 h-6 text-white" />,
      isBlue: false,
    },
    {
      id: "04",
      title: "Secure payment and subscription handling",
      description: "Real-time overview of appointments, patient records, and pending follow-ups.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      isBlue: false,
    },
    {
      id: "05",
      title: "Invoicing, analytics, and reporting dashboards",
      description: "Customizable email and SMS triggers that remind pet owners of outstanding balances without manual staff intervention.",
      icon: <PieChart className="w-6 h-6 text-white" />,
      isBlue: false,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto space-y-10 px-2">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#311EE6] tracking-tight">
        Solution delivered
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {cards.map((card) => (
          <article
            key={card.id}
            className={`relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] p-8 rounded-2xl overflow-hidden shadow-xl transition-all hover:-translate-y-1 ${
              card.isBlue
                ? "bg-[#311EE6] text-white"
                : "bg-white text-[#020617] border border-[#E2E8F0]"
            }`}
          >
            {/* Background decorative corner bubble */}
            <div
              className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full pointer-events-none ${
                card.isBlue ? "bg-white/10" : "bg-[#311EE6]"
              }`}
            />
            {card.isBlue && (
              <div className="absolute -bottom-2 right-4 w-12 h-12 rounded-full pointer-events-none bg-white opacity-20" />
            )}
            {!card.isBlue && (
              <div className="absolute -bottom-2 right-4 w-12 h-12 rounded-full pointer-events-none bg-[#311EE6] opacity-50" />
            )}

            {/* Header: Icon and Number */}
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-inner ${
                  card.isBlue ? "bg-white" : "bg-[#A594FD]"
                }`}
              >
                {card.icon}
              </div>
              <span
                className={`font-heading text-4xl font-bold tracking-tight ${
                  card.isBlue ? "text-white/20" : "text-[#94A3B8]/40"
                }`}
              >
                {card.id}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <h3 className="font-heading text-[18px] font-bold leading-tight min-h-[50px]">
                {card.title}
              </h3>
              <p
                className={`font-body text-[13px] leading-relaxed ${
                  card.isBlue ? "text-white/90" : "text-[#64748B]"
                }`}
              >
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

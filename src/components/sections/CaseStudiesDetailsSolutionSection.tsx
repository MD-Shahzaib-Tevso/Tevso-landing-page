import { CaseStudy } from "@/interfaces";
import {
  Video,
  Ambulance,
  LayoutDashboard,
  CreditCard,
  PieChart,
} from "lucide-react";

interface Props {
  study: CaseStudy;
}

export function CaseStudiesDetailsSolutionSection({ study }: Props) {
  const cards = [
    {
      id: "01",
      title: "Real-time video and audio consultations",
      description:
        "Connect instantly via video and audio with expert support. Fast, seamless communication without delays.",
      icon: Video,
    },
    {
      id: "02",
      title: "Automated ambulance dispatch for emergencies",
      description:
        "Uses GPS to track every ambulance in the fleet in real-time.",
      icon: Ambulance,
    },
    {
      id: "03",
      title: "Custom branded portals for clinics and pet owners",
      description:
        "Automatically handles failed payments with retry logic and grace period notifications.",
      icon: LayoutDashboard,
    },
    {
      id: "04",
      title: "Secure payment and subscription handling",
      description:
        "Real-time overview of appointments, patient records, and pending follow-ups.",
      icon: CreditCard,
    },
    {
      id: "05",
      title: "Invoicing, analytics, and reporting dashboards",
      description:
        "Customizable email and SMS triggers that remind pet owners automatically.",
      icon: PieChart,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl space-y-10">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#311EE6] md:text-4xl">
        Solution delivered
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:px-8">
        {study.Solution.map((card, i) => {
          return (
            <article
              key={i}
              className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 text-[#020617] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#311EE6] hover:bg-[#311EE6] hover:shadow-2xl md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* Decorative circles */}
              {/* <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#311EE6]/5 transition-all duration-500 group-hover:scale-125 group-hover:bg-white/10" />
              <div className="absolute bottom-2 right-3 h-14 w-14 rounded-full bg-[#311EE6]/10 transition-all duration-500 group-hover:bg-white/20" /> */}

              {/* bottom diagonal overlay */}
              {/* <div className="absolute bottom-0 rounded-full left-0 h-24 w-full skew-y-[-4deg] bg-white/10 origin-bottom-left" />
              <div className="absolute bottom-0 left-0 h-24 w-full skew-y-[-4deg] bg-white/10 origin-bottom-left" /> */}

              <div className="absolute bottom-0 left-0 h-28 w-full bg-white/10 [clip-path:ellipse(67%_35%_at_33%_100%)]" />

              {/* bottom circles */}
              <div className="absolute -bottom-2 -right-12 h-24 w-24 rounded-full bg-white/50" />
              <div className="absolute -bottom-12 -right-2 h-24 w-24 rounded-full bg-white/50" />


              {/* header */}
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#311EE6]/10 transition-all duration-500 group-hover:bg-white">
                  <LayoutDashboard className="h-6 w-6 text-[#311EE6] transition-colors duration-500 group-hover:text-[#311EE6]" />
                </div>

                <span className="font-heading text-4xl font-bold tracking-tight text-[#311EE6]/20 transition-all duration-500 group-hover:text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* content */}
              <div className="relative z-10 space-y-4">
                <h3 className="min-h-[56px] font-heading text-[18px] font-bold leading-tight transition-colors duration-500 group-hover:text-white">
                  {card.title}
                </h3>

                {/* <p className="text-[13px] leading-relaxed text-[#64748B] transition-colors duration-500 group-hover:text-white/85">
                  {card.desc}
                </p> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
import { Lightbulb, Headphones } from "lucide-react";

export function ServiceDetailsBenefitsSection() {
  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8 text-white relative z-10" />,
      title: "Flexible Solutions",
      description: "Completely grow multimedia based content before global scenarios.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-white relative z-10" />,
      title: "24/7 Unlimited Support",
      description: "Completely grow multimedia based content before global scenarios.",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-[22px] font-bold text-[#3B32C4] tracking-tight">
        Benefits With Our Service
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border border-[#D1D5DB] bg-white p-3 md:p-4 hover:shadow-md transition-shadow"
          >
            {/* Icon Box */}
            <div className="flex-shrink-0 flex h-20 w-20 items-center justify-center bg-[#3B32C4] relative overflow-hidden group">
              {/* Subtle background decoration inside the icon box */}
              <div className="absolute -bottom-2 -left-2 w-10 h-10 border border-white/20 transform rotate-12 transition-transform group-hover:rotate-45"></div>
              {benefit.icon}
            </div>
            
            <div className="flex flex-col justify-center space-y-1">
              <h4 className="font-heading text-[14px] font-bold text-[#3B32C4]">
                {benefit.title}
              </h4>
              <p className="font-body text-[12px] leading-[1.6] text-[#64748B] max-w-[200px]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

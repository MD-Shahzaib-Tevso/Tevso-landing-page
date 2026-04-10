import { CheckCircle2 } from "lucide-react";

export function ServiceDetailsWorkSection() {
  const features = [
    "Up am intention on dependant questions",
    "Surrounded affronting favourable",
    "Sed ut perspiciatis unde omnis iste natus",
    "Special Careness Risk Free",
    "Bibend auctor nisi elit volume are beguiled",
  ];

  return (
    <div className="space-y-8">
      <h2 className="font-heading text-3xl font-bold text-[#3B32C4] tracking-tight">
        We serve the best work
      </h2>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <CheckCircle2 className="w-5 h-5 text-[#3B32C4] transition-transform group-hover:scale-110" />
            <span className="font-body text-[15px] text-[#64748B] hover:text-[#3B32C4] transition-colors cursor-default">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

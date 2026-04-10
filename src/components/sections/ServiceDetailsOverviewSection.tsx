import Image from "next/image";

export function ServiceDetailsOverviewSection({ title }: { title: string }) {
  return (
    <div className="space-y-12">
      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F1F5F9]">
        <Image
          src="/service-overview-main.png" // Placeholder URL
          alt={`${title} Overview`}
          fill
          className="object-cover"
        />
      </div>

      {/* Main Copy */}
      <div className="space-y-8">
        <h2 className="font-heading text-4xl font-bold text-[#3B32C4] tracking-tight">
          {title}
        </h2>
        
        <div className="space-y-6">
          <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
            Globally optimize highly efficient solution whereas open-source application. Completely 
            strategize quality internal or "organic" sources for virtual e-business. 
            Phosfluorescently re-engineer enterprise markets via value-added networks. 
            Seamlessly restore inexpensive e-markets vis-a-vis corporate intellectual capital. 
            Holistically reinvent compelling niche markets via scalable strategic.
          </p>

          <p className="font-body text-[15px] leading-relaxed text-[#64748B]">
            Authoritatively scale business meta-services before client-based technologies. 
            Collaboratively strategize synergistic scenarios rather than flexible action items. 
            Continually deliver market positioning convergence and mission-critical infrastructures.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Check } from "lucide-react";

const capabilities = [
  "Big data analysis",
  "High quality scurity",
  "24/7 online support",
  "24/7 support team",
  "Business improvement",
  "easy solutions",
];

export function AboutCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-[90px]">
      {/* Right blue triangle */}
      <div className="absolute right-0 top-1/2 hidden h-[132px] w-[38px] -translate-y-1/2 bg-[#3d2bff] lg:block [clip-path:polygon(100%_0,0_50%,100%_100%)]" />

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-[60px] px-6 lg:grid-cols-2 lg:gap-[90px]">
        {/* Left content */}
        <div className="max-w-[520px]">
          <h2 className="font-['Raleway'] text-[44px] font-bold leading-[44px] text-[#352fe0] sm:text-[52px] sm:leading-[52px]">
            We deal with the <br />
            aspects it services
          </h2>

          <p className="mt-6 max-w-[470px] font-['Raleway'] text-[16px] font-normal leading-[20px] text-[#7b7b7b]">
            Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel
            fabricate competitive resource and holistic
          </p>

          <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {capabilities.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#352fe0] text-white">
                  <Check className="h-[16px] w-[16px] stroke-[3px]" />
                </div>
                <p className="font-['Raleway'] text-[15px] font-semibold leading-[22px] text-[#2f2f2f]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[370px] w-full max-w-[440px] overflow-hidden">
            <Image
              src="/team-collaboration.png"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
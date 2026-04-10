import Image from "next/image";
import { Award, Users, Phone } from "lucide-react";

export function AboutIntroSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">

        {/* Left: Image with stylized dashed frame */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center">
            {/* Dashed Animated Blob Frame (Approximation) */}
            <div className="absolute inset-0 " />

            <div className="relative h-[100%] w-[100%] overflow-hidden" >
              <Image
                src="/about-person.png" // Placeholder image for the man with glasses
                alt="Professional Expertise"
                fill
                className="object-cover"
              />
            </div>

            {/* Years Experience Badge */}
            <div className="absolute bottom-4 right-4 z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-brand text-white shadow-2xl transition-transform hover:scale-105 active:scale-95">
              <span className="font-heading text-5xl font-bold">2</span>
              <p className="mt-[-2px] text-center font-body text-[11px] font-medium leading-[1.3] uppercase tracking-wider">
                Year<br />experience
              </p>
            </div>
          </div>
        </div>

        {/* Right: Informational Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-6">
            <h2 className="font-['Raleway'] text-brand font-bold text-[44px] leading-[46px] text-[#222222] sm:text-[48px] sm:leading-[50px] lg:text-[54px] lg:leading-[58px]">
              Extend your product team <span className="text-brand">without scaling</span> complexity
            </h2>
            <p className="font-['Raleway'] font-normal text-[16px] leading-[22px] text-[#555555] md:text-[18px] md:leading-[24px]">
              At Tevso, we provide end-to-end technology solutions — from product design to deployment — backed by expert developers, DevOps engineers, and dedicated talent. Whether you're launching a new idea or scaling an existing product, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading text-[16px] leading-[22px] font-bold text-[#222222]">
                  Certified company
                </h4>
                <p className="mt-1 font-body text-[14px] leading-relaxed text-[#666666]">Best Provide Skills Services</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-heading text-[16px] leading-[22px] font-bold text-[#222222]">
                  Expert team
                </h4>
                <p className="mt-1 font-body text-[14px] leading-relaxed text-[#666666]">100% Expert Team</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 border-t-[4px] border-black pt-8">
            <div className="flex items-center gap-4 group cursor-pointer ">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dcd8f5]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c63ff] text-white">
                  <Phone className="h-5 w-5 fill-current" />
                </div>
              </div>
              <div>
                <p className="font-body text-[14px] text-[#888888]">Call Us On</p>
                <p className="font-body text-[18px] font-bold text-[#222222]">+ 44 7400714002</p>
              </div>
            </div>
            <button className=" bg-brand px-10 py-4.5 font-body text-[16px] font-bold text-white shadow-xl shadow-brand/20 transition-all hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-brand/30 active:translate-y-[0px]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


import Image from "next/image";

export function CaseStudiesIntroSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        
        {/* CASE STUDY CARD */}
        <div className="flex flex-col items-center gap-8 rounded-[20px] bg-gradient-to-r from-gray-100 to-[#cfd2ff] p-8 lg:flex-row lg:p-10">
          
          {/* LEFT IMAGE */}
          <div className="w-full max-w-[420px]">
            <Image
              src="/laptop-case.png" // 👉 add this image in public folder
              alt="Veterinary Platform"
              width={420}
              height={300}
              className="w-full object-contain"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full max-w-[520px]">
            <h2 className="text-2xl font-bold text-[#3b3be0] sm:text-3xl">
              24/7 Digital Veterinary Care Platform
            </h2>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Veterinarians clinics needed a way to offer continuous care without overwhelming staff or
              infrastructure. We developed a white label digital platform that allows clinics to provide
              round the clock virtual consultations under their own brand, connecting pet parents with
              licensed veterinarians seamlessly.
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold text-[#3b3be0]">
                Client challenge
              </p>
              <p className="text-sm text-gray-700">
                Clinics could not scale consultation availability without hiring more staff or building
                costly technology. They also lacked a unified system for scheduling, payments, and
                emergency care.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-[#3b3be0]">
                Product design approach
              </p>
              <p className="text-sm text-gray-700">
                Simple, intuitive, and trust building experiences for pet parents. Clinics get full
                operational control through branded dashboards with insights and metrics for decision
                making.
              </p>
            </div>

            <button className="mt-6 bg-[#3b3be0] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2f2fd1] transition">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
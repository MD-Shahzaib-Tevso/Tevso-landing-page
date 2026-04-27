import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfoCardsSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our office address",
      details: ["Burnsville, MN 55337 Street, United States"],
    },
    {
      icon: Phone,
      title: "Call us anytime",
      details: ["+ 44 7400714002"],
    },
    {
      icon: Mail,
      title: "Send an email",
      details: ["contact@tevsotech.com"],
    },
  ];

  return (
    <section className="relative z-20 -mt-16 bg-transparent lg:-mt-24">
      <div className="mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="group flex flex-row items-center gap-6 rounded-[12px] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#311EE6] text-white">
                <info.icon size={26} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-heading text-[18px] font-bold text-[#311EE6]">
                  {info.title}
                </h3>
                <div className="mt-1 flex flex-col font-body text-[14px] leading-tight text-[#666666]">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

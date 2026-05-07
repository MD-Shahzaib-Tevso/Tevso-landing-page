import Image from "next/image";
import {
  Briefcase,
  Workflow,
  MessageCircleMore,
  Headset,
  Sparkles,
  BarChart3,
} from "lucide-react";

const cards = [
  {
    icon: <Briefcase className="h-5 w-5 text-white" />,
    title: "Internal productivity",
    description:
      "Summarization, classification, triage, and drafting — built into existing tools rather than bolted on as separate products.",
  },
  {
    icon: <Workflow className="h-5 w-5 text-white" />,
    title: "Workflow automation",
    description:
      "Replace manual decision trees in existing workflows with AI-assisted routing, flagging, or completion — without rebuilding the whole system.",
  },
  {
    icon: <MessageCircleMore className="h-5 w-5 text-white" />,
    title: "Communication and follow-ups",
    description:
      "Personalized communication at scale — triggered by real signals from your data, not generic scheduling.",
  },
  {
    icon: <Headset className="h-5 w-5 text-white" />,
    title: "Intelligent support operations",
    description:
      "First-line resolution, context-aware escalation, and structured ticket handling that reduces load without removing human judgment.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-white" />,
    title: "Personalization inside existing products",
    description:
      "Add personalized recommendations, surfacing, or responses to existing SaaS products without a full rebuild.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-white" />,
    title: "Data-assisted decision workflows",
    description:
      "Surface patterns in existing data to support operational decisions — without building a full analytics platform.",
  },
];

export function AiSolutionsUntappedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f4f7] py-12 sm:py-14 md:py-16 lg:py-20">
      {/* Background Image */}
      <Image
        src="/Frame.png"
        alt="AI background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-center"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 z-[1] bg-white/55 sm:bg-white/45 md:bg-white/35" />

      {/* Subtle dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#7c7c7c 0.6px, transparent 0.6px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[980px] px-5 sm:px-6 md:px-8 lg:px-6">
        {/* Heading */}
        <div className="mb-7 text-center sm:mb-8 md:mb-10">
          <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-[#2f2f2f] sm:text-[30px] md:text-[36px]">
            Where AI adds genuine value
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[16px] bg-[#4330f1] p-5 text-white shadow-[0_8px_20px_rgba(67,48,241,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(67,48,241,0.28)] sm:p-5 md:p-6 lg:p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 sm:h-9 sm:w-9">
                {card.icon}
              </div>

              <h3 className="mb-3 text-[16px] font-semibold leading-snug sm:text-[17px] lg:text-[16px]">
                {card.title}
              </h3>

              <p className="text-[13px] leading-[1.7] text-white/90 sm:text-[13px] lg:text-[12.5px] lg:leading-[1.6]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote box */}
        <div className="mt-7 sm:mt-8">
          <div className="mx-auto max-w-[920px] rounded-[14px] border border-white/60 bg-[#8f8f99]/70 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:px-6">
            <p className="text-[13px] italic leading-relaxed text-white sm:text-[14px]">
              AI is most valuable when it strengthens real operations, not when
              it is added as a trend. This mirrors the profile well.
            </p>
          </div>
        </div>

        {/* Bottom button */}
        <div className="mt-7 flex justify-center sm:mt-8">
          <button className="w-full max-w-[250px] rounded-md bg-white px-5 py-3 text-[12px] font-medium text-[#4330f1] shadow-sm transition hover:bg-[#f8f8ff] sm:w-auto sm:max-w-none lg:px-4 lg:py-2 lg:text-[10px]">
            Discuss an AI opportunity
          </button>
        </div>
      </div>
    </section>
  );
}
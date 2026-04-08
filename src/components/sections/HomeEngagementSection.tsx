import Image from "next/image";

const benefits = [
  {
    title: "Project solutions",
    description:
      "Assign expert project managers and developers to oversee your complete software lifecycle, ensuring quality, efficiency and timely delivery.",
  },
  {
    title: "Dedicated development teams",
    description:
      "Deploy a skilled team to deliver custom, end-to-end digital solutions, covering strategy, UI/UX, coding, testing and deployment.",
  },
  {
    title: "Product innovation partnerships",
    description:
      "Partner with us to transform ideas into scalable digital products, from MVP to launch, driving measurable business impact.",
  },
  {
    title: "Digital transformation solutions",
    description:
      "Accelerate growth with enterprise transformation services integrating AI, cloud, and modernization for scalable digital success.",
  },
];

export function HomeEngagementSection() {
  return (
    <section className="bg-white py-20">
      <div className="grid w-full grid-cols-1 items-start gap-12 px-6 md:px-12 lg:px-16 lg:grid-cols-2">

        {/* Left: Image + CTA Button */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/team-collaboration.png"
              alt="Team collaborating with AI technology"
              width={640}
              height={520}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          {/* CTA Button — below the image on the left */}
          <div>
            <button className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 font-['Lato'] text-[15px] font-semibold text-white transition-all hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.98]">
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <h2 className="font-['Raleway'] font-bold text-[40px] leading-[1.15] text-gray-900">
            Customized engagement <br className="hidden sm:block" />
            &amp; seamless delivery
          </h2>

          {/* Benefit Items */}
          <div className="mt-8 space-y-6">
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <h3 className="font-['Raleway'] font-bold text-[18px] text-brand">
                  {benefit.title}
                </h3>
                <p className="mt-1 font-['Lato'] font-normal text-[15px] leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

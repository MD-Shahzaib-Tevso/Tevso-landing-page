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
          <div className="relative w-full overflow-hidden">
            <Image
              src="/study-case.png"
              alt="Team collaborating with AI technology"
              width={640}
              height={520}
              className="w-full h-auto object-cover "
            />
          </div>
          {/* CTA Button — below the image on the left */}
          <div>
            <button className="theme-btn theme-btn-white">
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          {/* Heading */}
          <h2 className="theme-heading ">
            Customized engagement <br className="hidden sm:block" />
            &amp; seamless delivery
          </h2>

          {/* Benefit Items */}
          <div className="mt-8 space-y-6">
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <h3 className="ff-raleway font-bold text-2xl leading-none tracking-normal align-middle theme-text">
                  {benefit.title}
                </h3>
                <p className="mt-1 theme-text-mute  font-normal text-base leading-[22px] tracking-normal align-middle ff-lato">
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

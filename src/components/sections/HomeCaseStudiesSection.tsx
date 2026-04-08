const caseStudies = [
  {
    title: "24/7 Digital Veterinary Care Platform",
    description:
      "Veterinary clinics needed a way to offer continuous care without overloading staff or infrastructure...",
  },
  {
    title: "Online Pet Pharmacy Platform",
    description:
      "Veterinary businesses needed a scalable platform to sell medications online while ensuring compliance...",
  },
  {
    title: "Energy and Utility Switching Platform",
    description:
      "Partners wanted to offer energy switching services under their own brand without building complex supplier integrations...",
  },
  {
    title: "Islamic Application",
    description:
      "A mobile application delivering daily Islamic content and utilities for over 200,000 users. It focuses on notifications, location...",
  },
];

export function HomeCaseStudiesSection() {
  return (
    <section className="bg-white py-16">
      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <h2 className="text-center font-heading text-5xl font-bold text-gray-900">
          Project case study and solutions
        </h2>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden "
            >
              {/* Laptop Image */}
              <div className="flex items-center justify-center bg-white pt-6 pb-2 px-4">
                <img
                  src="/laptop.png"
                  alt={study.title}
                  className="w-full object-contain"
                  style={{ maxHeight: "160px" }}
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5 pt-3">
                <h3 className="font-heading font-['Raleway'] text-[24px] font-bold leading-[100%] tracking-[0%] align-middle text-brand">
                  {study.title}
                </h3>
                <p className="mt-2 font-body text-base leading-relaxed text-gray-600 flex-1">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block font-body text-base font-semibold text-brand hover:underline"
                >
                  View More
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        {/* <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-1.5 w-10 rounded-full bg-brand" />
          <span className="h-1.5 w-3 rounded-full bg-gray-300" />
          <span className="h-1.5 w-3 rounded-full bg-gray-300" />
        </div> */}
      </div>
    </section>
  );
}
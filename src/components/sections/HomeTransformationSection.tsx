import Image from "next/image";

const transformationItems = [
  { label: "Strategic product innovation", image: "/transformation/1.png" },
  { label: "Technical excellence on demand", image: "/transformation/2.png" },
  { label: "Data driven growth marketing", image: "/transformation/4.png" },
  { label: "Scalable business leadership", image: "/transformation/3.png" },
];

export function HomeTransformationSection() {
  return (
    <section className="bg-white py-16">
      <div className="w-full px-6 md:px-12 lg:px-16">

        {/* Header row: heading left, button right */}
        <div className="flex flex-col items-start justify-between gap-4 mb-8 sm:flex-row sm:items-center">
          <h2 className="theme-heading">
            Elevate your digital<br />transformation journey
          </h2>
          <button className="theme-btn theme-btn-white">
            Consult Our Experts
          </button>
        </div>

        {/* 2×2 Image Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {transformationItems.map((item) => (
            <article
              key={item.label}
              className="group relative h-[220px] overflow-hidden  cursor-pointer"
            >
              {/* Background Image — scales up on hover */}
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Dark gradient overlay — deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              {/* Label — centered vertically + horizontally */}
              <h3 className="absolute inset-0 flex items-center justify-center px-5 font-['Raleway'] font-semibold text-[18px] leading-snug text-white text-center transition-transform duration-300 group-hover:-translate-y-1">
                {item.label}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
const technologies = [
  {
    name: "jQuery",
    src: "/Vector (10).png",
  },
  {
    name: "JavaScript",
    src: "/Vector (11).png",
  },
  {
    name: "Figma",
    src: "/Vector (12).png",
  },
  {
    name: "Vite",
    src: "/Vector (13).png",
  },
  {
    name: "Vercel",
    src: "/Vector (14).png",
  },
  {
    name: "WordPress",
    src: "/Vector (15).png",
  },
  {
    name: "Laravel",
    src: "/Vector (16).png",
  },
  {
    name: "Swift",
    src: "/Vector (18).png",
  },
  {
    name: "React",
    src: "https://cdn.simpleicons.org/react/333333",
  },
  {
    name: "Python",
    src: "https://cdn.simpleicons.org/python/333333",
  },
];

export function AiSolutionsCapabilitiesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex min-h-[110px] max-w-[1100px] items-center justify-center px-5 py-6 sm:min-h-[100px] sm:px-6 md:min-h-[92px] md:px-8 md:py-4">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-7 md:flex-nowrap md:gap-x-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex h-9 w-9 items-center justify-center opacity-90 grayscale transition hover:scale-110 hover:opacity-100 sm:h-8 sm:w-8"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="max-h-9 max-w-9 object-contain sm:max-h-8 sm:max-w-8"
              />
            </div>
          ))}

          <div className="flex h-9 min-w-9 items-center justify-center text-[13px] font-bold italic text-[#333333] sm:h-8 sm:min-w-8">
            php
          </div>

          <div className="flex h-9 min-w-[52px] items-center justify-center text-[13px] font-medium text-[#333333] sm:h-8">
            MySQL
          </div>
        </div>
      </div>

      <div className="h-[4px] w-full bg-[#3d22ff] sm:h-[5px]" />
    </section>
  );
}
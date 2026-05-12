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
  {
    name: "php",
    text: "php",
  },
  {
    name: "MySQL",
    text: "MySQL",
  },
];

export function AiSolutionsCapabilitiesSection() {
  const carouselItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="flex min-h-[130px] w-full items-center overflow-hidden py-6 sm:min-h-[120px] md:min-h-[110px] md:py-5">
        <div className="tech-carousel flex w-max items-center gap-x-12">
          {carouselItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex h-14 min-w-14 shrink-0 items-center justify-center opacity-90 grayscale transition hover:scale-110 hover:opacity-100"
            >
              {tech.src ? (
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="max-h-14 max-w-14 object-contain"
                />
              ) : (
                <span
                  className={`text-[18px] text-[#333333] ${
                    tech.name === "php" ? "font-bold italic" : "font-medium"
                  }`}
                >
                  {tech.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[4px] w-full bg-[#3d22ff] sm:h-[5px]" />

      <style>{`
        .tech-carousel {
          animation: moveLeft 22s linear infinite;
        }

        .tech-carousel:hover {
          animation-play-state: paused;
        }

        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
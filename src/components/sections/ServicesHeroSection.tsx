import Image from "next/image";
import Link from "next/link";

export function ServicesHeroSection() {
  return (
    <section className="hero-section flex flex-col justify-center relative mt-[72px] min-h-[624px] w-full overflow-hidden sm:min-h-[720px] lg:mt-[110px] max-[1065px]:lg:mt-[108px] lg:min-h-[calc(100vh-110px)]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/Rectangle 2340.png"
          alt="Solutions Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full">
        <div className="flex flex-col h-full w-full gap-5 items-start p-14">
          {/* <p className="text-[22px] font-medium uppercase tracking-wider text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Solutions
          </p> */}

          <h2 className="max-w-[700px] text-[36px] font-normal leading-normal text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)] sm:text-[48px] md:text-[56px]">
            Solutions built around <br />
            business problems, not <br />
            generic service lists
          </h2>

          <p className="max-w-[520px] text-[18px] leading-normal text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            Every engagement starts with understanding the real problem — then we
            define the right technical approach to solve it.
          </p>

          <Link href="/contact" className="no-underline">
            <button className="bg-white p-4 text-sm font-medium text-[#352FE1] transition rounded-md hover:bg-white/90 cursor-pointer">
              Talk to Tevso
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
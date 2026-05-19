import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS } from "@/app/solutions/solutions";

export function Footer() {
  const websiteLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "AI Enablement", href: "/ai-enablement" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f7f7] pt-10">
      <div className="mx-auto max-w-7xl px-8 sm:px-14">

        {/* TOP */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

          {/* LEFT LOGO */}
          <div className="w-full lg:w-[190px]">
            <Link href="/">
              <Image
                src="/footer-logo.png"
                alt="Tevso Logo"
                width={145}
                height={50}
                className="h-auto w-[130px] sm:w-[145px]"
              />
            </Link>

            <div className="mt-6 flex items-center gap-5 md:mt-8">
              <a href="https://www.facebook.com/profile.php?id=61590041300666" aria-label="Facebook">
                <Image
                  src="/footer/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>

              <a href="https://www.instagram.com/tevso.tech" aria-label="Instagram">
                <Image
                  src="/footer/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>

              <a href="https://www.linkedin.com/company/tevsotech/posts/?feedView=all" aria-label="LinkedIn">
                <Image
                  src="/footer/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex max-[380px]:flex-col gap-8 sm:flex-row lg:gap-20 max-[700px]:justify-between">

            {/* WEBSITE LINKS */}
            <div className="min-w-[190px] max-[460px]:min-w-[120px]">
              <h3 className="text-[18px] max-[460px]:text-base font-bold text-[#222]">
                Website Links
              </h3>

              <ul className="mt-6 space-y-5 max-[460px]:space-y-3 text-[14px] text-[#555]">
                {websiteLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="transition hover:text-[#3924e8] max-[460px]:text-[12px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="min-w-[190px] max-[460px]:min-w-[120px]">
              <h3 className="text-[18px] max-[460px]:text-base font-bold text-[#222]">
                Solutions
              </h3>

              <ul className="mt-6 space-y-5 max-[460px]:space-y-3 text-[14px] text-[#555]">
                {SOLUTIONS.map((solution) => (
                  <li key={solution.title}>
                    <Link
                      href={`/solutions#${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="transition hover:text-[#3924e8] max-[460px]:text-[12px]"
                    >
                      {solution.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="max-[700px]:hidden min-w-[190px]">
              <h3 className="text-[18px] font-bold text-[#222]">
                Contact Us
              </h3>

              <ul className="mt-6 space-y-5 text-[14px] text-[#555]">
                <li>
                  <a
                    href="tel:+447400714002"
                    className="transition hover:text-[#3924e8]"
                  >
                    + 44 7400714002
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:contact@tevsotech.com"
                    className="break-all transition hover:text-[#3924e8]"
                  >
                    contact@tevsotech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT (MOBILE) */}
          <div className="hidden max-[700px]:block min-w-[190px]">
            <h3 className="text-[18px] max-[460px]:text-base font-bold text-[#222]">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-5 max-[460px]:space-y-3 text-[14px] text-[#555]">
              <li>
                <a
                  href="tel:+447400714002"
                  className="transition hover:text-[#3924e8] max-[460px]:text-[12px]"
                >
                  + 44 7400714002
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tevsotech.com"
                  className="break-all transition hover:text-[#3924e8] max-[460px]:text-[12px]"
                >
                  contact@tevsotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[#dcdcdc] py-6">
          <p className="text-center text-[13px] text-[#666]">
            © Copyright {currentYear} Tevso - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
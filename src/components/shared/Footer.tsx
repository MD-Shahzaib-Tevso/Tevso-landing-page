import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const websiteLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case studies", href: "/case-studies" },
    { name: "Contact us", href: "/contact" },
  ];

  const services = [
    "Website designing",
    "Website developement",
    "Seo services",
    "Application designing",
    "Application development",
  ];

  return (
    <footer className="bg-[#f7f7f7] pt-12 md:pt-20">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left md:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] md:gap-12">
          {/* LOGO */}
          <div className="flex flex-col items-center justify-center sm:items-start">
            <Link href="/">
              <Image
                src="/footer-logo.png"
                alt="Tevso Logo"
                width={145}
                height={50}
                className="h-auto w-[130px] sm:w-[145px]"
              />
            </Link>

            <div className="mt-6 flex items-center justify-center gap-5 text-[#3924e8] sm:justify-start md:mt-8">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[18px] font-bold transition hover:opacity-70"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:opacity-70"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[4px] border-2 border-[#3924e8] text-[9px] font-bold">
                  ●
                </span>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[13px] font-bold transition hover:opacity-70"
              >
                in
              </a>
            </div>
          </div>

          {/* WEBSITE LINKS */}
          <div>
            <h3 className="text-[18px] font-bold text-[#222222]">
              Website Links
            </h3>

            <ul className="mt-5 space-y-4 text-[13px] text-[#555555] md:mt-7 md:space-y-6">
              {websiteLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#3924e8]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[18px] font-bold text-[#222222]">Services</h3>

            <ul className="mt-5 space-y-4 text-[13px] text-[#555555] md:mt-7 md:space-y-6">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="transition hover:text-[#3924e8]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[18px] font-bold text-[#222222]">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-4 text-[13px] text-[#555555] md:mt-7 md:space-y-6">
              <li>
                <a
                  href="tel:+447400714002"
                  className="break-words transition hover:text-[#3924e8]"
                >
                  + 44 7400714002
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@tevsotech.com"
                  className="break-words transition hover:text-[#3924e8]"
                >
                  contact@tevsotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-[#dcdcdc] px-4 py-5 text-center">
          <p className="text-[12px] leading-6 text-[#666666] sm:text-[13px]">
            © Copyright 2026 Tevso - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai-enablement", label: "AI Enablement" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[linear-gradient(rgba(49, 29, 230, 1),rgba(82, 105, 233, 1),rgba(49, 29, 230, 1))] ">
      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex w-full bg-[#352FE1]">
        {/* LOGO AREA */}
        <Link
          href="/"
          aria-label="Tevso home"
          className="flex w-40 shrink-0 items-center justify-start bg-[#352FE1] pl-[18px]"
        >
          <Image
            src="/tevso-logo.png"
            alt="Tevso"
            width={135}
            height={58}
            priority
            className="h-auto w-[122px]"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* TOP WHITE BAR */}
          <div className="flex items-center rounded-bl-[28px] py-3 px-6 bg-white gap-8 text-[#352FE1]">
            <a href="tel:+447400714002" className="flex items-center justify-center gap-2 text-sm font-normal leading-none"            >
              <Image
                src="navbar/phone.svg"
                alt="Phone"
                width={14}
                height={14}
                className="h-[20px] w-[20px] shrink-0"
              />
              <span>+ 44 7400714002</span>
            </a>
            <a href="mailto:contact@tevsotech.com" className="flex items-center gap-2 text-sm font-normal leading-none">
              <Image
                src="navbar/email.svg"
                alt="Phone"
                width={14}
                height={14}
                className="h-[20px] w-[20px] shrink-0"
              />
              <span>contact@tevsotech.com</span>
            </a>
          </div>

          {/* BOTTOM NAV */}
          <div className="flex items-center justify-between gap-4 bg-[#352FE1] py-4 pl-4 pr-14">
            <nav className="flex h-full items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex h-full items-center max-[1065px]:text-xs text-sm font-normal transition-colors ${isActivePath(link.href) ? "text-white" : "text-white/90 hover:text-white"}`}>
                  <span className="relative inline-block">
                    {link.label}
                    {isActivePath(link.href) && (<span className="absolute bottom-[-24px] left-0 h-[4px] w-full rounded-t-full bg-white" />)}
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              href="/solutions"
              className="flex p-2 items-center justify-center bg-white max-[1065px]:text-xs text-sm font-medium text-[#352FE1] transition rounded-md hover:bg-white/90"
            >
              Explore Your Solution
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="lg:hidden">
        <div className="flex h-20 items-center justify-between bg-[#352FE1] px-4">

          <Link href="/" aria-label="Tevso home" onClick={closeMobileMenu}>
            <Image
              src="/tevso-logo.png"
              alt="Tevso"
              width={130}
              height={55}
              priority
              className="h-auto w-[110px]"
            />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isMobileMenuOpen ? (<path d="M18 6L6 18M6 6l12 12" />) : (<path d="M4 7h16M4 12h16M4 17h16" />)}
            </svg>
          </button>

        </div>

        <div className={`overflow-hidden bg-[#352FE1] transition-all duration-300 ${isMobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col items-stretch justify-center border-t border-white/15 p-4 gap-4">

            <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-8 rounded-md bg-white p-4 text-[#352FE1]">
              <Link href="tel:+447400714002" className="flex items-center gap-2 text-sm font-normal">
                <Image
                  src="navbar/phone.svg"
                  alt="Phone"
                  width={14}
                  height={14}
                  className="h-[20px] w-[20px] shrink-0"
                />
                <span>+ 44 7400714002</span>
              </Link>
              <Link href="mailto:contact@tevsotech.com" className="flex items-center gap-2 text-sm font-normal">
                <Image
                  src="navbar/email.svg"
                  alt="Phone"
                  width={14}
                  height={14}
                  className="h-[20px] w-[20px] shrink-0"
                />
                <span>contact@tevsotech.com</span>
              </Link>
            </div>

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`rounded-md p-3 text-sm font-normal ${isActivePath(link.href) ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/solutions"
                onClick={closeMobileMenu}
                className="flex h-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-[#352FE1]"
              >
                Explore Your Solution
              </Link>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
}
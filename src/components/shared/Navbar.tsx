"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai-solutions", label: "AI Enablement" },
  { href: "/technology", label: "How We Work" },
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
      <div className="hidden h-[92px] w-full bg-[#352FE1] lg:flex">
        {/* LOGO AREA */}
        <Link
          href="/"
          aria-label="Tevso home"
          className="flex h-[92px] w-[160px] shrink-0 items-center justify-start bg-[#352FE1] pl-[18px]"
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
          <div className="flex h-[40px] items-center rounded-bl-[28px] bg-white pl-[18px] text-[#352FE1]">
            <a
              href="tel:+447400714002"
              className="flex items-center gap-[7px] text-[11px] font-medium leading-none"
            >
              <svg
                className="h-[13px] w-[13px] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>+ 44 7400714002</span>
            </a>

            <a
              href="mailto:contact@tevsotech.com"
              className="ml-[62px] flex items-center gap-[8px] text-[11px] font-medium leading-none"
            >
              <svg
                className="h-[14px] w-[14px] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              <span>contact@tevsotech.com</span>
            </a>
          </div>

          {/* BOTTOM NAV */}
          <div className="flex h-[52px] items-center justify-between bg-[#352FE1] pr-[56px]">
            <nav className="flex h-full items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex h-full items-center px-[21px] text-[10px] font-medium transition-colors ${
                    isActivePath(link.href)
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}

                  {isActivePath(link.href) && (
                    <span className="absolute bottom-0 left-1/2 h-[4px] w-[34px] -translate-x-1/2 rounded-t-full bg-white" />
                  )}
                </Link>
              ))}
            </nav>

            <Link
              href="/services"
              className="flex h-[35px] w-[130px] items-center justify-center bg-white text-[11px] font-medium text-[#352FE1] transition hover:bg-white/90"
            >
              Explore Your Solution
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="lg:hidden">
        <div className="flex h-[72px] items-center justify-between bg-[#352FE1] px-4">
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
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden bg-[#352FE1] transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/15 px-4 py-4">
            <div className="mb-4 rounded-xl bg-white px-4 py-3 text-[#352FE1]">
              <a
                href="tel:+447400714002"
                className="mb-3 flex items-center gap-2 text-sm font-medium"
              >
                <span>+ 44 7400714002</span>
              </a>

              <a
                href="mailto:contact@tevsotech.com"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <span>contact@tevsotech.com</span>
              </a>
            </div>

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`rounded-md px-3 py-3 text-sm font-medium ${
                    isActivePath(link.href)
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/services"
                onClick={closeMobileMenu}
                className="mt-3 flex h-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-[#352FE1]"
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
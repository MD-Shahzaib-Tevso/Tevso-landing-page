"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solution" },
  { href: "/ai-solutions", label: "AI Enablement" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
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
    <header
      className="fixed top-0 z-50 w-full shadow-[0_8px_24px_rgba(17,27,80,0.18)]"
      style={{
        animation: "navSlideDown 0.45s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div className="w-full bg-[#2c28d8]">
        {/* DESKTOP HEADER */}
        <div className="hidden lg:grid lg:grid-cols-[180px_1fr] lg:grid-rows-2">
          {/* LOGO */}
          <Link
            className="relative row-span-2 flex items-center justify-center overflow-visible bg-[#2c28d8]"
            href="/"
            aria-label="Tevso home"
          >
            <Image
              src="/tevso-logo.png"
              alt="Tevso"
              width={180}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* TOP CONTACT BAR */}
          <div className="flex min-h-[44px] items-center justify-start rounded-bl-[45px] bg-white px-5 py-2 font-body text-[#3c4b85]">
            <a
              className="inline-flex items-center gap-2 pr-5 font-[Poppins] text-[14px] font-normal leading-none tracking-normal theme-text transition hover:opacity-70"
              href="tel:+447400714002"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0 theme-text"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>

              <span>+ 44 7400714002</span>
            </a>

            <span
              className="mx-1 h-5 border-l border-dashed border-[#c0c8e0]"
              aria-hidden="true"
            />

            <a
              className="inline-flex items-center gap-2 pl-5 text-[14px] font-normal leading-none tracking-normal theme-text transition-opacity hover:opacity-70"
              href="mailto:contact@tevsotech.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 shrink-0 theme-text"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>

              <span>contact@tevsotech.com</span>
            </a>
          </div>

          {/* DESKTOP NAV */}
          <div className="bg-[#2c28d8]">
            <div className="flex min-h-10 items-center justify-between px-5 py-[18px]">
              <nav
                aria-label="Primary navigation"
                className="flex h-full items-center gap-6"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={`group relative flex h-full items-center font-body text-[14px] font-medium transition-colors ${
                      isActivePath(link.href)
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                    }`}
                    href={link.href}
                  >
                    <span>{link.label}</span>

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-[-18px] left-1/2 h-[4px] w-[32px] -translate-x-1/2 rounded-t-[4px] bg-white transition-opacity ${
                        isActivePath(link.href)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-70"
                      }`}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="lg:hidden">
          <div className="flex min-h-[72px] items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              aria-label="Tevso home"
              onClick={closeMobileMenu}
              className="flex items-center"
            >
              <Image
                src="/tevso-logo.png"
                alt="Tevso"
                width={160}
                height={70}
                className="h-10 w-auto sm:h-11"
                priority
              />
            </Link>

            <button
              aria-controls="mobile-primary-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>

          {/* MOBILE DROPDOWN */}
          <div
            id="mobile-primary-navigation"
            className={`overflow-hidden border-t border-white/20 bg-[#2c28d8] transition-[max-height,opacity] duration-300 ${
              isMobileMenuOpen
                ? "max-h-[650px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <nav
              aria-label="Mobile primary navigation"
              className="flex w-full flex-col gap-1 px-4 py-4 sm:px-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={`rounded-md px-3 py-3 font-body text-sm font-semibold transition-colors ${
                    isActivePath(link.href)
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                  href={link.href}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE CONTACT INFO */}
            <div className="border-t border-white/15 px-4 pb-5 pt-4 sm:px-6">
              <a
                href="tel:+447400714002"
                className="mb-3 flex items-center gap-2 rounded-md bg-white/10 px-3 py-3 text-sm font-medium text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>

                <span>+ 44 7400714002</span>
              </a>

              <a
                href="mailto:contact@tevsotech.com"
                className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-3 text-sm font-medium text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>

                <span className="break-all">contact@tevsotech.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

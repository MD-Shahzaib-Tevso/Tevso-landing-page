"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 z-50 shadow-[0_8px_24px_rgba(17,27,80,0.18)] w-full">
      <div className="mx-auto w-full bg-white">
        <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] md:grid-rows-2">
          <Link
            className="row-span-2 flex justify-center items-center bg-brand md:h-full"
            href="/"
            aria-label="Tevso home"
            onClick={closeMobileMenu}
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

          <div className="flex min-h-10 items-center justify-center gap-x-6 gap-y-1 bg-white px-5 py-2 font-body text-[12px] text-[#3c4b85] sm:justify-start">
            <a
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              href="tel:+44700714002"
            >
              <span>+44 7400714002</span>
            </a>
            <a
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
              href="mailto:contact@tevsotech.com"
            >
              <span>contact@tevsotech.com</span>
            </a>
          </div>

          <div className="bg-brand">
            <div className="flex min-h-10 items-center justify-between px-5 py-2">
              <nav
                aria-label="Primary navigation"
                className="hidden items-center gap-7 lg:flex"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={`group relative py-1.5 font-body text-[13px] font-semibold transition-colors ${
                      isActivePath(link.href)
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                    }`}
                    href={link.href}
                    onClick={closeMobileMenu}
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-[7px] left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-white transition-opacity ${
                        isActivePath(link.href)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-70"
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3 lg:ml-auto">
                <Link
                  className="hidden rounded-sm bg-white px-5 py-2 font-body text-sm font-semibold text-[#2c28d8] shadow-[0_2px_8px_rgba(0,0,0,0.14)] transition-colors hover:bg-white/90 lg:inline-flex"
                  href="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>

                <button
                  aria-controls="mobile-primary-navigation"
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/30 text-white transition-colors hover:bg-white/10 lg:hidden"
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
            </div>

            <div
              id="mobile-primary-navigation"
              className={`overflow-hidden border-t border-white/20 transition-[max-height,opacity] duration-300 lg:hidden ${
                isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <nav
                aria-label="Mobile primary navigation"
                className="mx-auto flex w-full flex-col gap-1 px-5 py-3"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={`rounded-sm px-3 py-2.5 font-body text-sm font-semibold transition-colors ${
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
                <Link
                  className="mt-2 inline-flex w-full items-center justify-center rounded-sm bg-white px-5 py-2.5 font-body text-sm font-semibold text-[#2c28d8]"
                  href="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

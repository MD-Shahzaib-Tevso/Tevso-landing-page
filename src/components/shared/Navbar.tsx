"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
      { href: "/services/cloud", label: "Cloud Services" },
    ],
  },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full shadow-[0_8px_24px_rgba(17,27,80,0.18)]"
      style={{ animation: "navSlideDown 0.45s cubic-bezier(0.22,1,0.36,1) both" }}
    >
      <style>{`
        @keyframes navSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown-menu {
          animation: dropdownFade 0.18s ease both;
        }
      `}</style>

      <div className="mx-auto w-full bg-[#2c28d8]">
        <div className="flex flex-col md:grid md:grid-cols-[180px_1fr] md:grid-rows-2">

          {/* ── Logo (spans 2 rows) ── */}
          <Link
            className="row-span-2 flex items-center justify-center bg-[#2c28d8] md:h-full relative overflow-visible"
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

          {/* ── Top white bar: contact info ── */}
          <div className="flex min-h-[44px] items-center justify-center gap-x-0 gap-y-1 rounded-bl-[45px] bg-white px-5 py-2 font-body text-[12px] text-[#3c4b85] sm:justify-start">
            <a
              className="inline-flex items-center gap-2 pr-5 transition-opacity hover:opacity-70 "
              href="tel:+447400714002"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 text-[#3c4b85]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>+ 44 7400714002</span>
            </a>

            <span className="mx-1 h-5 border-l border-dashed border-[#c0c8e0]" aria-hidden="true" />

            <a
              className="inline-flex items-center gap-2 pl-5 transition-opacity hover:opacity-70"
              href="mailto:contact@tevsotech.com"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0 text-[#3c4b85]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
              <span>contact@tevsotech.com</span>
            </a>
          </div>

          {/* ── Blue nav bar ── */}
          <div className="bg-[#2c28d8]">
            <div className="flex min-h-10 items-center justify-between px-5 py-2">

              {/* Desktop nav */}
              <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.href} className="relative" ref={dropdownRef}>
                      <button
                        className={`group inline-flex items-center gap-1 py-1.5 font-body text-[13px] font-semibold transition-colors ${isActivePath(link.href) ? "text-white" : "text-white/75 hover:text-white"
                          }`}
                        onClick={() => setServicesOpen((p) => !p)}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        type="button"
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {servicesOpen && (
                        <div className="dropdown-menu absolute left-0 top-full mt-2 min-w-[180px] rounded-lg bg-white py-1.5 shadow-[0_8px_30px_rgba(17,27,80,0.18)]">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-[12px] font-semibold text-[#3c4b85] transition-colors hover:bg-[#f0f2ff] hover:text-[#2c28d8]"
                              onClick={() => { setServicesOpen(false); closeMobileMenu(); }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      className={`group relative py-1.5 font-body text-[13px] font-semibold transition-colors ${isActivePath(link.href) ? "text-white" : "text-white/75 hover:text-white"
                        }`}
                      href={link.href}
                      onClick={closeMobileMenu}
                    >
                      <span>{link.label}</span>
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-[7px] left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-white transition-opacity ${isActivePath(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                          }`}
                      />
                    </Link>
                  )
                )}
              </nav>

              <button
                aria-controls="mobile-primary-navigation"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/30 text-white transition-colors hover:bg-white/10 lg:hidden"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                type="button"
              >
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isMobileMenuOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  )}
                </svg>
              </button>
            </div>

            <div
              id="mobile-primary-navigation"
              className={`overflow-hidden border-t border-white/20 transition-[max-height,opacity] duration-300 lg:hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <nav aria-label="Mobile primary navigation" className="mx-auto flex w-full flex-col gap-1 px-5 py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className={`rounded-sm px-3 py-2.5 font-body text-sm font-semibold transition-colors ${isActivePath(link.href)
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
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

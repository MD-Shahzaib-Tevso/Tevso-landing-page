import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-brand">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-end gap-6 px-6 py-2 font-body text-xs text-white/90">
          <span>+44 121 285 0092</span>
          <span>contact@tevso.com</span>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link className="font-heading text-2xl font-bold text-brand" href="/">
            tevso
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} className="font-body text-sm font-medium text-slate-700 transition-colors hover:text-brand" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button className="rounded-md bg-brand px-4 py-2 font-body text-xs font-semibold text-white">Get Started</button>
        </div>
      </div>
    </header>
  );
}
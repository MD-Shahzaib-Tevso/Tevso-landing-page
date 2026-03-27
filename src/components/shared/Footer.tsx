export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-2xl font-bold text-brand">tevso</p>
          <p className="mt-3 max-w-xs font-body text-sm leading-6 text-slate-600">
            Placeholder company summary. Replace this text with your formal footer company description and social links.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base text-slate-900">Website Links</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-slate-600">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Case Studies</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base text-slate-900">Services</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-slate-600">
            <li>Product Discovery</li>
            <li>Product Development</li>
            <li>Staff Augmentation</li>
            <li>Business Consulting</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base text-slate-900">Contact Us</h3>
          <ul className="mt-4 space-y-2 font-body text-sm text-slate-600">
            <li>+44 121 285 0092</li>
            <li>contact@tevso.com</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-200 px-6 pt-6 text-center font-body text-xs text-slate-500">
        Copyright 2026 Tevso. All rights reserved.
      </div>
    </footer>
  );
}
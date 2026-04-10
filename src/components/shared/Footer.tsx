import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const linkStyles = "relative inline-block text-[#555555] transition-all duration-300 hover:text-[#311DE6] group pb-1";
  const underlineStyles = "absolute bottom-0 left-0 h-[1px] w-0 bg-[#311DE6] transition-all duration-300 group-hover:w-full";

  return (
    <footer className="w-full bg-white pb-10 pt-20">
      <div className="mx-auto max-w-[1250px] px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Logo & Social Column */}
          <div className="flex flex-col space-y-8 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/footer-logo.png"
                alt="Tevso Logo"
                width={150}
                height={50}
                className="h-auto w-auto"
              />
            </Link>
            
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#311DE6] text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#311DE6]/30">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.95 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#311DE6] text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#311DE6]/30">
                <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Linkedin */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#311DE6] text-white transition-all hover:scale-110 hover:shadow-lg hover:shadow-[#311DE6]/30">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" /></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8 lg:gap-12">
            
            {/* Website Links */}
            <div>
              <h3 className="font-heading text-[18px] font-bold text-[#222222]">Website Links</h3>
              <ul className="mt-6 space-y-4 font-body text-[15px]">
                <li><Link href="/" className={linkStyles}>Home<span className={underlineStyles}></span></Link></li>
                <li><Link href="/about" className={linkStyles}>About<span className={underlineStyles}></span></Link></li>
                <li><Link href="/portfolio" className={linkStyles}>Portfolio<span className={underlineStyles}></span></Link></li>
                <li><Link href="/case-studies" className={linkStyles}>Case studies<span className={underlineStyles}></span></Link></li>
                <li><Link href="/contact" className={linkStyles}>Contact us<span className={underlineStyles}></span></Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-[18px] font-bold text-[#222222]">Services</h3>
              <ul className="mt-6 space-y-4 font-body text-[15px]">
                <li><Link href="#" className={linkStyles}>Website designing<span className={underlineStyles}></span></Link></li>
                <li><Link href="#" className={linkStyles}>Website development<span className={underlineStyles}></span></Link></li>
                <li><Link href="#" className={linkStyles}>Seo services<span className={underlineStyles}></span></Link></li>
                <li><Link href="#" className={linkStyles}>Application designing<span className={underlineStyles}></span></Link></li>
                <li><Link href="#" className={linkStyles}>Application development<span className={underlineStyles}></span></Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-heading text-[18px] font-bold text-[#222222]">Contact Us</h3>
              <ul className="mt-6 space-y-4 font-body text-[15px]">
                <li>
                  <a href="tel:+447400714002" className="relative inline-block font-medium text-[#222222] transition-colors duration-300 hover:text-[#311DE6]">
                    + 44 7400714002
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@tevsotech.com" className="relative inline-block break-all text-[#222222] transition-colors duration-300 hover:text-[#311DE6]">
                    contact@tevsotech.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-[#EEEEEE] pt-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-center font-body text-[14px] text-[#777777]">
              © Copyright 2026 Tevso - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



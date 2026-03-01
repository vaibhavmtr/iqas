import React from 'react';
import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-200 bg-emerald-50 safe-area-padding-x">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:px-8 md:py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <Link
            href="/"
            className="text-base font-bold text-emerald-800 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md min-h-[44px] flex items-center justify-center md:justify-start sm:text-lg"
          >
            IQAS Agri
          </Link>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600 md:mt-8 md:text-left safe-area-padding-b">
          © {currentYear} IQAS Agri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

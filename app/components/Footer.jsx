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
    <footer className="border-t border-emerald-200 bg-emerald-50">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-emerald-800 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
          >
            IQAS Agri
          </Link>
          {/* <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {FOOTER_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600 md:mt-8 md:text-left">
          © {currentYear} IQAS Agri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

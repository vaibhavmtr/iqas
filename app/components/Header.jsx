'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (isActive) =>
    `block rounded-lg px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
      isActive
        ? 'bg-emerald-100 text-emerald-800'
        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-200 bg-white safe-area-padding-x">
      <div className="mx-auto max-w-6xl">
        <div className="flex min-h-[52px] items-center justify-between gap-3 px-4 py-2 md:px-6">
          <Link
            href="/"
            className="text-lg font-bold text-emerald-800 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg py-2 md:text-xl"
          >
            IQAS Agri
          </Link>

          {/* Desktop: inline links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <li key={href}>
                  <Link href={href} className={linkClass(isActive)}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile: menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile: expandable nav (no overlay, just flows below) */}
        {open && (
          <nav
            className="border-t border-emerald-100 bg-emerald-50/50 px-4 py-3 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive =
                  pathname === href || (href !== '/' && pathname?.startsWith(href));
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={linkClass(isActive)}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

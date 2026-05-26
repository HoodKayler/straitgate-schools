'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { School } from '@/lib/content';

interface NavbarProps {
  schools: School[];
  logoUrl?: string;
}

export default function Navbar({ schools, logoUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'About Us',
      children: [
        { label: 'History', href: '/about/history' },
      ],
    },
    {
      label: 'Schools',
      children: schools.map((s) => ({
        label: s.name,
        href: `/schools/${s.initial}`,
      })),
    },
    {
      label: 'Admissions',
      children: schools
        .filter((s) => s.admission_url)
        .map((s) => ({
          label: s.name,
          href: s.admission_url!,
          external: true,
        })),
    },
    { label: 'News', href: '/#news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/logos.png"
                alt="Straitgate Schools"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
              <span className={`hidden sm:block text-lg font-bold tracking-tight transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Straitgate Schools
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        scrolled
                          ? 'text-gray-700 hover:text-primary hover:bg-primary/5'
                          : 'text-white hover:text-white/80'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              target={'external' in child && child.external ? '_blank' : undefined}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled
                        ? 'text-gray-700 hover:text-primary hover:bg-primary/5'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 rounded-lg ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logos.png"
                      alt="Straitgate Schools"
                      width={100}
                      height={34}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-sm font-bold text-gray-900">Straitgate Schools</span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500">
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {navLinks.map((item) =>
                    item.children ? (
                      <div key={item.label}>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  target={'external' in child && child.external ? '_blank' : undefined}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href!}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

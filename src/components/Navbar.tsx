'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hexagon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navbar');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('services'), href: '#services' },
    { name: t('about'), href: '#about' },
    { name: t('emergency'), href: '#emergency' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gobo-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <Hexagon className="h-10 w-10 text-gobo-neon fill-gobo-dark group-hover:rotate-90 transition-transform duration-500" strokeWidth={2.5} />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-gobo-neon text-lg">G</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                GoBo<span className="text-gobo-neon">clean</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gobo-neon transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#contact"
              className="bg-gobo-neon text-gobo-dark px-6 py-2.5 rounded-full font-bold hover:bg-white hover:text-gobo-dark transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>{t('quote')}</span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gobo-neon focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-gobo-dark border-t border-gray-800 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gobo-medium rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-gobo-neon text-gobo-dark px-6 py-3 rounded-lg font-bold"
          >
            {t('quote')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };

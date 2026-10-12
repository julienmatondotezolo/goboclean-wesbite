'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Hexagon } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from 'react';
import GB from 'country-flag-icons/react/3x2/GB';
import FR from 'country-flag-icons/react/3x2/FR';
import NL from 'country-flag-icons/react/3x2/NL';
import { LanguageSwitcher } from './LanguageSwitcher';

const languages = [
  { code: "nl", label: "Nederlands", Flag: NL },
  { code: "fr", label: "Français", Flag: FR },
  { code: "en", label: "English", Flag: GB },
] as const;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations('legacy.navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    setIsLangOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-lang-switcher')) {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isLangOpen]);

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

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Switcher - Flag Only */}
            <div className="relative mobile-lang-switcher">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                disabled={isPending}
                className={`flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700/50 
                  hover:border-gobo-neon/50 transition-all duration-200 ${isPending ? 'opacity-50' : ''}`}
                aria-label="Select language"
              >
                <currentLanguage.Flag className="w-6 h-4 rounded-sm" />
              </button>

              {/* Mobile Language Dropdown */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-gobo-dark border border-gray-700/50 rounded-lg shadow-xl overflow-hidden z-50">
                  {languages.map((lang) => {
                    const FlagIcon = lang.Flag;
                    const isActive = lang.code === locale;
                    
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        disabled={isPending || isActive}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-150
                          ${isActive 
                            ? 'bg-gobo-neon/10 text-gobo-neon cursor-default' 
                            : 'text-gray-300 hover:bg-gobo-medium/30 hover:text-gobo-neon cursor-pointer'
                          }
                          ${isPending ? 'opacity-50' : ''}
                          border-b border-gray-800/30 last:border-b-0`}
                      >
                        <FlagIcon className="w-6 h-4 rounded-sm flex-shrink-0" />
                        <span className="flex-1 text-left text-xs">{lang.label}</span>
                        {isActive && (
                          <span className="text-gobo-neon text-xs">✓</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Hamburger Menu */}
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

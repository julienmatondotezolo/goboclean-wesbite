'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { COMPANY } from '@/lib/company';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Brand } from './primitives';

const LOCALES = ['fr', 'nl', 'en'] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: t('services') },
    { href: '#sectors', label: t('sectors') },
    { href: '#method', label: t('method') },
    { href: '#why', label: t('why') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'bg-forest/95 py-3 shadow-[0_1px_0_rgb(163_230_53/0.15)] backdrop-blur-md' : 'py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label="GoboClean">
          <Brand />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-lime"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 rounded-full border border-lime/40 px-4 py-2 font-mono text-xs text-lime transition-colors hover:bg-lime hover:text-ink"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            24/7 · {COMPANY.phone}
          </a>
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white"
          >
            {t('quote')}
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-white lg:hidden"
          aria-label={t('menu')}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-4 pb-6 pt-4 sm:px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-lg font-semibold text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-4">
            {LOCALES.map((code) => (
              <button
                key={code}
                onClick={() => {
                  setOpen(false);
                  startTransition(() => router.replace(pathname, { locale: code }));
                }}
                className={cn(
                  'rounded-full border px-4 py-1.5 font-mono text-xs uppercase',
                  code === locale ? 'border-lime bg-lime text-ink' : 'border-white/25 text-white/80'
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-4">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-lime/50 py-3 text-sm font-bold text-lime"
            >
              <Phone size={16} /> {t('emergency')}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-lime py-3 text-center text-sm font-bold text-ink"
            >
              {t('quote')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

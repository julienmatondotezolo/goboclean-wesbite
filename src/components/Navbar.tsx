'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { COMPANY, ROUTES } from '@/lib/company';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Brand } from './primitives';

const LOCALES = ['fr', 'nl', 'en'] as const;

type ServiceItem = { key: string; title: string };

export function Navbar() {
  const t = useTranslations('nav');
  const ts = useTranslations('services');
  const services = ts.raw('items') as ServiceItem[];
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

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const links = [
    { href: ROUTES.sectors, label: t('sectors') },
    { href: ROUTES.about, label: t('about') },
    { href: ROUTES.emergency, label: t('emergency') },
    { href: ROUTES.contact, label: t('contact') },
  ];

  const linkClass = (href: string) =>
    cn(
      'relative text-sm font-medium transition-colors hover:text-lime',
      isActive(href) ? 'text-lime' : 'text-white/75'
    );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'bg-forest/95 py-3 shadow-[0_1px_0_rgb(163_230_53/0.15)] backdrop-blur-md' : 'py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} aria-label="GoboClean">
          <Brand />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {/* Services + sous-menu */}
          <div className="group relative">
            <Link href={ROUTES.services} className={cn(linkClass(ROUTES.services), 'flex items-center gap-1 py-2')}>
              {t('services')}
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-sm bg-white shadow-[0_30px_60px_-20px_rgb(7_26_15/0.5)]">
                <ul className="py-2">
                  {services.map((s, i) => (
                    <li key={s.key}>
                      <Link
                        href={ROUTES.service(s.key)}
                        className={cn(
                          'flex items-center gap-3 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-chalk',
                          isActive(ROUTES.service(s.key)) ? 'text-moss' : 'text-ink'
                        )}
                      >
                        <span className="font-mono text-[11px] text-moss">{String(i + 1).padStart(2, '0')}</span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={ROUTES.services}
                  className="block border-t border-black/5 bg-chalk px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-forest transition-colors hover:bg-lime"
                >
                  {t('allServices')} →
                </Link>
              </div>
            </div>
          </div>

          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
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
          <Link
            href={ROUTES.contact}
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-white"
          >
            {t('quote')}
          </Link>
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
          'overflow-y-auto transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[calc(100dvh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
          <Link
            href={ROUTES.services}
            className={cn(
              'block border-b border-white/10 py-3 text-lg font-semibold',
              isActive(ROUTES.services) ? 'text-lime' : 'text-white'
            )}
          >
            {t('services')}
          </Link>
          <ul className="grid grid-cols-1 gap-x-4 border-b border-white/10 py-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.key}>
                <Link
                  href={ROUTES.service(s.key)}
                  className={cn(
                    'block py-2 pl-4 text-[15px]',
                    isActive(ROUTES.service(s.key)) ? 'text-lime' : 'text-white/70'
                  )}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'block border-b border-white/10 py-3 text-lg font-semibold',
                isActive(l.href) ? 'text-lime' : 'text-white'
              )}
            >
              {l.label}
            </Link>
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
            <Link href={ROUTES.contact} className="rounded-full bg-lime py-3 text-center text-sm font-bold text-ink">
              {t('quote')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

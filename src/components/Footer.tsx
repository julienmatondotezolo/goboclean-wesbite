'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { COMPANY, ROUTES } from '@/lib/company';
import { Brand } from './primitives';

type ServiceItem = { key: string; title: string };

const heading = 'font-mono text-[11px] uppercase tracking-[0.18em] text-lime';
const link = 'text-sm text-white/65 transition-colors hover:text-lime';

export function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const ts = useTranslations('services');
  const services = ts.raw('items') as ServiceItem[];

  const nav = [
    { href: ROUTES.home, label: tn('home') },
    { href: ROUTES.services, label: tn('services') },
    { href: ROUTES.sectors, label: tn('sectors') },
    { href: ROUTES.about, label: tn('about') },
    { href: ROUTES.emergency, label: tn('emergency') },
    { href: ROUTES.contact, label: tn('contact') },
  ];

  return (
    <footer className="bg-ink pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href={ROUTES.home} aria-label="GoboClean">
              <Brand />
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-white/55">{t('tagline')}</p>
          </div>

          <div className="md:col-span-3">
            <h3 className={heading}>{t('services')}</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={ROUTES.service(s.key)} className={link}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className={heading}>{t('navigation')}</h3>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={link}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className={heading}>{t('company')}</h3>
            <address className="mt-5 space-y-2.5 text-sm not-italic text-white/65">
              <p className="font-semibold text-white">{COMPANY.name}</p>
              <p>
                {COMPANY.street}
                <br />
                {COMPANY.city}
              </p>
              <p>
                <a href={COMPANY.phoneHref} className="transition-colors hover:text-lime">{COMPANY.phone}</a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-lime">{COMPANY.email}</a>
              </p>
              <p>TVA / BTW {COMPANY.vat}</p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. {t('rights')} ·{' '}
            <Link href={ROUTES.privacy} className="underline-offset-4 transition-colors hover:text-lime hover:underline">
              {t('privacy')}
            </Link>
          </p>
          <p className="font-mono uppercase tracking-[0.16em]">VCA certified · 24/7</p>
        </div>
      </div>
    </footer>
  );
}

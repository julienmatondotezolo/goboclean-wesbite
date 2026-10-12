'use client';

import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { COMPANY, ROUTES } from '@/lib/company';
import { Visual } from './primitives';

export function Hero() {
  const t = useTranslations('hero');
  const badges = [t('badgeVca'), t('badge24'), t('badgeBe'), t('badgeEco')];

  return (
    <section className="grain relative overflow-hidden bg-forest pb-28 pt-32 sm:pt-40 lg:pb-36">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-lime/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="rise mb-6 font-mono text-xs uppercase tracking-[0.22em] text-lime" style={{ '--d': '0ms' } as React.CSSProperties}>
            {t('eyebrow')}
          </p>
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            <span className="rise block" style={{ '--d': '80ms' } as React.CSSProperties}>{t('title1')}</span>
            <span className="rise block" style={{ '--d': '160ms' } as React.CSSProperties}>{t('title2')}</span>
            <span className="rise block text-lime" style={{ '--d': '240ms' } as React.CSSProperties}>{t('titleHighlight')}</span>
          </h1>
          <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-white/70" style={{ '--d': '360ms' } as React.CSSProperties}>
            {t('lead')}
          </p>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ '--d': '460ms' } as React.CSSProperties}>
            <Link
              href={ROUTES.contact}
              className="group flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-ink transition-colors hover:bg-white"
            >
              {t('ctaQuote')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition-colors hover:border-lime hover:text-lime"
            >
              <Phone size={18} />
              {t('ctaCall')}
            </a>
          </div>
          <ul className="rise mt-12 flex flex-wrap gap-x-6 gap-y-3" style={{ '--d': '560ms' } as React.CSSProperties}>
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
                <span className="h-1.5 w-1.5 rotate-45 bg-lime" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise relative lg:col-span-5" style={{ '--d': '300ms' } as React.CSSProperties}>
          {/* Cadre « viseur » aux coins lime */}
          <div className="pointer-events-none absolute -inset-3 z-10">
            <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-lime" />
            <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-lime" />
            <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-lime" />
            <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-lime" />
          </div>
          <Visual src="/images/hero-facade.webp" alt={t('visualLabel')} className="aspect-[4/3] w-full rounded-sm lg:aspect-[4/5]" />
          <div className="absolute -bottom-6 -left-4 z-20 flex items-center gap-3 rounded-sm bg-white px-5 py-4 shadow-2xl sm:-left-8">
            <ShieldCheck className="h-9 w-9 text-moss" strokeWidth={1.75} />
            <div>
              <p className="font-display text-lg font-extrabold leading-none text-ink">VCA</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

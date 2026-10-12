'use client';

import React from 'react';
import {
  ArrowUpRight,
  Award,
  Camera,
  Check,
  Leaf,
  Phone,
  ShieldCheck,
  Truck,
  Umbrella,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { COMPANY } from '@/lib/company';
import { Eyebrow, Reveal, Visual } from './primitives';

type ServiceItem = { key: string; title: string; desc: string; points: string[] };
type TextItem = { title: string; desc: string };

/* ─── Chiffres clés ─────────────────────────────────────────── */
export function Figures() {
  const t = useTranslations('figures');
  const figures = [
    { value: '5', label: t('agents') },
    { value: '4', label: t('vans') },
    { value: '4', label: t('machines') },
    { value: '24/7', label: t('availability') },
  ];

  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl bg-white shadow-[0_30px_60px_-30px_rgb(7_26_15/0.35)]">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {figures.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 90}
              className="border-b border-r border-black/5 px-6 py-8 sm:px-8 sm:py-10 [&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <p className="font-display text-5xl font-extrabold tracking-[-0.04em] text-forest sm:text-6xl">
                {f.value}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase leading-snug tracking-[0.16em] text-stone">
                {f.label}
              </p>
            </Reveal>
          ))}
        </div>
        <p className="border-t border-black/5 bg-lime/15 px-6 py-4 text-sm font-medium text-forest sm:px-8">
          {t('note')}
        </p>
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────── */
export function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as ServiceItem[];

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{t('eyebrow')}</Eyebrow>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
              {t('title')}
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-stone">{t('lead')}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.key} delay={(i % 3) * 100} className="group flex flex-col bg-chalk">
              <Visual src={`/images/service-${s.key}.webp`} alt={s.title} className="aspect-[4/3]" />
              <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-xs text-moss">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{s.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-black/10 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium text-ink/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-moss" strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Secteurs ──────────────────────────────────────────────── */
export function Sectors() {
  const t = useTranslations('sectors');
  const items = t.raw('items') as TextItem[];

  return (
    <section id="sectors" className="grain relative overflow-hidden bg-forest py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow light>{t('eyebrow')}</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
                {t('title')}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/65">{t('lead')}</p>
            </Reveal>
            <Reveal delay={150} className="mt-10 hidden lg:block">
              <Visual src="/images/sectors-building.webp" alt={t('title')} className="aspect-[5/4] rounded-sm" />
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {items.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className="group grid grid-cols-[3.5rem_1fr] gap-4 border-t border-white/15 py-8 last:border-b"
            >
              <span className="font-mono text-sm text-lime">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="flex items-center gap-2 font-display text-2xl font-bold tracking-[-0.02em] transition-colors group-hover:text-lime">
                  {s.title}
                  <ArrowUpRight size={20} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Méthode ───────────────────────────────────────────────── */
export function Method() {
  const t = useTranslations('method');
  const items = t.raw('items') as TextItem[];

  return (
    <section id="method" className="bg-grid-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            {t('title')}
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-forest/20 lg:left-0 lg:top-[19px] lg:h-px lg:w-full" />
          {items.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110} className="relative grid grid-cols-[2.5rem_1fr] gap-5 lg:block">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-forest font-mono text-sm font-medium text-lime ring-8 ring-chalk">
                {i + 1}
              </span>
              <div className="lg:mt-7 lg:pr-4">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Engagements ───────────────────────────────────────────── */
const WHY_ICONS = [ShieldCheck, Umbrella, Leaf, Camera, Truck, Award];

export function Why() {
  const t = useTranslations('why');
  const items = t.raw('items') as TextItem[];

  return (
    <section id="why" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            {t('title')}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w, i) => {
            const Icon = WHY_ICONS[i] ?? Check;
            return (
              <Reveal key={w.title} delay={(i % 3) * 90} className="group bg-white p-8 transition-colors hover:bg-chalk">
                <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-forest text-lime transition-transform group-hover:-translate-y-1">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.01em] text-ink">{w.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{w.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Urgence 24/7 ──────────────────────────────────────────── */
export function Emergency() {
  const t = useTranslations('emergency');

  return (
    <section id="emergency" className="relative overflow-hidden bg-lime py-20 sm:py-24">
      <div className="bg-grid-dark absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <Reveal className="lg:col-span-7">
          <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-forest">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-forest" />
            </span>
            {t('eyebrow')}
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest/80">{t('lead')}</p>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5">
          <a
            href={COMPANY.phoneHref}
            className="group block bg-forest p-8 text-white transition-transform hover:-translate-y-1 sm:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">{t('cta')}</p>
            <p className="mt-4 flex items-center gap-3 font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
              <Phone className="shrink-0 text-lime" size={30} />
              {COMPANY.phone}
            </p>
            <p className="mt-4 text-sm text-white/60">{t('note')}</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

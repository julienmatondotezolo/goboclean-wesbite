"use client";

import React from "react";
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { COMPANY, ROUTES } from "@/lib/company";
import { cn } from "@/lib/utils";
import { Eyebrow, Reveal, Visual } from "./primitives";

type ServiceItem = { key: string; title: string; desc: string; points: string[]; long: string[]; includes: string[] };
type SectorItem = { title: string; desc: string; services: string[] };
type TextItem = { title: string; desc: string };

/* ─── En-tête de page (fond forêt, sous la barre de navigation) ─── */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs = [],
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: { href?: string; label: string }[];
  image?: { src: string; alt: string };
  children?: React.ReactNode;
}) {
  const tn = useTranslations("nav");
  const trail = [{ href: ROUTES.home, label: tn("home") }, ...crumbs];

  return (
    <section className="grain relative overflow-hidden bg-forest pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-lime/10 blur-[120px]" />
      <div
        className={cn(
          "relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8",
          image && "lg:grid-cols-12 lg:items-end",
        )}
      >
        <div className={cn(image ? "lg:col-span-7" : "max-w-4xl")}>
          <nav aria-label="Breadcrumb" className="rise mb-8" style={{ "--d": "0ms" } as React.CSSProperties}>
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
              {trail.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={12} />}
                  {c.href && i < trail.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-lime">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/75">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p
            className="rise mb-5 font-mono text-xs uppercase tracking-[0.22em] text-lime"
            style={{ "--d": "60ms" } as React.CSSProperties}
          >
            {eyebrow}
          </p>
          <h1
            className="rise font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as React.CSSProperties}
          >
            {title}
          </h1>
          {lead && (
            <p
              className="rise mt-7 max-w-2xl text-lg leading-relaxed text-white/70"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              {lead}
            </p>
          )}
          {children && (
            <div className="rise mt-10" style={{ "--d": "320ms" } as React.CSSProperties}>
              {children}
            </div>
          )}
        </div>
        {image && (
          <div className="rise lg:col-span-5" style={{ "--d": "260ms" } as React.CSSProperties}>
            <Visual src={image.src} alt={image.alt} className="aspect-[4/3] rounded-sm" />
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Bandeau d'appel à l'action (bas de page) ─── */
export function CtaBand() {
  const t = useTranslations("common.cta");

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <Reveal className="grain relative mx-auto max-w-7xl overflow-hidden bg-forest px-8 py-14 text-white sm:px-14 sm:py-16">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-lime/15 blur-[100px]" />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">{t("lead")}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Link
              href={ROUTES.contact}
              className="group flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 font-bold text-ink transition-colors hover:bg-white"
            >
              {t("quote")}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold transition-colors hover:border-lime hover:text-lime"
            >
              <Phone size={18} />
              {t("call")}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── Page d'un service ─── */
export function ServiceDetail({ serviceKey }: { serviceKey: string }) {
  const t = useTranslations("pages.serviceDetail");
  const ts = useTranslations("services");
  const tn = useTranslations("nav");
  const tw = useTranslations("why");
  const items = ts.raw("items") as ServiceItem[];
  const index = items.findIndex((s) => s.key === serviceKey);
  const s = items[index];
  const others = items.filter((o) => o.key !== serviceKey);
  const guarantees = (tw.raw("items") as TextItem[]).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={`${t("eyebrow")} ${String(index + 1).padStart(2, "0")}`}
        title={s.title}
        lead={s.desc}
        crumbs={[{ href: ROUTES.services, label: tn("services") }, { label: s.title }]}
        image={{ src: `/images/service-${s.key}.webp`, alt: s.title }}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal className="space-y-6 text-lg leading-relaxed text-ink/80">
              {s.long.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={100} className="mt-14">
              <Eyebrow>{t("includesTitle")}</Eyebrow>
              <ul className="grid gap-px bg-black/10 sm:grid-cols-2">
                {s.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 bg-chalk p-5 font-medium text-ink">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime">
                      <Check size={14} strokeWidth={3} className="text-forest" />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={150} className="lg:sticky lg:top-28">
              <div className="bg-white p-8 shadow-[0_30px_60px_-30px_rgb(7_26_15/0.35)] sm:p-10">
                <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-ink">{t("asideTitle")}</h2>
                <p className="mt-3 leading-relaxed text-stone">{t("asideLead")}</p>
                <Link
                  href={`${ROUTES.contact}?service=${s.key}`}
                  className="group mt-7 flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-bold text-white transition-colors hover:bg-moss"
                >
                  {t("asideCta")}
                  <ArrowRight size={18} className="text-lime transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
                  {t("asideOr")}
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="mt-2 flex items-center justify-center gap-2 font-display text-2xl font-extrabold tracking-[-0.02em] text-forest transition-colors hover:text-moss"
                >
                  <Phone size={20} className="text-moss" />
                  {COMPANY.phone}
                </a>
                <ul className="mt-8 space-y-3 border-t border-black/10 pt-7">
                  {guarantees.map((g) => (
                    <li key={g.title} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                      <ShieldCheck size={18} className="shrink-0 text-moss" strokeWidth={1.75} />
                      {g.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>{t("otherTitle")}</Eyebrow>
          </Reveal>
          <ul className="mt-4 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o, i) => (
              <Reveal as="li" key={o.key} delay={i * 70} className="bg-white">
                <Link
                  href={ROUTES.service(o.key)}
                  className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-chalk"
                >
                  <span className="font-mono text-xs text-moss">{String(items.indexOf(o) + 1).padStart(2, "0")}</span>
                  <span className="flex items-end justify-between gap-3 font-display text-lg font-bold leading-tight tracking-[-0.01em] text-ink">
                    {o.title}
                    <ArrowRight
                      size={18}
                      className="shrink-0 text-moss transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

/* ─── Page Secteurs : chaque secteur avec ses services typiques ─── */
export function SectorsList() {
  const t = useTranslations("sectors");
  const tp = useTranslations("pages.sectors");
  const ts = useTranslations("services");
  const items = t.raw("items") as SectorItem[];
  const services = ts.raw("items") as ServiceItem[];
  const titleOf = (key: string) => services.find((s) => s.key === key)?.title ?? key;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="hidden lg:col-span-4 lg:block">
          <Reveal className="sticky top-28">
            <Visual src="/images/sectors-building.webp" alt={tp("title")} className="aspect-[4/5] rounded-sm" />
          </Reveal>
        </div>
        <ol className="lg:col-span-8">
          {items.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 2) * 80}
              className="grid gap-4 border-t border-black/10 py-10 last:border-b sm:grid-cols-[4rem_1fr]"
            >
              <span className="font-mono text-sm text-moss">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-ink">{s.title}</h2>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed text-stone">{s.desc}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
                  {tp("servicesLabel")}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.services.map((key) => (
                    <li key={key}>
                      <Link
                        href={ROUTES.service(key)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-forest/20 bg-white px-4 py-2 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-lime"
                      >
                        {titleOf(key)}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Page Entreprise : présentation ─── */
export function AboutIntro() {
  const t = useTranslations("pages.about");
  const paragraphs = t.raw("intro") as string[];

  return (
    <section className="pb-8 pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-5">
          <Eyebrow>{t("introEyebrow")}</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
            {t("introTitle")}
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-7">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Page Urgence : situations + déroulé ─── */
export function EmergencyDetails() {
  const t = useTranslations("pages.emergency");
  const situations = t.raw("situations") as TextItem[];
  const steps = t.raw("steps") as TextItem[];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
              {t("situationsTitle")}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {situations.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90} className="bg-chalk p-8">
                <span className="font-mono text-xs text-moss">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-lime py-20 sm:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-5xl">
              {t("stepsTitle")}
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 110} className="bg-forest p-8 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime font-mono text-sm font-medium text-ink">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

/* ─── Bouton d'appel d'urgence (en-tête de la page Urgence) ─── */
export function EmergencyCall() {
  const t = useTranslations("pages.emergency");

  return (
    <a
      href={COMPANY.phoneHref}
      className="group inline-flex items-center gap-5 bg-lime px-7 py-5 text-ink transition-colors hover:bg-white"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-forest" />
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-forest">{t("callLabel")}</span>
        <span className="mt-1 block font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
          {COMPANY.phone}
        </span>
      </span>
    </a>
  );
}

/* ─── Politique de confidentialité ─── */
export function PrivacyContent() {
  const t = useTranslations("pages.privacy");
  const sections = t.raw("sections") as { title: string; body: string }[];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">{t("updated")}</p>
        <div className="mt-10 space-y-10">
          {sections.map((s, i) => (
            <div key={s.title} className="grid gap-3 border-t border-black/10 pt-8 sm:grid-cols-[3rem_1fr]">
              <span className="font-mono text-sm text-moss">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-xl font-bold tracking-[-0.01em] text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-ink/75">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

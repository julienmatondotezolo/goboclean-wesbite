"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin, Phone, Receipt } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { COMPANY, CONTACT_ENDPOINT, ROUTES, SERVICE_KEYS } from "@/lib/company";
import { Eyebrow, Reveal } from "./primitives";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-sm border border-black/15 bg-white px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-forest focus:ring-2 focus:ring-lime/60";
const label = "mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-stone";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");

  // Pré-sélection du service quand on arrive depuis la page d'un service (?service=facades)
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("service") || "";
    if ((SERVICE_KEYS as readonly string[]).includes(key) || key === "emergency") setService(key);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    // On n'envoie pas les champs vides (le backend refuse les clés inconnues, pas les absentes)
    const payload: Record<string, string> = { locale };
    for (const [k, v] of Object.entries(data)) if (v.trim()) payload[k] = v.trim();
    if (payload.service) payload.service = t(`form.options.${payload.service}`);

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setService("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const info = [
    { icon: Phone, label: t("phoneLabel"), value: COMPANY.phone, href: COMPANY.phoneHref },
    { icon: Mail, label: t("emailLabel"), value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPin, label: t("addressLabel"), value: `${COMPANY.street}, ${COMPANY.city}` },
    { icon: Receipt, label: t("vatLabel"), value: COMPANY.vat },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden shadow-[0_30px_80px_-40px_rgb(7_26_15/0.45)] lg:grid-cols-12">
          {/* Coordonnées */}
          <Reveal className="grain relative bg-forest p-8 text-white sm:p-12 lg:col-span-5">
            <div className="bg-grid absolute inset-0" />
            <div className="relative">
              <Eyebrow light>{t("eyebrow")}</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/65">{t("lead")}</p>

              <dl className="mt-12 space-y-6">
                {info.map(({ icon: Icon, label: l, value, href }) => (
                  <div key={l} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/10 text-lime">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">{l}</dt>
                      <dd className="mt-1 text-lg font-semibold">
                        {href ? (
                          <a href={href} className="transition-colors hover:text-lime">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-12 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
                {t("zone")}
              </p>
            </div>
          </Reveal>

          {/* Formulaire */}
          <div className="bg-white p-8 sm:p-12 lg:col-span-7">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-start justify-center py-16">
                <CheckCircle2 className="h-14 w-14 text-moss" strokeWidth={1.5} />
                <p className="mt-6 max-w-md font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Honeypot anti-robots : invisible pour les humains */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>
                      {t("form.name")} *
                    </label>
                    <input id="name" name="name" required maxLength={120} autoComplete="name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="company" className={label}>
                      {t("form.company")}
                    </label>
                    <input id="company" name="company" maxLength={160} autoComplete="organization" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>
                      {t("form.email")} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={160}
                      autoComplete="email"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={label}>
                      {t("form.phone")}
                    </label>
                    <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={label}>
                    {t("form.service")}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={field}
                  >
                    <option value="">—</option>
                    {[...SERVICE_KEYS, "emergency", "other"].map((k) => (
                      <option key={k} value={k}>
                        {t(`form.options.${k}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={label}>
                    {t("form.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={4000}
                    placeholder={t("form.messagePlaceholder")}
                    className={field}
                  />
                </div>

                <p className="text-sm leading-relaxed text-stone">
                  {t("form.consent")}{" "}
                  <Link
                    href={ROUTES.privacy}
                    className="font-semibold text-forest underline underline-offset-4 hover:text-moss"
                  >
                    {t("form.privacyLink")}
                  </Link>
                </p>

                {status === "error" && (
                  <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    {t("form.error")}
                  </p>
                )}

                <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">* {t("form.required")}</p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 font-bold text-white transition-colors hover:bg-moss disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> {t("form.sending")}
                      </>
                    ) : (
                      <>
                        {t("form.submit")}
                        <ArrowRight size={18} className="text-lime transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

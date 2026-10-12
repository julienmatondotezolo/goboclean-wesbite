import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CtaBand, ServiceDetail } from "@/components";
import { page, SERVICE_KEYS } from "@/lib/company";

type Props = { params: Promise<{ locale: string; slug: string }> };
type ServiceItem = { key: string; title: string; desc: string };

export function generateStaticParams() {
  return SERVICE_KEYS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const s = (t.raw("items") as ServiceItem[]).find((i) => i.key === slug);
  if (!s) return {};
  const path = `/${locale}${page(`/services/${slug}`)}`;
  return {
    title: s.title,
    description: s.desc,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${s.title} | GoboClean`, images: [{ url: `/images/service-${slug}.webp` }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!(SERVICE_KEYS as readonly string[]).includes(slug)) notFound();

  return (
    <>
      <ServiceDetail serviceKey={slug} />
      <CtaBand />
    </>
  );
}

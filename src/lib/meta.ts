import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { page } from "./company";

/** Métadonnées d'une page : titre et description traduits (namespace `pages.<key>`). */
export async function pageMetadata(locale: string, key: string, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `pages.${key}` });
  return {
    title: t("metaTitle"),
    description: t.has("metaDesc") ? t("metaDesc") : undefined,
    alternates: { canonical: `/${locale}${page(path)}` },
    openGraph: { url: `/${locale}${page(path)}`, title: `${t("metaTitle")} | GoboClean` },
  };
}

export type PageProps = { params: Promise<{ locale: string }> };

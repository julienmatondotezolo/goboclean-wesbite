import { getTranslations } from "next-intl/server";
import { CtaBand, PageHeader, SectorsList } from "@/components";
import { pageMetadata, type PageProps } from "@/lib/meta";

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata((await params).locale, "sectors", "/sectors");
}

export default async function SectorsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.sectors" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} crumbs={[{ label: t("eyebrow") }]} />
      <SectorsList />
      <CtaBand />
    </>
  );
}

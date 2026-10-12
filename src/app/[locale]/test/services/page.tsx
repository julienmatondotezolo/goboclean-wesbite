import { getTranslations } from "next-intl/server";
import { CtaBand, Method, PageHeader, Services } from "@/components";
import { pageMetadata, type PageProps } from "@/lib/meta";

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata((await params).locale, "services", "/services");
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.services" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} crumbs={[{ label: t("eyebrow") }]} />
      <Services header={false} />
      <Method />
      <CtaBand />
    </>
  );
}

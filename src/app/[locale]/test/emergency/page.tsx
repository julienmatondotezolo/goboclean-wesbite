import { getTranslations } from "next-intl/server";
import { CtaBand, EmergencyCall, EmergencyDetails, PageHeader } from "@/components";
import { pageMetadata, type PageProps } from "@/lib/meta";

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata((await params).locale, "emergency", "/emergency");
}

export default async function EmergencyPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.emergency" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} crumbs={[{ label: t("eyebrow") }]}>
        <EmergencyCall />
      </PageHeader>
      <EmergencyDetails />
      <CtaBand />
    </>
  );
}

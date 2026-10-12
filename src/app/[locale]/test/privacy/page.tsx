import { getTranslations } from "next-intl/server";
import { PageHeader, PrivacyContent } from "@/components";
import { pageMetadata, type PageProps } from "@/lib/meta";

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata((await params).locale, "privacy", "/privacy");
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.privacy" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} crumbs={[{ label: t("eyebrow") }]} />
      <PrivacyContent />
    </>
  );
}

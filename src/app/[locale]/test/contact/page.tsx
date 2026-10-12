import { getTranslations } from "next-intl/server";
import { Contact, PageHeader } from "@/components";
import { pageMetadata, type PageProps } from "@/lib/meta";

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata((await params).locale, "contact", "/contact");
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} crumbs={[{ label: t("eyebrow") }]} />
      <Contact />
    </>
  );
}

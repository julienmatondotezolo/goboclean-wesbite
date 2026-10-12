import { getTranslations } from "next-intl/server";
import { AboutIntro, CtaBand, Figures, Method, PageHeader, Why } from "@/components";
import { pageMetadata, type PageProps } from "@/lib/meta";

export async function generateMetadata({ params }: PageProps) {
  return pageMetadata((await params).locale, "about", "/about");
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });

  return (
    <>
      <PageHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} crumbs={[{ label: t("eyebrow") }]} />
      <Figures />
      <AboutIntro />
      <Why />
      <Method />
      <CtaBand />
    </>
  );
}

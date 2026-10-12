import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer, Navbar } from "@/components";

const SITE_URL = "https://www.goboclean.be";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("title"), template: "%s | GoboClean" },
    description: t("description"),
    // Refonte en test : pas d'indexation tant qu'elle n'est pas en production
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: "GoboClean",
      locale,
      title: t("title"),
      description: t("description"),
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

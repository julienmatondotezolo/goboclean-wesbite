import { Contact, Emergency, Figures, Footer, Hero, Method, Navbar, Sectors, Services, Why } from '@/components';
import { getTranslations } from 'next-intl/server';

const SITE_URL = 'https://www.goboclean.be';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    // Page de test de la refonte : pas d'indexation tant qu'elle n'est pas en production
    robots: { index: false, follow: false },
    openGraph: {
      type: 'website',
      siteName: 'GoboClean',
      locale,
      url: `/${locale}/test`,
      title: t('title'),
      description: t('description'),
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
  };
}

export default function RedesignPreview() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Figures />
        <Services />
        <Sectors />
        <Method />
        <Why />
        <Emergency />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

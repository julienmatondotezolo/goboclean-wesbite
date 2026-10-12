import { About, Contact, Emergency, Footer, Hero, Navbar, Services } from '@/components/legacy';
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';

// Site actuellement en production. La refonte est en test sur /[locale]/test.
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '600', '700', '800'] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legacy.metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home() {
  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 selection:bg-gobo-neon selection:text-gobo-dark ${inter.className}`}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Emergency />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import { About, Contact, Emergency, Footer, Hero, Navbar, Services } from '@/components';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  // Await params in Next.js 15
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gobo-neon selection:text-gobo-dark">
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

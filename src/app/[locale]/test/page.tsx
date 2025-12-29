import { useTranslations } from 'next-intl';

export default function TestPage() {
  const t = useTranslations('navbar');
  
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="text-xl text-gray-600">
          This is a test page to verify language switching preserves the URL path.
        </p>
        <p className="mt-4 text-lg">
          Navigation: {t('services')} | {t('about')} | {t('contact')}
        </p>
      </div>
    </div>
  );
}

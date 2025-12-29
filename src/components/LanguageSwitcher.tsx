'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/navigation';
import { routing } from '@/src/i18n/routing';

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  console.log('locale', locale);
  const pathname = usePathname();
  console.log('pathname', pathname);
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    // Use next-intl's router to navigate with the new locale
    // It automatically handles locale prefixing
    router.replace(pathname, { locale: newLocale });
  };

  const languageNames: Record<string, string> = {
    en: 'EN',
    fr: 'FR',
    nl: 'NL',
  };

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLanguageChange(loc)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-gobo-neon text-gobo-dark'
              : 'text-gray-300 hover:text-gobo-neon hover:bg-gobo-medium/30'
          }`}
        >
          {languageNames[loc]}
        </button>
      ))}
    </div>
  );
}

export { LanguageSwitcher };

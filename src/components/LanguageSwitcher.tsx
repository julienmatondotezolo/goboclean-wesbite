'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from 'react';

const languages = [
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
  { code: "fr", label: "Français", shortLabel: "FR", flag: "🇫🇷" },
  { code: "nl", label: "Nederlands", shortLabel: "NL", flag: "🇳🇱" },
] as const;

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          disabled={isPending || locale === lang.code}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === lang.code
              ? 'bg-gobo-neon text-gobo-dark'
              : 'text-gray-300 hover:text-gobo-neon hover:bg-gobo-medium/30'
          } ${isPending ? 'opacity-50' : ''}`}
        >
          {lang.shortLabel}
        </button>
      ))}
    </div>
  );
}

export { LanguageSwitcher };

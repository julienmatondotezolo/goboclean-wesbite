'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition, useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import GB from 'country-flag-icons/react/3x2/GB';
import FR from 'country-flag-icons/react/3x2/FR';
import NL from 'country-flag-icons/react/3x2/NL';

const languages = [
  { code: "nl", label: "Nederlands", shortLabel: "NL", Flag: NL },
  { code: "fr", label: "Français", shortLabel: "FR", Flag: FR },
  { code: "en", label: "English", shortLabel: "EN", Flag: GB },
] as const;

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CurrentFlag = currentLanguage.Flag;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gobo-medium/30 border border-gray-700/50 
          hover:bg-gobo-medium/50 hover:border-gobo-neon/30 transition-all duration-200 
          ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${isOpen ? 'border-gobo-neon/50 bg-gobo-medium/50' : ''}`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <CurrentFlag className="w-6 h-4 rounded-sm shadow-sm" />
        <span className="text-sm font-medium text-gray-200">
          {currentLanguage.label}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gobo-dark border border-gray-700/50 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => {
            const FlagIcon = lang.Flag;
            const isActive = lang.code === locale;
            
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isPending || isActive}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-150
                  ${isActive 
                    ? 'bg-gobo-neon/10 text-gobo-neon cursor-default' 
                    : 'text-gray-300 hover:bg-gobo-medium/30 hover:text-gobo-neon cursor-pointer'
                  }
                  ${isPending ? 'opacity-50' : ''}
                  border-b border-gray-800/30 last:border-b-0`}
              >
                <FlagIcon className="w-6 h-4 rounded-sm shadow-sm flex-shrink-0" />
                <span className="flex-1 text-left">{lang.label}</span>
                {isActive && (
                  <span className="text-gobo-neon text-xs">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { LanguageSwitcher };

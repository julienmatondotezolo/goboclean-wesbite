'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gobo-neon/20 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gobo-dark/10 rounded-full z-0"></div>
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden h-[600px] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                alt="Worker cleaning industrial floor" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Float Card */}
            <div className="absolute bottom-10 left-[-20px] md:left-[-40px] z-20 bg-white p-6 rounded-xl shadow-xl border-l-4 border-gobo-neon max-w-xs">
                <p className="text-4xl font-bold text-gobo-dark mb-1">10+</p>
                <p className="text-gray-600 font-medium">{t('statYears')}</p>
            </div>
          </div>

          <div>
            <h2 className="text-gobo-neon font-bold tracking-widest uppercase mb-3">{t('badge')}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">{t('title')}</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t('description1')}
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t('description2')}
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-slate-900 text-lg">{t('feature1Title')}</h4>
                    <p className="text-slate-500 text-sm">{t('feature1Description')}</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-slate-900 text-lg">{t('feature2Title')}</h4>
                    <p className="text-slate-500 text-sm">{t('feature2Description')}</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-slate-900 text-lg">{t('feature3Title')}</h4>
                    <p className="text-slate-500 text-sm">{t('feature3Description')}</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-slate-900 text-lg">{t('feature4Title')}</h4>
                    <p className="text-slate-500 text-sm">{t('feature4Description')}</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { About };

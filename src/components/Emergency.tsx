'use client';

import React from 'react';
import { PhoneCall, Clock, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Emergency: React.FC = () => {
  const t = useTranslations('emergency');

  return (
    <section id="emergency" className="bg-gobo-dark py-20 relative overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute -left-20 top-0 w-96 h-96 bg-gobo-neon rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -right-20 bottom-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-8 md:p-16 border border-emerald-800 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/50 px-4 py-1 rounded-full text-red-400 font-bold text-sm mb-6 uppercase tracking-wider animate-pulse">
                <Zap size={16} />
                {t('badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                {t('title')} <br />
                <span className="text-gobo-neon">{t('titleHighlight')}</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                {t('description')}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                    <Clock className="text-gobo-neon" />
                    <span>{t('feature1')}</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                    <Zap className="text-gobo-neon" />
                    <span>{t('feature2')}</span>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0">
               <a href="tel:+1234567890" className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-full hover:scale-105 transition-transform duration-300">
                  <div className="relative bg-gobo-neon rounded-full px-10 py-8 transition-all ease-in duration-75 group-hover:bg-opacity-90">
                      <div className="flex flex-col items-center gap-2">
                        <PhoneCall className="h-10 w-10 text-gobo-dark mb-1 animate-bounce" />
                        <span className="text-gobo-dark font-extrabold text-2xl">{t('cta')}</span>
                        <span className="text-gobo-dark/80 font-medium">{t('ctaSubtext')}</span>
                      </div>
                  </div>
               </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Emergency };

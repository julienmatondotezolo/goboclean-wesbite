'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Droplets, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gobo-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2609&auto=format&fit=crop"
          alt="Industrial Warehouse Cleaning"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gobo-dark via-gobo-dark/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gobo-medium/50 border border-gobo-neon/30 text-gobo-neon mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gobo-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gobo-neon"></span>
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider">{t('badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            {t('title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gobo-neon to-emerald-400">
              {t('titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-gobo-neon text-gobo-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all duration-300 group"
            >
              {t('ctaPrimary')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-lg text-white border border-gray-600 hover:border-gobo-neon hover:text-gobo-neon transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              {t('ctaSecondary')}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
            <div>
              <div className="flex items-center gap-2 text-gobo-neon mb-2">
                <ShieldCheck />
                <span className="font-bold text-2xl">100%</span>
              </div>
              <p className="text-gray-400 text-sm">{t('stat1Label')}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gobo-neon mb-2">
                <Droplets />
                <span className="font-bold text-2xl">90°C</span>
              </div>
              <p className="text-gray-400 text-sm">{t('stat2Label')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-4 bg-gobo-neon"></div>
    </div>
  );
};

export { Hero };

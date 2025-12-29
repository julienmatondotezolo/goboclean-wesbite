'use client';

import React from 'react';
import { Hexagon, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="relative">
                <Hexagon className="h-8 w-8 text-gobo-neon fill-gobo-dark" strokeWidth={2.5} />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-gobo-neon text-xs">G</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                GoBo<span className="text-gobo-neon">clean</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('services')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('quote')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('servicesTitle')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('serviceFloors')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('serviceProduction')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('serviceSpills')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('serviceDocks')}</a></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">{t('legalTitle')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('legalTerms')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('legalPrivacy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gobo-neon transition-colors text-sm">{t('legalCGV')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-green-500 font-medium">{t('status')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

'use client';

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Contact: React.FC = () => {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gobo-neon font-bold tracking-widest uppercase mb-3">{t('badge')}</h2>
          <h3 className="text-4xl font-bold text-gobo-dark">{t('title')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-gobo-dark rounded-2xl p-10 text-white shadow-xl flex flex-col justify-between h-full">
            <div>
              <h4 className="text-2xl font-bold mb-8 text-gobo-neon">{t('infoTitle')}</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-gobo-neon" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{t('phone')}</p>
                    <p className="font-bold text-lg">+33 1 23 45 67 89</p>
                    <p className="text-xs text-gobo-neon mt-1">{t('phoneAvailable')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-gobo-neon" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{t('email')}</p>
                    <p className="font-bold text-lg">contact@goboclean.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-gobo-neon" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{t('location')}</p>
                    <p className="font-bold text-lg">{t('locationAddress')}</p>
                    <p className="text-gray-300">{t('locationCity')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                    {t('infoFooter')}
                </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('formName')}</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gobo-neon focus:ring-1 focus:ring-gobo-neon outline-none transition-colors" placeholder={t('formNamePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{t('formCompany')}</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gobo-neon focus:ring-1 focus:ring-gobo-neon outline-none transition-colors" placeholder={t('formCompanyPlaceholder')} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('formEmail')}</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gobo-neon focus:ring-1 focus:ring-gobo-neon outline-none transition-colors" placeholder={t('formEmailPlaceholder')} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('formPhone')}</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gobo-neon focus:ring-1 focus:ring-gobo-neon outline-none transition-colors" placeholder={t('formPhonePlaceholder')} />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">{t('formService')}</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gobo-neon focus:ring-1 focus:ring-gobo-neon outline-none transition-colors text-gray-600">
                  <option>{t('formServiceOption1')}</option>
                  <option>{t('formServiceOption2')}</option>
                  <option>{t('formServiceOption3')}</option>
                  <option>{t('formServiceOption4')}</option>
                  <option>{t('formServiceOption5')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('formMessage')}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gobo-neon focus:ring-1 focus:ring-gobo-neon outline-none transition-colors" placeholder={t('formMessagePlaceholder')}></textarea>
              </div>

              <button type="button" className="w-full bg-gobo-neon text-gobo-dark font-bold text-lg py-4 rounded-lg hover:bg-lime-300 transition-colors shadow-lg shadow-lime-200/50">
                {t('formSubmit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };

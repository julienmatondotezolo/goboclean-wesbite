'use client';

import React from 'react';
import { Factory, Truck, Droplets, Warehouse, Hammer, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const t = useTranslations('services');

  const services: ServiceItem[] = [
    {
      id: 'floors',
      title: t('floors.title'),
      description: t('floors.description'),
      icon: Layers,
    },
    {
      id: 'production',
      title: t('production.title'),
      description: t('production.description'),
      icon: Factory,
    },
    {
      id: 'spills',
      title: t('spills.title'),
      description: t('spills.description'),
      icon: Droplets,
    },
    {
      id: 'concrete',
      title: t('concrete.title'),
      description: t('concrete.description'),
      icon: Hammer,
    },
    {
      id: 'logistics',
      title: t('logistics.title'),
      description: t('logistics.description'),
      icon: Warehouse,
    },
    {
      id: 'docks',
      title: t('docks.title'),
      description: t('docks.description'),
      icon: Truck,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gobo-neon font-bold tracking-widest uppercase mb-3">{t('badge')}</h2>
          <h3 className="text-4xl font-bold text-gobo-dark mb-6">{t('title')}</h3>
          <p className="text-lg text-gray-600">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
                key={service.id} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gobo-neon relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} className="text-gobo-dark" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gobo-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-gobo-neon transition-colors duration-300">
                  <service.icon className="text-white group-hover:text-gobo-dark transition-colors" size={28} />
                </div>
                
                <div className="text-4xl font-bold text-gray-100 absolute -top-4 -right-4 select-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    0{index + 1}
                </div>

                <h4 className="text-xl font-bold text-gobo-dark mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="h-1 w-12 bg-gray-200 group-hover:bg-gobo-neon transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export { Services };

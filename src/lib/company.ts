/** Coordonnées officielles affichées sur le site (source unique). */
export const COMPANY = {
  name: 'GoboClean',
  phone: '+32 483 50 12 55',
  phoneHref: 'tel:+32483501255',
  email: 'info@goboclean.be',
  street: 'J. Wielemansstraat 42',
  city: '1652 Beersel',
  vat: 'BE 0799.936.135',
};

export const CONTACT_ENDPOINT =
  (process.env.NEXT_PUBLIC_API_URL || 'https://api.goboclean.be/api') + '/contact';

export const SERVICE_KEYS = ['facades', 'graffiti', 'moss', 'stains', 'paint', 'industrial'] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

/**
 * Préfixe des pages de la refonte. Elle est en test sous /test ; à la mise en production,
 * passer à '' (et supprimer src/components/legacy + la clé `legacy` des messages).
 */
export const SITE_BASE = '/test';

/** Chemin d'une page du site (sans la langue, ajoutée par le Link de next-intl). */
export const page = (p = '') => `${SITE_BASE}${p}` || '/';

export const ROUTES = {
  home: page(),
  services: page('/services'),
  service: (key: string) => page(`/services/${key}`),
  sectors: page('/sectors'),
  about: page('/about'),
  emergency: page('/emergency'),
  contact: page('/contact'),
  privacy: page('/privacy'),
};

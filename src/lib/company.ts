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

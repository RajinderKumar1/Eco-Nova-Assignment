export const defaultLocale = 'en-US';
export const locales = ['en-US', 'es'];

export const localeNames = {
  'en-US': 'English',
  'es': 'Español',
};

export function getLocalizedPath(path: string, locale: string): string {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}

export function getLocaleFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

export const translations = {
  'en-US': {
    loading: 'Loading...',
    error: 'Something went wrong',
    contactUs: 'Contact Us',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    navigation: {
      home: 'Home',
      features: 'Features',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    footer: {
      copyright: '© 2025 EcoNova. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  'es': {
    loading: 'Cargando...',
    error: 'Algo salió mal',
    contactUs: 'Contáctanos',
    learnMore: 'Saber Más',
    getStarted: 'Comenzar',
    navigation: {
      home: 'Inicio',
      features: 'Características',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    footer: {
      copyright: '© 2025 EcoNova. Todos los derechos reservados.',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
    },
  },
};

export function useTranslations(locale: string = defaultLocale) {
  return translations[locale as keyof typeof translations] || translations[defaultLocale];
}
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Reely',
  description: 'Reely is a movie and tv show tracker built by Bmb Tech.',

  // Author and creator information
  author: {
    name: 'Bmb Tech',
    email: 'bmbxmd@gmail.com',
    website: 'https://www.bmbtech.online/',
    instagram: '@bmbxmd',
  },

  // Theme and visual configuration
  theme: {
    colors: {
      light: '#ffffff',
      dark: '#000000',
      primary: '#000000',
      tile: '#000000',
    },
  },

  // SEO and metadata configuration
  seo: {
    locale: 'en_US',
    alternateLocales: ['en_GB', 'en_CA'],
    category: 'entertainment',
    generator: 'Next.js',
    applicationName: 'Reely',
    publisher: 'Reely',
    referrer: 'origin-when-cross-origin',
    colorScheme: 'dark light',
  },

  // Open Graph enhanced configuration
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'Reely',
    images: {
      default: {
        width: 1200,
        height: 630,
        alt: 'Reely - Movie and TV Show Tracker',
        type: 'image/png',
      },
      fallback: {
        width: 800,
        height: 600,
        type: 'image/jpeg',
      },
    },
    ttl: 604800, // 7 days
  },

  // Instagram card configuration
  instagram: {
    card: 'summary_large_image',
    creator: '@bmbxmd',
    site: '@bmbxmd',
  },

  // Progressive Web App configuration
  pwa: {
    capable: true,
    statusBarStyle: 'black-translucent',
    startupImage: '/icons/apple-touch-icon.png',
    manifestPath: '/site.webmanifest',
  },

  // Icons configuration
  icons: {
    favicon: '/favicon.ico',
    favicon16: '/favicon-16x16.png',
    favicon32: '/favicon-32x32.png',
    appleTouchIcon: '/apple-touch-icon.png',
    browserConfig: '/browserconfig.xml',
  },

  // Performance optimization
  performance: {
    preconnectDomains: [
      'https://image.tmdb.org',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ],
    dnsPrefetchDomains: [
      '//www.googletagmanager.com',
      '//www.google-analytics.com',
    ],
  },

  // Security configuration
  security: {
    contentSecurityPolicy: "default-src 'self'",
    formatDetection: 'telephone=no',
  },

  // Structured data for JSON-LD
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    searchAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: '/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },

  mainNav: [
    { title: 'Home', href: '/', scroll: true },
    { title: 'Movies', href: '/movies', scroll: true },
    { title: 'TV Shows', href: '/tv-shows', scroll: true },
    { title: 'Watch History', href: '/watch-history', scroll: true },
    { title: 'Disclaimer', href: '/disclaimer', scroll: false },
  ],

  personalLogo:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',

  links: {
    instagram: 'https://instagram.com/bmbxmd',
    github: 'https://github.com/novaxmd',
    website: 'https://www.bmbtech.online/',
    buyMeACoffee: 'https://buymeacoffee.com/bmbtech',
  },

  email: 'bmbxmd@gmail.com',

  // FIXED HERE ✅
  websiteURL: 'https://bmb-moves.online',

  instagramTag: '@bmbxmd',

  image:
    'https://pbs.twimg.com/profile_images/1446549954231738370/IVkXC16N_400x400.jpg',

  keywords: [
    'Reely',
    'Reely Tracker',
    'Movie Tracker',
    'TV Show Tracker',
    'Reely Live',
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Bmb Tech',
    'Bmb',
    'Bmb Tech',
    'React Developer',
    'React Engineer',
    'React.js',
    'ReactJS',
    'Next.js',
    'NextJS',
    'Next.js Developer',
    'Next.js Engineer',
  ],
}

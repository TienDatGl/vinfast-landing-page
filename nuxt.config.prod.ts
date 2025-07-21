// nuxt.config.ts

export default defineNuxtConfig({
  extends: ['./domains/core', './domains/san-pham', './domains/lien-he'],

  imports: {
    dirs: ['composables', 'domains/composables']
  },

  ssr: true,

  app: {
    head: {
      title: 'VinFast Auto - Đà Nẵng',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Vinfast Đà Nẵng cập nhật thông tin bảng giá, chương trình ưu đãi và cảm nhận khách hàng về xe ô tô VinFast'
        },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Social Sharing
        { property: 'og:title', content: 'VinFast Auto - Đà Nẵng' },
        {
          property: 'og:description',
          content:
            'Vinfast Đà Nẵng cập nhật thông tin bảng giá, chương trình ưu đãi và cảm nhận khách hàng về xe ô tô VinFast'
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752500841/VF-8-US_AnywhereAdvantage_Clean_1.jpeg_ou2hqf.jpg'
        },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  components: true,

  css: ['./assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    'nuxt-lodash',
    'nuxt-icon',
    'nuxt-delay-hydration',
    'nuxt-typed-router',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    'nuxt-viewport',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    'nuxt-toast'
  ],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'vi',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'vi',
        name: 'Tiếng Việt',
        file: 'vi.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ]
  },
  runtimeConfig: {
    public: {
      googleFonts: {
        families: {
          Inter: [400, 500, 600, 700, 900],
          Bayon: [400, 500, 600, 700, 900]
        }
      },
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
      GMAIL_USER: process.env.GMAIL_USER,
      GMAIL_PASS: process.env.GMAIL_PASS,
      apiBase: process.env.PUBLIC_API_BASE || '/api'
    }
  },

  nitro: {
    compatibilityDate: '2025-07-20',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    preset: 'firebase',
    externals: {
      external: []
    },
    noExternals: true
  },
  tailwindcss: {
    viewer: false
  },
  viewport: {
    breakpoints: {
      desktopSmall: 1024,
      desktop: 1280,
      desktopMedium: 1440,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768
    }
  },
  devtools: {
    enabled: false
  }
})

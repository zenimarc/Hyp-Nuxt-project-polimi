export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  target: 'static',
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/server/api.js',
    },
  ],
  head: {
    title: 'Taormina',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      // <!-- Favicon-->
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700',
        rel: 'stylesheet',
        type: 'text/css',
      },
      // <!-- Google fonts-->
      {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
        rel: 'stylesheet',
        type: 'text/css',
      },
      {},
    ],
    script: [
      {
        // <!-- Bootstrap core JS-->
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      },
      {
        // <!-- Font Awesome icons (free version)-->
        src: 'https://use.fontawesome.com/releases/v6.1.0/js/all.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    GOOGLE_API_KEY:
      process.env.GOOGLE_API_KEY || 'AIzaSyAEIq77p46JVQVeDNbl-q59sj_uJKnYl94',
  },
}

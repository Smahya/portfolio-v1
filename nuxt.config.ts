// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // SCSS file in the project
    "@/assets/css/main.scss",
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Portfolio | Salma',
      link: [
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
});

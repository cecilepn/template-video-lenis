import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/device', "@nuxtjs/prismic", '@nuxt/scripts'],
  css: ['~~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss(), ]
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName
  }
})
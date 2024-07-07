// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ui: {
    icons: ['mdi', 'simple-icons', 'ph']
  },
  modules: [ "@nuxt/ui", "@nuxtjs/tailwindcss", '@pinia/nuxt', ],
  compatibilityDate: "2024-07-04",

  
  
})
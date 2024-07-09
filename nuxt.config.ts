import cors from "./server/middleware/cors";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [ "@nuxt/ui", "@nuxtjs/tailwindcss", '@pinia/nuxt', ],
  compatibilityDate: "2024-07-04",
  ui: {
    icons: ['mdi', "simple-icons", "ph"]
  },
  
})
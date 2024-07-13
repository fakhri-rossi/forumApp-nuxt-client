import cors from "./server/middleware/cors";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [ "@nuxt/ui", '@pinia/nuxt'],
  compatibilityDate: "2024-07-04",

  imports: {
    dirs: [
      'composables/**'
    ]
  },

  ui: {
    icons: ['mdi', "simple-icons", "ph"]
  },

  // axios: {
  //   baseURL: 'http://127.0.0.1:8000'
  // },

  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8000'
    }
  }
  
})
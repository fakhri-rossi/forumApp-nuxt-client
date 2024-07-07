import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  const customFetch = axios.create({
    baseURL: config.app.baseURL
  });
  return {
    provide: {
      customFetch: customFetch
    }
  }
})

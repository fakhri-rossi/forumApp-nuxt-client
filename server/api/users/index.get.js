import { useMyFetch } from "~/composables/myFetch";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  // const result = await $fetch('/api/v1/user', {baseURL: config.public.apiBase})
  // const result = await $fetch('/api/v1/user', {baseURL: useRuntimeConfig().public.apiBase})
  const result = {
    name: 'hello'
  }
  return result;
})

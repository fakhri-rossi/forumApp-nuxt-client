import { defineStore } from "pinia";

export const useAuthStore = defineStore('user', () => {
  const dialog = ref(false);

  return { dialog }
})
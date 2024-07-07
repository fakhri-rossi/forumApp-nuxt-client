<template>
  <LoginDialog />

  <header class="h-[48px] backdrop-blur-lg flex justify-between items-center bg-emerald-600 text-white px-8 dark:bg-gray-900/50 border-b border-gray-300 dark:border-gray-700 ">

    <ul class="flex gap-5 ps-5">
      <li v-for="(menu, index) in menus" :key="index">
        <NuxtLink :to="menu.to">{{ menu.label }}</NuxtLink>
      </li>
    </ul>
    
    <div class="flex justify-center items-center gap-5">
      <ToggleColorMode />
      <UButton @click="toggleLogin">
        <Icon name="material-symbols:person" class="w-5 h-5" />
        Login
      </UButton>
    </div>
  </header>
</template>

<script lang="ts" setup>
  import ToggleColorMode from '~/components/ToggleColorMode.vue';
  import { useAuthStore } from '~/stores/authStores';

  const authStore = useAuthStore();
  const { dialog } = storeToRefs(authStore);

  const menus = ref([
    { label: 'Home', to:'/' },
    { label: 'Projects', to:'/projects' },
    { label: 'Contact', to:'/contact' },
  ])

  const toggleLogin = () => {
    dialog.value = true;
  } 
</script>

<style>

</style>
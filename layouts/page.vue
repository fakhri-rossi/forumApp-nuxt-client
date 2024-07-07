<template>
  <div class="light:bg-white light:text-black dark:bg-gray-900 dark:text-gray-200">
    <LoginDialog />

    <header class="h-[38px] backdrop-blur-lg flex justify-between items-center bg-emerald-600 text-white px-8 dark:bg-gray-900/50 border-b border-gray-300 dark:border-gray-700 ">

      <ul class="flex gap-5 ps-5">
        <li v-for="(menu, index) in menus" :key="index">
          <NuxtLink to="menu.to">{{ menu.label }}</NuxtLink>
        </li>
      </ul>
      
      <div class="flex justify-center items-center gap-5">
        <ToggleColorMode />
        <UButton @click="dialog = true">
          <span>
            <UIcon name="material-symbols:person" />
            Login
          </span>
        </UButton>
      </div>
    </header>

    <slot />

    <footer class="flex min-h-[50px] items-center px-3 border-t border-gray-300 dark:border-gray-700 bg-emerald-600 dark:bg-gray-900">
      &copy; 2024
    </footer>
  </div>

</template>

<script setup>
import ToggleColorMode from '~/components/ToggleColorMode.vue';
// import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/authStores';

  const authStore = useAuthStore();

  const { dialog } = storeToRefs(authStore);

  const menus = ref([
    { label: 'Home', to:'/' },
    // { label: 'Projects', to:'/projects' },
    // { label: 'Contact', to:'/contact' },
  ])
  let show = ref(false);  

  let toggleLogin = () => {
      show.value = true;
      console.log(show.value);
    }


</script>

<style>

</style>
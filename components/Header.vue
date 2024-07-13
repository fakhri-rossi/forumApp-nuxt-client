<template>
  <DialogWrapper>
    <DialogLogin v-if="currentDialog === 'login'" />
    <DialogRegister v-if="currentDialog === 'register'" />
  </DialogWrapper>

  <header class="sticky top-0 h-[48px] backdrop-blur-lg flex justify-between items-center bg-emerald-600 text-white md:px-8 px-2 dark:bg-gray-900/50 border-b border-gray-300 dark:border-gray-700 ">

    <ul class="flex gap-2 md:gap-5 ps-5">
      <li v-for="(menu, index) in menus" :key="index">
        <NuxtLink :to="menu.to" class="dark:hover:text-green-400">{{ menu.label }}</NuxtLink>
      </li>
    </ul>

    <!-- <UButton @click="console.log(token)" label="see token" />
    <UButton @click="console.log(currentUser)" label="see user" />
    <UButton @click="console.log(currentDialog)" :label="currentDialog" /> -->
    
    <div class="flex justify-center items-center gap-2 md:gap-5">
      <ToggleColorMode />
      
      <UButton v-if="!authStore.currentUser" @click="toggleLogin">
        <Icon name="material-symbols:person" class="w-5 h-5" />
        Login
      </UButton>

      <ProfileDropdown v-if="currentUser" />

    </div>
  </header>
</template>

<script lang="ts" setup>
  import { useAuthStore } from '~/stores/authStores';

  const authStore = useAuthStore();
  const { token, currentUser } = storeToRefs(authStore);
  // const {  }
  const { currentDialog } = useAuth();
  const { showDialog } = useDialog();

  onBeforeMount(() => {
    authStore.refreshUser();
  })

  const menus = ref([
    { label: 'Home', to:'/' },
    { label: 'Projects', to:'/projects' },
    { label: 'Contact', to:'/contact' },
  ])

  const toggleLogin = () => {
    showDialog.value = true;
  }

</script>

<style>

</style>
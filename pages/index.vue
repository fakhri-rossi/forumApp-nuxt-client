<template>
  <div class="h-[calc(100vh-88px)] ">
    <h1>Ini Home</h1>
    <p>token: {{ token }}</p>
    <p>Current User {{ currentUser }}</p>
    <!-- <p>{{ dataAxios }} ppp</p> -->
  </div>

  <div class="h-screen">
    <p>Section</p>
  </div>
</template>

<script setup>
  const authStore = useAuthStore();
  const { token, currentUser } = storeToRefs(authStore);
  
  definePageMeta({
      layout: 'page'
  })

  onMounted(() => {
    authStore.refreshUser();
  })

</script>

<style>

</style>
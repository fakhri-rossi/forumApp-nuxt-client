<template>
  <PageWrapper>
    <div class="h-screen">
      Username: {{ currentUser ? currentUser.username : 'belum login' }}
    </div>
  </PageWrapper>
</template>

<script setup>
  definePageMeta({
    layout: 'page',
    middleware: 'auth'
  })
  const authStore = useAuthStore();
  const { currentUser } = storeToRefs(authStore);
</script>

<style>

</style>
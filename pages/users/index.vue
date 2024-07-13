<template>
  <div class="h-screen">
    <h1>User List:</h1>
    <ul>
      <li v-for="(user, i) in users" :key="i">
        {{ user.email }}
      </li>
    </ul>

    <p>api base: {{ useRuntimeConfig().public.apiBase }}</p>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

  definePageMeta({
    layout: 'page'
  })

  const users = ref();

  onMounted(async () => {
    const result = await $fetch('/api/users', {method: 'GET'});
    users.value = result;
  })

</script>

<style>

</style>
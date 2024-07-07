<template>
  <div class="h-[calc(100vh-88px)] ">
    <h1>Ini Home</h1>
    <p>{{ dataAxios }} ppp</p>
  </div>

  <div class="h-screen">
    <p>Section</p>
  </div>
</template>

<script setup>
import axios from 'axios';

  // const customFetch = useNuxtApp()
  // console.log(useNuxtApp())

  let dataAxios = ref('')

  onBeforeMount(async () => {
    const res = await axios.get('http://localhost:8000/');
    console.log(res.data);
    // dataAxios.data = res.data.message;
    dataAxios = res.data.message;
  })
  
  definePageMeta({
      layout: 'page'
  })

</script>

<style>

</style>
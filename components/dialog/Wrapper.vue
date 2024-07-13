<template>
  <div v-if="showDialog" class="fixed top-0 left-0 w-full h-full bg-white/50 dark:bg-black/75 flex justify-center items-center z-10">
    <slot />
  </div>
</template>

<script setup>
// import { useDialog } from '~/composables/dialog';
  const { showDialog } = useDialog();


</script>

<style>

</style>
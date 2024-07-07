<template>
  <UAlert
    icon="i-ph-warning-bold"
    color="red"
    variant="subtle"
    :title="props.errTitle"
    :description="props.errDesc"
  />
</template>


<script setup>
  const props = defineProps(['errTitle', 'errDesc']);
</script>

<style>

</style>
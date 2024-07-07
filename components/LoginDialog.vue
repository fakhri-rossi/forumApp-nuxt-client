<template>
  <div v-if="dialog" class="z-10 absolute w-screen h-screen bg-white/50 dark:bg-white/50 flex justify-center items-center">
    
    <form method="post" @submit.prevent="handleSubmit" action="http://localhost:8000/api/v1/auth/login" class="flex flex-col justify-between gap-5 p-8 bg-emerald-600 dark:bg-gray-900 rounded-xl aspect-square w-[80%] sm:w-[320px]">
      <div class="flex justify-center">
        <img src="../public/nuxt-logo.png" class="h-[3rem]" alt="">
      </div>

      <div>
        <label class="text-[1rem]" for="email">Email</label>
        <UInput required name="email" id="email" color="white" variant="outline" placeholder="Search..." />
      </div>

      <div>
        <label class="text-[1rem]" for="password">Password</label>
        <UInput required type="password" name="password" id="password" color="white" variant="outline" placeholder="Search..." />
      </div>
      
      <div class="flex justify-between items-center">
        <UButton label="Login" type="submit" class="w-[45%] justify-center" />
        <UButton label="Cancel" color="gray" class="w-[45%] justify-center" @click="dialog = false"/>
      </div>

    </form>

  </div>
</template>

<script setup>
  const { dialog } = storeToRefs(useAuthStore())
</script>
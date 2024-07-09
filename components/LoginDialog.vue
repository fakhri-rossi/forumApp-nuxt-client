<template>
  <div v-if="dialog" class="fixed top-0 left-0 w-full h-full bg-white/50 dark:bg-white/50 flex justify-center items-center z-10">
    
    <form method="post" @submit.prevent="handleSubmit" action="http://localhost:8000/api/v1/auth/login" class="flex flex-col justify-between gap-5 p-8 bg-emerald-600 dark:bg-gray-900 rounded-xl aspect-square w-[80%] sm:w-[320px]">
      
      <div class="flex justify-center">
        <img src="../public/nuxt-logo.png" class="h-[3rem]" alt="">
      </div>
      
      <ErrorAlert v-if="authStore.errAlert" errTitle="Invalid" :errDesc="authStore.errMsg" />
      
      <div>
        <label class="text-[1rem]" for="email">Email</label>
        <UInput  type="email" v-model="userInput.email" name="email" id="email" color="white" variant="outline" placeholder="Search..." />
      </div>

      <div>
        <label class="text-[1rem]" for="password">Password</label>
        <UInput  type="password" v-model="userInput.password" name="password" id="password" color="white" variant="outline" placeholder="Search..." />
      </div>
      
      <div class="flex justify-between items-center">
        <UButton label="Cancel" color="gray" class="w-[45%] justify-center" @click="handleCancel"/>
        <UButton label="Login" type="submit" class="w-[45%] justify-center" />
      </div>

    </form>

  </div>
</template>

<script setup>
  const authStore = useAuthStore();
  const { dialog } = storeToRefs(authStore);

  const userInput = reactive({
    email: "",
    password: ""
  })

  const handleSubmit = () => {
    authStore.loginUser(userInput);
  }

  const handleCancel = () => {
    authStore.errAlert = false;
    dialog.value = false;
  }
</script>
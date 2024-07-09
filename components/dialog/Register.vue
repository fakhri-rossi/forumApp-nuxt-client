<template>
    <form method="post" @submit.prevent="handleSubmit" action="http://localhost:8000/api/v1/auth/login" class="flex flex-col justify-between gap-5 p-8 bg-emerald-600 dark:bg-gray-900 rounded-xl aspect-square w-[80%] sm:w-[320px]">
      
      <div class="flex justify-center">
        <img src="~/public/nuxt-logo.png" class="h-[3rem]" alt="">
      </div>

      <div>
        <p class="font-bold text-center text-xl">Register</p>
      </div>
      
      <ErrorAlert v-if="authStore.errAlert" errTitle="Invalid" :errDesc="authStore.errMsg" />
      
      <div>
        <label class="text-[1rem]" for="email">Email</label>
        <UInput  type="email" v-model="email" name="email" id="email" color="white" variant="outline" placeholder="Search..." />
      </div>

      <div>
        <label class="text-[1rem]" for="password">Password</label>
        <UInput  type="password" v-model="password" name="password" id="password" color="white" variant="outline" placeholder="Search..." />
      </div>

      <div>
        <label class="text-[1rem]" for="confirmPassword">Konfirmasi Password</label>
        <UInput  type="password" v-model="confirmPassword" name="confirmPassword" id="confirmPassword" color="white" variant="outline" placeholder="Search..." />
      </div>
      
      <div class="flex justify-between items-center">
        <UButton label="Cancel" color="gray" class="w-[45%] justify-center" @click="handleCancel"/>
        <UButton label="Login" type="submit" class="w-[45%] justify-center" />
      </div>

      <div>
        Sudah punya akun? <UButton @click="showLogin" variant="ghost">Login disini</UButton>
      </div>

    </form>
</template>

<script setup>
  const authStore = useAuthStore();
  const { showDialog, email, password, currentDialog } = storeToRefs(authStore);
  const confirmPassword = ref('');

  const handleSubmit = () => {
    if(confirmPassword.value !== password.value){
      console.log('Konfirmasi Password tidak cocok!');
    } else {
      console.log('Register');
    }
  }

  const handleCancel = () => {
    showDialog.value = false;
  }

  const showLogin = () => {
    currentDialog.value = 'login';
  }
</script>

<style>

</style>
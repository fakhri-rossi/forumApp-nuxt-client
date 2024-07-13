<template>
    <form method="post" @submit.prevent="handleSubmit" action="http://localhost:8000/api/v1/auth/login" class="flex flex-col justify-between gap-5 p-8 bg-emerald-600 dark:bg-gray-900 rounded-xl aspect-square w-[80%] sm:w-[320px]">
      
      <div class="flex justify-center">
        <img src="~/public/nuxt-logo.png" class="h-[3rem]" alt="">
      </div>

      <div>
        <p class="font-bold text-center text-xl">Login</p>
      </div>
      
      <ErrorAlert v-if="errAlert" errTitle="Invalid" :errDesc="errMsg" />
      
      <div>
        <label class="text-[1rem]" for="email">Email</label>
        <UInput v-model="email" type="email" name="email" id="email" color="white" variant="outline" placeholder="Search..." />
      </div>

      <div>
        <label class="text-[1rem]" for="password">Password</label>
        <UInput v-model="password" type="password" name="password" id="password" color="white" variant="outline" placeholder="Search..." />
      </div>
      
      <div class="flex justify-between items-center">
        <UButton label="Cancel" color="gray" class="w-[45%] justify-center" @click="handleCancel"/>
        <UButton label="Login" type="submit" class="w-[45%] justify-center" />
      </div>

      <div>
        Belum punya akun? <UButton @click="showRegister" variant="ghost">Daftar disini</UButton>
      </div>

    </form>
</template>

<script setup>
  const {email, password, errMsg, errAlert, currentDialog} = useAuth();
  // const { lo } = useLogin();
  // useLogin().
  const { showDialog } = useDialog();

  const handleSubmit = () => {
    useLogin().loginUser();
  }

  const handleCancel = () => {
    // errAlert = false;
    showDialog.value = false;
  }

  const showRegister = () => {
    currentDialog.value = 'register';
  }
</script>

<style>

</style>
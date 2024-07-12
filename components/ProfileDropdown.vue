<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton variant="ghost" color="white" trailing-icon="i-heroicons-chevron-down-20-solid">
      <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="sm" />
      {{ currentUser.username }}
    </UButton>
  </UDropdown>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const { currentUser } = storeToRefs(authStore);

const handleLogout = async () => {
  authStore.logout();
}

const items = [
  [{
    label: 'Dashboard',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    click: () => {
      navigateTo('/dashboard/');
    }
  }], [{
    label: 'Logout',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      handleLogout();
    }
  }]
]
</script>




export default defineNuxtRouteMiddleware((to, from) => {
  if(!useAuthStore().currentUser){
    console.log('belum login');
    return navigateTo('/');
  } else {
    navigateTo('dashboard/')
  }
})

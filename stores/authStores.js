import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('user', () => {
  const showDialog = ref(false);
  const errMsg = ref('');
  const errAlert = ref(false);
  const token = ref(useCookie('jwt').value ? useCookie('jwt').value : null);
  const cookieOption = {maxAge: process.env.MAX_COOKIE_AGE}
  const currentDialog = ref('login');
  const email = ref('');
  const password = ref('');
  const currentUser = ref();

  const setTokenValue = (value, callback) => {
    useCookie('jwt').value = value;
    setTimeout(callback, 1000);
  }

  const getUser = async () => {
    if(!useCookie('jwt').value){
      currentUser.value = null;
      return;
    }

    await axios.get('http://localhost:8000/api/v1/auth/getuser', {withCredentials: true})
    .then((res) => {
      currentUser.value = toRaw(res.data.user); // toRaw() -> convert proxy obj to obj
    })
    .catch((err) => {
      console.log('cant get user');
      console.log(err);
    })
  }
  
  const refreshUser = () => {
      getUser();
  }

  return { 
    showDialog, 
    errAlert, 
    errMsg, 
    currentUser, 
    token, 
    currentUser, 
    getUser, 
    refreshUser, 
    currentDialog, 
    email, 
    password,
    setTokenValue
  }
})

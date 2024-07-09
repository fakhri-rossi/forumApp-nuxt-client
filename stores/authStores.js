import { defineStore } from "pinia";
import axios from "axios";
import nuxtStorage from 'nuxt-storage';

export const useAuthStore = defineStore('user', () => {
  const dialog = ref(false);
  const errMsg = ref('');
  const errAlert = ref(false);
  const token = ref(useCookie('jwt').value ? useCookie('jwt').value : null);
  const cookieOption = {maxAge: process.env.MAX_COOKIE_AGE}

  const getUser = async () => {
    await axios.get('http://localhost:8000/api/v1/auth/getuser', {withCredentials: true})
    .then((res) => {
      currentUser.value = toRaw(res.data.user); // toRaw() -> convert proxy obj to obj
    })
    .catch((err) => {
      console.log('cant get user');
      console.log(err);
    })
  }
  const currentUser = ref()

  const refreshUser = () => {
    if(!currentUser.value === null){
      getUser();
    }
  }
  
  const loginUser = async (inputData) => {
      errAlert.value = false;

    await axios.post('http://localhost:8000/api/v1/auth/login', {
      email: inputData.email,
      password: inputData.password })

      .then((res) => {
        inputData.email = '';
        inputData.password = '';
        useCookie('jwt').value = res.data.jwt;
        refreshUser();
        dialog.value = false;
      })

      .catch((err) => {        
        switch (err.code) {
          case 'ERR_NETWORK':
            errMsg.value = 'Network Error';
            errAlert.value = true;
            break;

          case 'ERR_BAD_REQUEST':
            errMsg.value = err.response.data.message;
            errAlert.value = true;
            break;
            
          default:
          errMsg.value = 'Unidentified_error';
          errAlert.value = true;
          break;
        }
        console.log('eror cuy');
        console.log('error then:', err);

      });
  }

  return { loginUser, dialog, errAlert, errMsg, currentUser, token, currentUser, getUser, refreshUser}
})

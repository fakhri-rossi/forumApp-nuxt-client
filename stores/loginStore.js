import { defineStore, storeToRefs } from 'pinia';
import { useAuthStore } from './authStores';
import axios from 'axios';

export const useLoginStore = defineStore('login', () => {
  const authStore = useAuthStore();
  const { errMsg, errAlert, showDialog } = storeToRefs(authStore);

  const loginUser = async (inputData) => {
    errAlert.value = false;

    await axios.post('http://localhost:8000/api/v1/auth/login', {
      email: inputData.email,
      password: inputData.password })

      .then((res) => {
        // useCookie('jwt').value = res.data.jwt;
        authStore.setTokenValue(res.data.jwt, () => {
          authStore.refreshUser();
        })
        
        inputData.email = '';
        inputData.password = '';
        showDialog.value = false;
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

  return {
    loginUser
  }
})

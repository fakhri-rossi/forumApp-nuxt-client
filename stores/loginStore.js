import { defineStore, storeToRefs } from 'pinia';
import { useAuthStore } from './authStores';
import axios from 'axios';

export const useLoginStore = defineStore('login', () => {
  const authStore = useAuthStore();
  const { errMsg, errAlert, showDialog } = storeToRefs(authStore);
  const auth = useAuth();

  const loginUser = async (inputData) => {
    errAlert.value = false;
    
    useMyFetch('/api/v1/auth/login', {method: 'POST', body: {
      email: auth.email.value,
      password: auth.password.value
    }})
      .then((res) => {
        console.log(res);
        console.log('Respon berhasil');
        auth.email.value = '';
        auth.password.value = '';
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
        console.log(err);
        console.log(Object.keys(err));
        console.log(Object.values(err));

      });
    }
  return {
    loginUser
  }
})

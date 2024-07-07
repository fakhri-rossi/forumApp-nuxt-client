import { defineStore } from "pinia";
import axios from "axios";
import nuxtStorage from 'nuxt-storage';



export const useAuthStore = defineStore('user', () => {
  const dialog = ref(false);
  const errMsg = ref('');
  const errAlert = ref(false);
  const currentUser = ref(nuxtStorage.localStorage.getData('user') 
  ? JSON.parse(nuxtStorage.localStorage.getData('user')) 
  : null);
  
  const loginUser = async (inputData) => {
    try{
      errAlert.value = false;
      const { data } = await axios.post('http://localhost:8000/api/v1/auth/login', {
        email: inputData.email,
        password: inputData.password
      });
      
      currentUser.value = data.data;
      
      useCookie('jwt').value = data.jwt;

      nuxtStorage.localStorage.setData('user', JSON.stringify(data.data));
      dialog.value = false;
      console.log(data);
      console.log(data.data);
      console.log(data.jwt);
      // console.log(data.cookieOption);
      inputData.email = '';
      inputData.password = '';
      

    } catch(err){
      errAlert.value = true;
      errMsg.value = err.response.data.message;
      console.log(err);
      console.log(errMsg);

    }
  }

  return { loginUser, dialog, errAlert, errMsg}
})

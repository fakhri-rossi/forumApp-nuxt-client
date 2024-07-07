import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('user', () => {
  const dialog = ref(false);
  let errMsg = ref(null);
  let errAlert = ref(false);

  const loginUser = async (inputData) => {
    try{
      const result = await axios.post('http://localhost:8000/api/v1/auth/login', {
        email: inputData.email,
        password: inputData.password
      });
      console.log(inputData);
      dialog.value = false;

    } catch(err){
      errAlert.value = true;
      errMsg.value = err.response.data.message;
      console.log(err);
      console.log(errMsg);

    }
  }

  return { loginUser, dialog, errAlert, errMsg}
})

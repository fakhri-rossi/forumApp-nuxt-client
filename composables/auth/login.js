export const useLogin = () => {
  const auth = useAuth();
  const dialog = useDialog();
  // useState()
  console.log(useAuth().email.value);
  const loginUser = async () => {
    await useMyFetch('/api/v1/auth/login', {method: 'POST', 
      body: {
      email: auth.email.value,
      password: auth.password.value
    }})
    .then((res) => {
      console.log(res);
      console.log('Respon berhasil');
      
      auth.email.value = '';
      auth.password.value = '';
      dialog.showDialog.value = false;
    })

    .catch((err) => {        
      switch (err.code) {
        case 'ERR_NETWORK':
          auth.errMsg.value = 'Network Error';
          auth.errAlert.value = true;
          break;

        case 'ERR_BAD_REQUEST':
          auth.errMsg.value = err.response.data.message;
          auth.errAlert.value = true;
          break;
          
        default:
          auth.errMsg.value = 'Unidentified_error';
          auth.errAlert.value = true;
        break;
      }
      console.log('eror cuy');
      console.log(err);
      console.log(Object.keys(err));
      console.log(Object.values(err));
      auth.errMsg.value = err.message;
      auth.errAlert.value = true;

    });

  }
    // const loginUser = 'abcd';
  return {loginUser};
}

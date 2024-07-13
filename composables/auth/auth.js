export const useAuth = () => {
  const email = useState('email', () => '');
  const password = useState('password', () => '');

  const errMsg = useState('errMsg', () => '');
  const errAlert = useState('errAlert', () => false);

  const currentDialog = useState('currentDialog', () => 'login')
  
  return {
    email,
    password,
    errMsg,
    errAlert,
    currentDialog
  }
}

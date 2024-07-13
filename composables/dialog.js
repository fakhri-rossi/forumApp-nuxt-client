export const useDialog = () => {
  const showDialog = useState('showDialog', () => false);
  
  return {
    showDialog
  };
}

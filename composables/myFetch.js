class CustomError extends Error{
  constructor(message, statusCode){
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const useMyFetch = async (path, opts= {}) => {
  const config = useRuntimeConfig();
  opts.baseURL = config.public.apiBase;

  const result = await useFetch(path, opts);
  console.log('myFetch berhasil: ', result);
  console.log(result.data.value);

  if(result.status.value == 'success'){
    return result.data.value

  } else {
  
    throw new CustomError(
      result.error.value.data.message, result.error.value.statusCode
    )
  }
  
  
}

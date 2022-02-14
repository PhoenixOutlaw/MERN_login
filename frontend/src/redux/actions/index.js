import axios from 'axios'
export const sign_in = () => {
  return {
    type: "sign_in",
  };
};
export const sign_out = () => {
  return {
    type: "sign_out",
  };
};
export const register_success = (data) => {
  sessionStorage.setItem("token", data.data);

  return{
    type: "register_success",
    payload: data,
  }
}
export const register_failure = (data) => {
  return{
    type: "register_failure",
    error: data,
  }
}
export const createaccount = (data) => {
  return (dispatch)=>{
     axios.post('/api/register',data)
     .then((response)=>{
       console.log(response)
       if(response.data!=="failure"){
         dispatch(register_success(response))
         dispatch(sign_in())
       }
       else alert("Email already exists")
      })
     .catch((error)=>dispatch(register_failure(error)))
  }
}
export const loginverify = (data) => {
  return (dispatch)=>{
     axios.post('/api/auth/login',data)
     .then((response)=>{
       console.log(response.data)
     if(response.data!==false){
       dispatch(sign_in())
       sessionStorage.setItem("token",response.data)
      }
      else alert("password or email id is incorrect")
    })
     .catch((error)=>dispatch(register_failure(error)))
  }
}
export const verify = (data) => {
  return (dispatch)=>{
    axios.post('/api/auth/verify',{token:data.token})
    .then((response)=>{
      if(response.data===true)dispatch(sign_in())
      else if(response.data==="forbidden") sessionStorage.clear();
     })
     .catch((error)=>console.log(error))
  }
}


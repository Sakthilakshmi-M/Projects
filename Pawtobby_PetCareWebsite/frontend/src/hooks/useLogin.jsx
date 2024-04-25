import {useState} from "react";
import {useAuthContext} from "./useAuthContext";
import axios from "axios";
export const useLogin = ()=>{
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(null);
  const {dispatch} = useAuthContext();
  
  const login = async (email,password)=>{
    setLoading(true);
    setError(null);

    await axios.post("http://localhost:5000/api/auth/login",{email,password})
    .then(response=>{
      localStorage.setItem('user',JSON.stringify(response.data))
      dispatch({type:"LOGIN",payload:response.data});
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false)
      setError(err.response.data.error);     
    })
  }
  return {login,error,loading};
}
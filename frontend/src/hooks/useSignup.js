import {useState} from "react";
import {useAuthContext} from "./useAuthContext";

export const useSignUp = ()=>{
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(null);
  const {dispatch} = useAuthContext()
  const signup = async(email,mobile,password,cpassword)=>{
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://sparkle-w5wt.onrender.com/api/auth/register",{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email,mobile,password})
    });

    const json = await response.json()

    if(!response.ok)
    {
      setIsLoading(false)
      setError(json.error)
    }
    if(response.ok)
    {
      localStorage.setItem('user',JSON.stringify(json))
      dispatch({type:'LOGIN',payload:json})
      setIsLoading(false);
    }
  }
  return {signup,isLoading,error};
}
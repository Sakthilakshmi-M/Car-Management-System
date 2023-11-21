import { useState } from "react"
import { useSignUp } from "../hooks/useSignup";
const Signup = ()=>{
  const {signup,isLoading,error} = useSignUp();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleClick = async(e)=>{
    e.preventDefault();
    await signup(email,password);
  }
  return(
    <div className="login-form">
      <form className="Login" onSubmit={handleClick}>
      <h3>Sign Up</h3>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email"/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Type of Package"/>
      <button disabled={isLoading} className="submit-btn">Register</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default Signup
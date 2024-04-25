import {useState} from "react";
import {useSignup} from "../hooks/useSignUp";
import {Link} from "react-router-dom"
import "./LoginPage.css";
const SignupPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signUp,error,loading} = useSignup()
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signUp(email,password);
  }
  return ( 
    <div className="login-form">
      <form onSubmit={handleSubmit} className="Login">
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
        <button disabled={loading} className="submit-btn">Register</button><br />
        {error && 
          <div className="error">
            {error}
          </div>
        }
      <div>
        <p>Already Registered? <Link to="/login" className="new">Login</Link></p>
      </div>
      </form>
    </div>
   );
}
 
export default SignupPage;
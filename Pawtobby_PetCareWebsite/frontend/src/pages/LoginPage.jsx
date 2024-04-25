import {useState} from "react";
import {useLogin} from "../hooks/useLogin"
import {Link} from "react-router-dom"
import "./LoginPage.css";
import Swal from 'sweetalert2'
const LoginPage = ({swal}) => {
  if(swal)
  {
    Swal.fire({
      icon: "info",
      title: "Please login to continue",
    });
  }
  const {login,error,loading} = useLogin();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(email,password);
  }
  return ( 
    <div className="login-form">
      <form className="Login" onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
        <button disabled={loading} className="submit-btn">Login</button>
        {error && 
        <div className="error">
          {error}
        </div>
      }
      <div>
        <p>New user? <Link to="/register" className="new">Click here to register</Link></p>
      </div>
      </form>
    </div>
   );
}
 
export default LoginPage;
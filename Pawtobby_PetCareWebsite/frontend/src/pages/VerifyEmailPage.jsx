import {useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import {useAuthContext} from "../hooks/useAuthContext";
import {useNavigate} from "react-router-dom";
import "./Verification.css"
const VerifiedEmailPage = () => {
  const navigate = useNavigate();
  const {user,dispatch} = useAuthContext();
  const param = useParams()
  const [valid,setValid] = useState(false)
  console.log(`http://localhost:5000/api/auth/verify/${param.email}/${param.token}`)
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/auth/verify/${param.email}/${param.token}`)
    .then(response=>{
      console.log(response)
      localStorage.setItem('user',JSON.stringify(response.data))
      dispatch({type:"LOGIN",payload:response.data})
      setValid(true)
    })
    .catch(error=>console.log(error))
  },[])
  if(valid)
    setTimeout(()=>{
      navigate("/")
    },500)
  return ( 
    <div className="verification">A mail has sent to you with verification link. Please verify it</div>
   );
}
 
export default VerifiedEmailPage;
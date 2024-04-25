import {useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

const VerifiedEmailPage = () => {
  const [valid,setValid] = useState(false)
    axios.get(`http://localhost:5000/api/auth/verify/${param.email}/${param.token}`)
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
  return ( 
    <div>EmailVerified</div>
   );
}
 
export default VerifiedEmailPage;
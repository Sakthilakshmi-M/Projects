import axios from "axios";
import {useState} from "react";
import {useAuthContext} from "../hooks/useAuthContext";
const SamplePage = () => {
  // const user = JSON.parse(localStorage.getItem('user'));
  const {user} = useAuthContext()
  const [res,setRes] = useState('');
  const effect = ()=>{axios.get("http://localhost:5000/api/booking/booking",   {headers: {
    "Authorization": `Bearer ${user.token}`
    }   
})
  .then(response=>{
    console.log(response);
    setRes(response.data.msg)
  })}

  if(user)
  effect()


  return ( 
    <div>{res}</div>
  );
}
 
export default SamplePage;
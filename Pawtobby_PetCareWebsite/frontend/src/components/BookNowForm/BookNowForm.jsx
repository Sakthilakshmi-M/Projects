import {useState} from  "react";
import axios from "axios";
import {useAuthContext} from "../../hooks/useAuthContext"
import {useNavigate} from "react-router-dom";
import "./BookNowForm.css"
const BookNowForm = () => {
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const [details,setDetails] = useState({
    service:"",
    address:"",
    visits:"",
    startDate:"",
    endDate:"",
    dog:"",
    dogsize:"",
    dogage:""
  })

  const handleChange = async (e)=>{
    const {name,value} = e.target;
    setDetails((prev)=>{
      return {...prev,[name]:value}
    })
    console.log(details)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(details)
    console.log(user.token)
    axios.post("http://localhost:5000/api/booking/addBooking",details,{
      headers:{"Authorization":`Bearer ${user.token}`}
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    navigate("/booking");
  }
  return ( 
    <div className="form-container">
      <form action="" method="POST" onSubmit={handleSubmit} className="booknowform">
        <h1>Happy Pets, Happy <span>Hearts ♥</span></h1>
        <div className="input-group">
          <label htmlFor="services">What service do you need?</label>
          <select name="service" id="services" onChange={handleChange} value={details.service} required>
            <option disabled value="">--Select a Service--</option>
            <option value="Boarding">Boarding</option>
            <option value="House Sitting">House Sitting</option>
            <option value="Dog Walking">Dog Walking</option>
        </select>
        </div>
        <div className="input-group">
          <label htmlFor="address">What's your address?</label>
          <input type="text" id="address" name="address" onChange={handleChange} value={details.address} required />
        </div>
        <div className="input-group">
          <label htmlFor="visits">How often do you need Drop-In Visits?</label>
          <select name="visits" id="visits" onChange={handleChange} value={details.visits} required>
            <option disabled value="">--Select--</option>
            <option value="One Time">One Time</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" onChange={handleChange} value={details.startDate} required/>
        </div>
        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" onChange={handleChange} value={details.endDate} required/>
        </div>
        <div className="input-group">
          <label htmlFor="name">Name of your dog</label>
          <input type="text" name="dog" id="dog" onChange={handleChange} value={details.dog} required/>
        </div>
        <div className="input-group">
          <label htmlFor="size">What size are your dog (lbs)?</label>
          <select name="dogsize" id="size" onChange={handleChange} value={details.dogsize} required>
            <option disabled value="">--Select a value--</option>
            <option value="Small (0-15)">Small (0-15)</option>
            <option value="Medium (16-40)">Medium (16-40)</option>
            <option value="Large (41-100)">Large (41-100)</option>
            <option value="Giant (101+)">Giant (101+)</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="age">How old are your dog?</label>
          <input type="number" name="dogage" id="age" onChange={handleChange} value={details.dogage} required/>
        </div>
        <div className="input-group">
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
   );
}
export default BookNowForm;
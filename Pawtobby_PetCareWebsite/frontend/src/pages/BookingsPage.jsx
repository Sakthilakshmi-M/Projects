import axios from "axios";
import {useState,useEffect} from "react";
import {useAuthContext} from "../hooks/useAuthContext";
import BookingCard from "../components/BookingCard/BookingCard";
const BookingsPage = () => {
  const {user} = useAuthContext();
  const [bookings,setBookings] = useState(null);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/booking/getBookings",{
      headers:{"Authorization":`Bearer ${user.token}`}
    })
    .then((response)=>setBookings(response.data.bookings))
    .catch((error)=>console.log(error))
  },[])
  return ( 
    <>
    {bookings && bookings.length==0 && <div className="verification">No bookings</div>} 
    <div>
      {bookings && bookings.map((booking,index)=>{
        return (
          <div key={index} >
            <BookingCard bookings={booking}></BookingCard>
          </div>
        )
      })}
    </div>
    </>
   );
}
 
export default BookingsPage;
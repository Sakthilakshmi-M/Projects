import "./BookingCard.css"
const BookingCard = ({bookings}) => {
  return ( 
    <div className="booking-card">
      <p>{`Dog Name : ${bookings.dog}`}</p>
      <p>{`Dog Age: ${bookings.dogage}`}</p>
      <p>{`Dog Size: ${bookings.dogsize}`}</p>
      <p>{`Start Date: ${bookings.startDate.split("T")[0]}`}</p>
      <p>{`End Date: ${bookings.endDate.split("T")[0]}`}</p>
      <p>{`Visits: ${bookings.visits}`}</p>
    </div>
   );
}
 
export default BookingCard;
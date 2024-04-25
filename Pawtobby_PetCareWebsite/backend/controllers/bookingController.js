const Bookings = require("../models/bookingModel")
const addBooking = async (req,res)=>{
  try {
    const booking = await Bookings.create({...req.body,userId:req.user});
    res.status(201).json(booking);
  }
  catch(error)
  {
    res.status(400).json({error:error})
  }
}

const getBookings = async(req,res)=>{
  try {
    const bookings = await Bookings.find({userId:req.user}).sort({createdAt:-1}).select('-_id -userId');
    res.status(200).json({bookings});
  }
  catch(error)
  {
    res.status(404).json(error);
  }
}

module.exports = {addBooking,getBookings};
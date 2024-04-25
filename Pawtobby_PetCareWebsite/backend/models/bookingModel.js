const mongoose = require("mongoose");

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  service:{
    type:String,
    required:true
  },
  address:{
    type: String,
    required: true
  },
  visits:{
    type:String,
    required:true
  },
  startDate:{
    type: Date,
    required: true
  },
  endDate:{
    type: Date,
    required: true
  },
  dog: {
    type:String,
    required: true
  },
  dogsize:{
    type:String,
    required:true
  },
  dogage: {
    type:String,
    required:true
  }
},{timestamps:true})

module.exports = mongoose.model('Bookings',bookingSchema)
const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {addBooking,getBookings} = require("../controllers/bookingController");
const router = express.Router();
router.use(requireAuth);
router.post("/addBooking",addBooking);
router.get("/getBookings",getBookings)
module.exports = router;

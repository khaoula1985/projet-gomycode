const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  departureAirport: {
    type: String,
    required: true,
  },
  arrivalAirport: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
   
  },

  departureTime: {
    type: String,
   
  },
 

  arrivalTime: {
    type: String,
   
  },
  price: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model("flight", flightSchema);
const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,required:true
  },
  city: {
    type: String,required:true
  },
  description: {
    type: String, required:true
  },
  address: {
    type: String,required:true
  },
  rating: {
    type: Number,required:true
  },
  rooms: [
    {
      roomNumber: String,
      maxOccupancy: Number,
      pricePerNight: Number,
      unavailableDates: [String],
    },
  ],
  image: {
    type: String, // Specify the data type
  },
}, { timestamps: true });


module.exports = mongoose.model('Hotel', hotelSchema);

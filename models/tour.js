const mongoose = require("mongoose");
const tourSchema= new mongoose.Schema({
  
    image: { type: String },
    destination: { type: String, required: true },
    rating: { type: Number ,min:0,max:5},
    price:{ type:Number, required: true},
    username:{type:String}
    },
{timestamps:true}
);
module.exports = mongoose.model("tour", tourSchema);
const mongoose = require("mongoose");
const reviewSchema= new mongoose.Schema({
    productId: { type: mongoose.Types.ObjectId, ref:"tour"},
    username: { type: String, required: true},
    rating: { type: Number ,min:0,max:5,default:0, required:true},
    reviewText: { type: String, required: true },
   }, { timestamps: true });

module.exports = mongoose.model("review", reviewSchema);
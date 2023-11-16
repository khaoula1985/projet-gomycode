const mongoose = require("mongoose");
const galleryItemSchema = new mongoose.Schema({
    image: String, // For storing the image filename
    comment: String, // For storing the comment associated with the image
    username: String,//for storing the username
  }, { timestamps: true });

module.exports = mongoose.model("galleryItem", galleryItemSchema)
const{Router}=require("express")
const { getgalleryItems, getgalleryItemsbyid,  deletegalleryItem } = require("../controllers/galleryItemcontroller");
const galleryItemrouter=Router();


galleryItemrouter.get("/galleryItem", getgalleryItems);
galleryItemrouter.get("/galleryItem/:id", getgalleryItemsbyid);

galleryItemrouter.delete("/galleryItem/:id", deletegalleryItem );

module.exports=galleryItemrouter
const galleryItem = require("../models/galleryItem");

module.exports.getgalleryItems= async (req,resp)=>{
    const galleryItems= await galleryItem.find();
    return(
        resp.status(200).json(galleryItems)
    )}
    
    module.exports.getgalleryItemsbyid= async (req,resp)=>{
        const {id}=req.params
        const galleryItems= await galleryItem.findById(id)
        return(
            resp.status(200).json(galleryItems)
        )}
    
   
    module.exports.deletegalleryItem=(req,resp)=>{
        const {id}=req.params
        galleryItem.findByIdAndDelete(id)
        .then(()=>{return resp.status(200).json({msg:"galleryItemdeleted"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
  
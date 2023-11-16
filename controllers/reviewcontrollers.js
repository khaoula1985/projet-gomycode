const review = require("../models/review");

module.exports.getreviews= async (req,resp)=>{
    const reviews= await review.find();
    return(
        resp.status(200).json(reviews)
    )}
    
    module.exports.getreviewsbyid= async (req,resp)=>{
        const {id}=req.params
        const reviews= await review.findById(id)
        return(
            resp.status(200).json(reviews)
        )}
    
    module.exports.addreview=(req,resp)=>{
        const{productId,username, rating,reviewText}=req.body
        const reviewadd= new review({
            productId,username, rating,reviewText
        })
        reviewadd.save()
        .then(()=>{return resp.status(200).json({msg:"review added"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
    
    module.exports.editreview=(req,resp)=>{
        const{productId,username, rating,reviewText}=req.body
        const {id}=req.params
        reviewadd.findByIdAndUpdate(id,{productId,username, rating,reviewText})
        .then(()=>{return resp.status(200).json({msg:"review updated"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
    module.exports.deletereview=(req,resp)=>{
        const {id}=req.params
        review.findByIdAndDelete(id)
        .then(()=>{return resp.status(200).json({msg:"reviewdeleted"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
  
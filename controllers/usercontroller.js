const user = require("../models/user");

module.exports.getusers= async (req,resp)=>{
    const users= await user.find();
    return(
        resp.status(200).json(users)
    )}
    
    module.exports.getusersbyid= async (req,resp)=>{
        const {id}=req.params
        const users= await user.findById(id)
        return(
            resp.status(200).json(users)
        )}
    
    module.exports.adduser=(req,resp)=>{
        const{username,email,password,isAdmin}=req.body
        const useradd= new user({
            username,email,password,isAdmin
        })
        useradd.save()
        .then(()=>{return resp.status(200).json({msg:"user added"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
    
    module.exports.edituser=(req,resp)=>{
        const{username,email,password,isAdmin}=req.body
        const {id}=req.params
        useradd.findByIdAndUpdate(id,{username,email,password,isAdmin})
        .then(()=>{return resp.status(200).json({msg:"user updated"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
    module.exports.deleteuser=(req,resp)=>{
        const {id}=req.params
        user.findByIdAndDelete(id)
        .then(()=>{return resp.status(200).json({msg:"userdeleted"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
  
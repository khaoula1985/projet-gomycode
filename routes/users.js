const{Router}=require("express")
const { getusers, getusersbyid, adduser, edituser, deleteuser } = require("../controllers/usercontroller")
const userrouter=Router()


userrouter.get("/user", getusers)
userrouter.get("/user/:id", getusersbyid)
userrouter.post("/user", adduser)
userrouter.put("/user/:id", edituser )
userrouter.delete("/user/:id", deleteuser )
userrouter.get("/user/countbytype", getusers)
userrouter.get("/user/countbycity", getusers)
module.exports=userrouter
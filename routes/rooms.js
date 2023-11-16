const{Router}=require("express")
const { getrooms, getroomsbyid, createroom, editroom, deleteroom } = require("../controllers/roomcontroller")
const roomrouter=Router()


roomrouterrouter.get("/room", gethotels)
roomrouter.get("/room/:id", gethotelsbyid)
roomrouter.post("/room", addhotel)
roomrouter.put("/room/:id", edithotel )
roomrouter.delete("/room/:id", deletehotel )

module.exports=roomrouter
const{Router}=require("express")
const { gethotels, gethotelsbyid, addhotel, edithotel, deletehotel } = require("../controllers/hotelscontroller")
const hotelrouter=Router()


hotelrouter.get("/hotel", gethotels)
hotelrouter.get("/hotel/:id", gethotelsbyid)
hotelrouter.post("/hotel", addhotel)
hotelrouter.put("/hotel/:id", edithotel )
hotelrouter.delete("/hotel/:id", deletehotel )

module.exports=hotelrouter
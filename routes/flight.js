
const{Router}=require("express")
const { getflights, getflightsbyid, addflight, editflight, deleteflight } = require("../controllers/flightcontroller");
const flightrouter=Router();


flightrouter.get("/flight", getflights);
flightrouter.get("/flight/:id", getflightsbyid);
flightrouter.post("/flight", addflight);
flightrouter.put("/flight/:id", editflight );
flightrouter.delete("/flight/:id", deleteflight );

module.exports=flightrouter
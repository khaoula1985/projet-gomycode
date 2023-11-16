const flight = require("../models/flight");

module.exports.getflights= async (req,resp)=>{
    const flights= await flight.find();
    return(
        resp.status(200).json(flights)
    )}
    
    module.exports.getflightsbyid= async (req,resp)=>{
        const {id}=req.params
        const flights= await flight.findById(id)
        return(
            resp.status(200).json(flights)
        )}
    
    module.exports.addflight=(req,resp)=>{
        const{airline,flightNumber,departureAirport, arrivalAirport,departureDate,departureTime,arrivalTime,price}=req.body
        const flightadd= new flight({
            airline,flightNumber,departureAirport, arrivalAirport,departureDate,departureTime ,arrivalTime,price
        })
        flightadd.save()
        .then(()=>{return resp.status(200).json({msg:"flight added"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
    
    module.exports.editflight=(req,resp)=>{
        const{airline,flightNumber,departureAirport, arrivalAirport,departureDate,departureTime ,arrivalTime,price}=req.body
        const {id}=req.params
        flightadd.findByIdAndUpdate(id,{airline,flightNumber,departureAirport, arrivalAirport,departureDate,departureTime,arrivalTime,price})
        .then(()=>{return resp.status(200).json({msg:"flight updated"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
    module.exports.deleteflight=(req,resp)=>{
        const {id}=req.params
        flight.findByIdAndDelete(id)
        .then(()=>{return resp.status(200).json({msg:"flightdeleted"})})
        .catch((e)=>{return resp.status(404).json({msg:e.message})})
    }
  
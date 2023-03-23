const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');


const checkAuth = async(req,res,next)=>{
    const token = req.headers["authorization"]
    console.log(token)
    if(!token){
      return res.status(401).send("Please Login to get Access")
   }
   
   try{
      const verification =await jwt.verify(token , "jhon_Wick's_Dog")
      console.log("token check", verification)
       const user = UserModel.findOne({email : verification.email ,phone : verification.phone ,address : verification.address})

         if(user){
           return next() 
          }

           return res.status(401).send("Unauthorized")
      
   }catch(e){
       
       return res.status(401).send("Session Expired expired")
   } 
}

module.exports = checkAuth;
const express=require('express');
const UserModel = require('../models/user.model');
const router=express.Router();
const jwt = require('jsonwebtoken')

router.post('/' ,async(req,res)=>{
    let body = req.body
    let user = await UserModel.findOne({email : body.email , password : body.password}) 
    if(!user){
        return res.send("Invalid Credentials")
    }
    const token = jwt.sign({
        name : user.name,
        email : user.email,
        phone : user.phone,
        email : user.email,
        address : user.address 
    },
    "jhon_Wick's_Dog",
    {expiresIn : "7 days"}
    )
   
    
    return res.status(201).send({token,message:"Login Successful"})
} )

module.exports = router
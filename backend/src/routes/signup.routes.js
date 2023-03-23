const express=require('express');
const UserModel = require('../models/user.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    const body = req.body
     console.log(body)
    let user = await UserModel.findOne({email : body.email})
    if(user){
        return res.status(409).send({message:"User Already Exist"})
    }
    const data = new UserModel({...body})
    await data.save()
       
    return res.status(201).send({message:"user signed up"});
})

module.exports = router;
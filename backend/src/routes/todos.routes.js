const express=require('express');
const TodoModel = require('../models/todo.model')
const router=express.Router();
const jwt = require('jsonwebtoken')

router.post('/' ,async(req,res)=>{
    let body = req.body
   try{ 
    const todo = new TodoModel({...body})
    await todo.save()
    return res.status(201).send({message:"added to todos"})
}
catch(e){ 
    return res.status(404).send({message:e.message});
   }
} )

router.get("/",async(req,res)=>{
    try{
        const data = await TodoModel.find({})
        return res.status(201).send(data)
    }catch(e){
        return res.status(404).send({message:e.message})
    }
})

router.delete("/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await TodoModel.findByIdAndDelete({_id : id})
        return res.status(201).send({message:"item removed"})
    }catch(e){
     return res.status(404).send({message:e.message})
    }
})
router.patch('/status/:id',async(req,res)=>{
    const {id} = req.params
    try{
        const todo = await TodoModel.findById({_id : id});
        await TodoModel.findByIdAndUpdate({_id : id} , {status : !todo.status})
        return res.status(201).send({message:"status updated"})
    }catch(e){
     return res.status(404).send({message:e.message})
    }
}
)

module.exports = router
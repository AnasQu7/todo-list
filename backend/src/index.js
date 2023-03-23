const connection = require("./config/db");
const expess = require('express');
const cors = require('cors');
require('dotenv').config();
const signupRouter = require('./routes/signup.routes');
const loginRouter = require('./routes/login.routes');
const todoRouter = require('./routes/todos.routes');
const checkAuth = require("./middlewares/checkAuth");

const PORT = process.env.PORT

const app = expess()

app.use(cors())
app.use(expess.json())


app.use("/signup",signupRouter)
app.use("/login",loginRouter)
app.use(checkAuth)
app.use("/todos",todoRouter)
app.get("/checkauth",async(req,res)=>{
    return res.status(201).send({message:"authorized"})
})
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,async()=>{
    try{
        await connection()
        console.log(`Listening  http://localhost:${PORT}`)
    }
    catch(err){
        console.log(err)
    }
})

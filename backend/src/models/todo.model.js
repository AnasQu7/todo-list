const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
   title : String ,
   status : {
        type: Boolean,
        enum: [true,false],
        default : false
   }
})

const TodoModel = mongoose.model('poco_todos',TodoSchema)

module.exports = TodoModel

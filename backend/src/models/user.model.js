const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : Number,
    address : String
})

const UserModel = mongoose.model('poco_users',UserSchema)

module.exports = UserModel

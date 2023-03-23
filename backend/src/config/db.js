const mongoose = require("mongoose");

require("dotenv").config();

const connection =async ()=>{
    mongoose.connect(process.env.MONGOOSE_URL)
};


module.exports = connection;
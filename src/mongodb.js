const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/LoginInfo").then(() =>{
    console.log("Connection successful")
}).catch((e) =>{
    console.log("No Connection")
})
const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
    type: String,
    required: true
    }
})


const collection = new mongoose.model("Collection1",LogInSchema)

module.exports = collection


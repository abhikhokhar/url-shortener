const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            lowercase:true,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true
        }
    },{timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports= User;
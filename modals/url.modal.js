const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema(
    {
        shortId:{
            type: String,
            require:true,
            unique: true
        },
        redirectURL:{
            type: String,
        },
        visitHistory:[
            {
                timestamps:{
                    type:Number
                }
            }
        ]
    },{timestamps: true})

const URL = mongoose.model("Url", urlSchema)

module.exports = URL;
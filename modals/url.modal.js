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
        ],
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },{timestamps: true})

const URL = mongoose.model("Url", urlSchema)

module.exports = URL;
const express = require('express')

const router = express()

router.get("/", async(req,res)=>{
    res.render("home")
})

module.exports = router;
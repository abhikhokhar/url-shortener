const express = require('express');
const URL = require('../modals/url.modal');

const router = express()

router.get("/", async (req, res) => {
    if(!req.user) return res.redirect("/login")
        console.log("User", req.user)
    const allUrls = await URL.find({createdBy: req.user.id});
    res.render("home", {
        urls: allUrls 
    });
});

router.get("/signup", async(req,res)=>{
    return res.render("signup")
})

router.get("/login", async(req,res)=>{
    return res.render("login")
})

module.exports = router;
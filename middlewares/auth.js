const { getUser } = require("../services/auth");

async function restrictToLoggedInUsers(req,res,next){
    const userUid = req.cookies?.uid;
    if(!userUid) return res.redirect("/login")
        const user = getUser(userUid);
    if(!user) return res.redirect("/login")
        req.user = user;
    next()
}

async function checkAuth(req,res,next){
    const userUid = req.cookies?.uid;
    if(!userUid) return next()
        const user = getUser(userUid);
    if(!user) return next()
        req.user = user;
    next()
}

module.exports = {restrictToLoggedInUsers, checkAuth};
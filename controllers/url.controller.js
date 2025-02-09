
const shortid = require('shortid');
const URL = require('../modals/url.modal');

async function handleNewUrl(req, res){
    const body = req.body;
    if (!body.url) return res.status(400).json({error:"Url is required"})
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user.id
    })
    res.redirect("/");
    
}

async function handleAnalytics(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOne({shortId: shortId}) 
    return res.json({totalClicks: entry.visitHistory.length,visitHistory: entry.visitHistory})

}



module.exports = {handleNewUrl, handleAnalytics};
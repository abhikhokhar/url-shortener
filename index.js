const express = require('express');
const urlRouter = require('./routes/url.route');
const connectDB = require('./connection');
const URL = require('./modals/url.modal');
const path = require('path')
const staticRouter = require('./routes/staticRoute')
const userRouter = require('./routes/user')
const cookieParser = require('cookie-parser');
const { restrictToLoggedInUsers, checkAuth } = require('./middlewares/auth');

const PORT = 3001;
const app = express()

connectDB("mongodb+srv://abhi-url-shortener:abhiurl@cluster2.duyei.mongodb.net/url-shortner")
.then(()=>{
    console.log("MongoDB is connected")
})
.catch((error)=>{
    console.log("MongoDB error", error)
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use("/url", restrictToLoggedInUsers, urlRouter)
app.use("/user", userRouter)
app.use("/", checkAuth, staticRouter)

app.get("/:shortId", async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId: shortId}, {$push: {visitHistory: {timestamp: Date.now()}}})
    if(!entry) return res.status(404).json({error: "No such URL found"})
    res.redirect(entry.redirectURL)
})



app.listen(PORT,()=>{console.log(`server is running at port ${PORT}`)});
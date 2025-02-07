const express = require('express')
const { handleNewUrl, handleAnalytics } = require('../controllers/url.controller')

const router = express()

router.post("/", handleNewUrl)
router.get("/analytics/:shortId", handleAnalytics)

module.exports = router;
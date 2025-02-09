const express = require('express')
const { handleNewUrl, handleAnalytics } = require('../controllers/url.controller')

const router = express()

router.post("/", handleNewUrl)

module.exports = router;
const express = require('express')
const router = express.Router()
const { getAirlines } = require('../controllers/airlineController')

router.get('/', getAirlines)

module.exports = router
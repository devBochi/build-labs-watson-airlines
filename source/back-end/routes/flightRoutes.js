const express = require('express')
const router = express.Router()
const { getFlights, getOneFlightById } = require('../controllers/flightController')

router
    .get('/',getFlights)
    .get('/:customParams',getFlights)
    .get('/find/:id',getOneFlightById)

module.exports = router

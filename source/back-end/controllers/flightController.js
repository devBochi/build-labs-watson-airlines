const { request, response } = require("express");

// Mongoose Schemas
const Flight = require("../models/flightModel");

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */


// Origin Airport (IATA code) & Destination Airport (IATA code)
// Departure Date (date range in format mm-yyyy-dd). 

// Tip: To reduce query results, its recommended to 
// request additional parameters, such as airline or origin/destination airports.

const getFlights = async (req = request, res = response) => {
    try {
        // console.log('Searching the flight in our DB...')
        
        // // Save info we have:
        // //from-AAA-to-BBB-departure-mm-yyyy-dd

        // const customQuery = {}
        const info = req.params.customParams

        // // customQuery = {
        // //     ORIGIN_AIRPORT: info.substr(5,3),
        // //     DESTINATION_AIRPORT: info.substr(12,3)
        // // }

        // customQuery = {
        //     "ORIGIN_AIRPORT": "SFO",
        //     "DESTINATION_AIRPORT": "DFW"
        // }

        // console.log(customQuery)
        console.log(info) //full
        console.log(info.length)
        console.log(info.substr(5,3))
        console.log(info.substr(12,3))

        const departure = info.substr(29,4) + '-' + info.substr(26,2) + '-' + info.substr(34,2)
        console.log(departure)

        const result = await Flight.find({
            ORIGIN_AIRPORT: info.substr(5,3),
            DESTINATION_AIRPORT: info.substr(12,3),
            // DEPARTURE_DATE: /departure/i, 
        })



        res.json ({
            result : result
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

/*
Request Flight information. 
Customers shall be able to obtain information about a specific flight. 
Tip: this operation can be done by performing a search by Object ID.
*/

const getOneFlightById = async (req = request, res = response) => {
    try {
        console.log('Searching the flight in our DB...')
        
        const { id } = req.params

        console.log(id)

        // const flight = await Flight.find({
        //     FLIGHT_NUMBER: 14,
        //     ORIGIN_AIRPORT: "OGG",	
        //     DESTINATION_AIRPORT: "LAX",
        // })

        const flight = await Flight.findById(id)

        // Return query result
        res.json ({
            result : flight
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

module.exports = {
    getFlights,
    getOneFlightById
};
const { request, response } = require("express");

// Mongoose Schemas
const Airport = require("../models/airportModel");

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getAirports = async (req = request, res = response) => {

    try {
        console.log('Searching for Airports in our DB...')
        const airports = await Airport.find({}).limit(50)

        // Return query result
        res.json ({
            result : airports
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

module.exports = {
    getAirports,
};
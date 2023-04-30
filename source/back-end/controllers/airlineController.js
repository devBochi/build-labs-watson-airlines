const { request, response } = require("express");

// Mongoose Schemas
const Airline = require("../models/airlineModel");

/**
 * Sample Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */

/*
    Associated Airlines. Will answer with the list of airlines 
    associated with the initiative, all of 
    them located under the 'Airlines' collection within the database
*/

const getAirlines = async (req = request, res = response) => {
    try {
        console.log('Searching for airlines in our DB...')
        const airlinesArray = await Airline.find({})
        // Return query result
        
        const airlines = []
        
        airlinesArray.map( (airline)=> {
            airlines.push(airline.AIRLINE)
        })
        // Returns an array with the names of the associated airlines, 
        // that array will be used by Watson in order to answer the first option
        res.json ({
            result : airlines
        });
    } catch (error) {
        res.json ({
            status : error.status
        });
    }
};

module.exports = {
    getAirlines,
};
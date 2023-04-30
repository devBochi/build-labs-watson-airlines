const mongoose = require('mongoose');

const airport_schema = new mongoose.Schema({
  IATA_CODE : String,
  AIRPORT : String,
  CITY : String,
  STATE : String,
  COUNTRY : String
});

const Airport = mongoose.model("Airport", airport_schema);

module.exports = Airport;
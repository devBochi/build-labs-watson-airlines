const path = require("path");
const express = require('express')

async function main(){

    // Get global variables from .env file
    require("dotenv").config({path: path.resolve(__dirname,".env")});

    // Connect to database
    const { create_connection } = require("./sample/sample.mongodb");
    
    await create_connection();

    const PORT = 8000

    const app = express()

    // create_connection();

    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.use('/api/airlines', require('./routes/airlineRoutes'))
    app.use('/api/airports', require('./routes/airportRoutes'))
    app.use('/api/flights', require('./routes/flightRoutes'))

    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Welcome to Watson Airlines Customer Experience'
        })
    })

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

main();
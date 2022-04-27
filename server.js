// require dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// express initialization
const application = express()

// express middleware
// application.use(cors())
// application.use(helmet())
application.use(express.json())

// static files
// application.use(path.join(__dirname, 'public'))

// server information
const port = 1000
const databaseOptions = {

}
const databaseName = 'ecommerce'
const databaseConnectionString = `mongodb://localhost:27017/${databaseName}`

// database connection
mongoose
.connect(databaseConnectionString, databaseOptions)
.then(databaseConnected => {
    if (databaseConnected) {
        // start server
        application.listen(port, () => console.log(`${databaseName} database has been connected and development server is running on http://localhost:${port}`))
    }
    else  
        console.log('Database connection failed')
})
.catch(error => console.error(`Database connection error: ${error.message}`))

// API's
application.use('/customer', require('./routes/customer'))







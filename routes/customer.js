const router = require('express').Router()
const Customer = require('../models/customer')

/*
Create POST
Read GET 
Update PUT 
Delete DELETE
*/
// create 


// export router for global accessibility
module.exports = router






/*
router.post('/create', async (request, response) => {
    try {
        const newCustomer = new Customer(request.body)
        const customerSaved = await newCustomer.save()

        if (customerSaved)
            response.json({ success: true, message: customerSaved })
        else
            response.json({ success: false, message: 'Failed to create customer' })

    } catch (error) {
        response.json({ success: false, message: error.message })
    }
}) */
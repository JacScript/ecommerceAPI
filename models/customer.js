// require dependencies
const { Schema, model } = require('mongoose')

// customer database schema
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },

    phone_number: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

// customer schema indexing 
schema.index({ name: -1 }, { background: true })

// customer model 
const Customer = model('customer', schema)

// export model for global accessibility
module.exports = Customer

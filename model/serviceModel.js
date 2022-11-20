const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    
    img: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    
})

const serviceModel = mongoose.model("Service", serviceSchema)
module.exports = serviceModel
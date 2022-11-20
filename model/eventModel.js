const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true
    },
    eventImg: {
        type: String,
        required: true
    },
    eventDescription: {
        type: String,
        required: true
    }
})

const eventModel = mongoose.model("Event", eventSchema)
module.exports = eventModel
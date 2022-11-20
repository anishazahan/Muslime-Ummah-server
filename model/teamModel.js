const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    situation: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    }
    
})

const teamModel = mongoose.model("Team", teamSchema)
module.exports = teamModel
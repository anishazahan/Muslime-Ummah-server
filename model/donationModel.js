const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    donationName: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    leader: {
        type: String,
        required: true,
        trim: true
    },
    donationDescription: {
        type: String,
        required: true
    },
    donationImg: {
        type: String,
        required: true
    },
    raised: {
        type: Number,
        required: true
    },
    goal: {
        type: Number,
        required: true
    }
})

const donationModel = mongoose.model("Donation", donationSchema)
module.exports = donationModel
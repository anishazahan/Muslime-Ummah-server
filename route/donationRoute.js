const express = require('express');
const donationController = require('../controller/donationsController');

const route = express.Router()

route.get("/allDonations", donationController.getDonations)
route.get("/singelDonation/:id", donationController.getDonation)
route.post("/createDonation", donationController.createDonation)
route.patch("/updateDonation/:id", donationController.updateDonation)
route.delete("/deleteDonation/:id", donationController.deleteDonation)

module.exports = route
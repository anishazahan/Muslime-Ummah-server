const express = require('express');
const serviceController = require('../controller/serviceController');

const route = express.Router()

route.get("/allServices", serviceController.getServices)
route.get("/singelService/:id", serviceController.getService)
route.post("/createService", serviceController.createService)
route.patch("/updateService/:id", serviceController.updateService)
route.delete("/deleteService/:id", serviceController.deleteService)

module.exports = route
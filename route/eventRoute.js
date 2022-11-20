const express = require('express');
const eventController = require('../controller/eventController');

const route = express.Router()

route.get("/allEvents", eventController.getEvents)
route.get("/singelEvent/:id", eventController.getEvent)
route.post("/createEvent", eventController.createEvent)
route.patch("/updateEvent/:id", eventController.updateEvent)
route.delete("/deleteEvent/:id", eventController.deleteEvent)

module.exports = route
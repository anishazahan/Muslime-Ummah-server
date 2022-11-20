const express = require('express');
const teamController = require('../controller/teamController');

const route = express.Router()

route.get("/allTeams", teamController.getTeams)
route.get("/singelTeam/:id", teamController.getTeam)
route.post("/createTeam", teamController.createTeam)
route.patch("/updateTeam/:id", teamController.updateTeam)
route.delete("/deleteTeam/:id", teamController.deleteTeam)

module.exports = route
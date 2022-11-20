const express = require("express");
const route = express.Router();
// const upload = require("../middleware/upload");
const controller = require("../controller/userController");
// const { authenticateUser } = require("../middleware/auth");

// route.post("/signup", upload.single("avatar", 1), controller.signUp)
route.post("/signin", controller.signIn)
route.post("/socialLogin", controller.socialLogin)
route.patch("/updateUser/:id", controller.updateUser)
route.get("/getUser/:email", controller.getUser)
route.get("/allUsers", controller.getUsers)
route.get("/favourite-room",  controller.getFavouriteRoom)
route.post("/favourite-room",  controller.postFavouriteRoom)
route.delete("/favourite-room/:id",  controller.deleteFavouriteRoom)



module.exports = route;

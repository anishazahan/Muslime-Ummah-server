const express = require('express');
const blogController = require('../controller/blogController');

const route = express.Router()

route.get("/allBlogs", blogController.getBlogs)
route.get("/singelBlog/:id", blogController.getBlog)
route.post("/createBlog", blogController.createBlog)
route.patch("/updateBlog/:id", blogController.updateBlog)
route.delete("/deleteBlog/:id", blogController.deleteBlog)

module.exports = route
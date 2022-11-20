const Blog = require("../model/blogModel")

// Get Blogs Controller _____________________
module.exports.getBlogs = async (req, res) => {

    try {
        const blogs = await Blog.find()
        res.status(200).json({ blogs: blogs })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Get Single Blog Controller _____________________
module.exports.getBlog = async (req, res) => {

    const { id } = req.params

    try {
        const blog = await Blog.findById({ _id: id })
        res.status(201).json({ blog })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Create Blog Controller _____________________
module.exports.createBlog = async (req, res) => {

    const blogDetails = req.body
    console.log(blogDetails)
    const newBlog = new Blog(blogDetails)
    try {
        const result = await newBlog.save()
        console.log({ result })
        res.status(201).json({ message: "Blog Created Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Blog Controller _____________________
module.exports.updateBlog = async (req, res) => {
    const updatedDetails = req.body
    const { id } = req.params
    try {
        const result = await Blog.findByIdAndUpdate({ _id: id }, updatedDetails, { new: true })
        res.status(201).json({ message: "Blog Updated Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Blog Controller _____________________
module.exports.deleteBlog = async (req, res) => {
    const { id } = req.params

    try {
        await Blog.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Blog Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
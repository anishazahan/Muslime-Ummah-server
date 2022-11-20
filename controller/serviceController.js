const Service = require("../model/serviceModel")

// Get Blogs Controller _____________________
module.exports.getServices = async (req, res) => {

    try {
        const services = await Service.find()
        res.status(200).json({ services: services })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Get Single Blog Controller _____________________
module.exports.getService = async (req, res) => {

    const { id } = req.params

    try {
        const blog = await Service.findById({ _id: id })
        res.status(201).json({ blog })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Create Blog Controller _____________________
module.exports.createService = async (req, res) => {

    const serviceDetails = req.body
    // console.log(blogDetails)
    const newService = new Service(serviceDetails)
    try {
        const result = await newService.save()
        console.log({ result })
        res.status(201).json({ message: "Blog Created Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Blog Controller _____________________
module.exports.updateService = async (req, res) => {
    const updatedDetails = req.body
    const { id } = req.params
    try {
        const result = await Service.findByIdAndUpdate({ _id: id }, updatedDetails, { new: true })
        res.status(201).json({ message: "Service Updated Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Service Controller _____________________
module.exports.deleteService = async (req, res) => {
    const { id } = req.params

    try {
        await Service.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Service Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
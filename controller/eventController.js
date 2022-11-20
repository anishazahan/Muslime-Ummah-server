const Event = require("../model/eventModel")

// Get Blogs Controller _____________________
module.exports.getEvents = async (req, res) => {

    try {
        const events = await Event.find()
        res.status(200).json({ events: events })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Get Single Blog Controller _____________________
module.exports.getEvent = async (req, res) => {

    const { id } = req.params

    try {
        const event = await Event.findById({ _id: id })
        res.status(201).json({ event })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Create Blog Controller _____________________
module.exports.createEvent = async (req, res) => {

    const eventDetails = req.body
    console.log(eventDetails)
    const newEvent = new Event(eventDetails)
    try {
        const result = await newEvent.save()
        console.log({ result })
        res.status(201).json({ message: "Event Created Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Event Controller _____________________
module.exports.updateEvent = async (req, res) => {
    const updatedDetails = req.body
    const { id } = req.params
    try {
        const result = await Event.findByIdAndUpdate({ _id: id }, updatedDetails, { new: true })
        res.status(201).json({ message: "Event Updated Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Event Controller _____________________
module.exports.deleteEvent = async (req, res) => {
    const { id } = req.params

    try {
        await Event.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Event Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
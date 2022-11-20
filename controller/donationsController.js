const Donation = require("../model/donationModel")

// Get Blogs Controller _____________________
module.exports.getDonations = async (req, res) => {

    try {
        const donations = await Donation.find()
        res.status(200).json({ donations: donations })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Get Single Blog Controller _____________________
module.exports.getDonation = async (req, res) => {

    const { id } = req.params

    try {
        const donation = await Donation.findById({ _id: id })
        res.status(201).json({ donation })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Create Blog Controller _____________________
module.exports.createDonation = async (req, res) => {

    const donationDetails = req.body
    console.log(donationDetails)
    const newDonation = new Donation(donationDetails)
    try {
        const result = await newDonation.save()
        console.log({ result })
        res.status(201).json({ message: "Donation Created Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Donation Controller _____________________
module.exports.updateDonation = async (req, res) => {
    const updatedDetails = req.body
    const { id } = req.params
    try {
        const result = await Donation.findByIdAndUpdate({ _id: id }, updatedDetails, { new: true })
        res.status(201).json({ message: "Donation Updated Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Donation Controller _____________________
module.exports.deleteDonation = async (req, res) => {
    const { id } = req.params

    try {
        await Donation.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Donation Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
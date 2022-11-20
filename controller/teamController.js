const Team = require("../model/teamModel")

// Get Teams Controller _____________________
module.exports.getTeams = async (req, res) => {

    try {
        const teams = await Team.find()
        res.status(200).json({ teams: teams })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Get Single Team Controller _____________________
module.exports.getTeam = async (req, res) => {

    const { id } = req.params

    try {
        const team = await Team.findById({ _id: id })
        res.status(201).json({ team })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

// Create Team Controller _____________________
module.exports.createTeam = async (req, res) => {

    const teamDetails = req.body
    // console.log(teamDetails)
    const newTeam = new Team(teamDetails)
    try {
        const result = await newTeam.save()
        console.eam({ result })
        res.status(201).json({ message: "Team Created Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Update Team Controller _____________________
module.exports.updateTeam = async (req, res) => {
    const updatedDetails = req.body
    const { id } = req.params
    try {
        const result = await Team.findByIdAndUpdate({ _id: id }, updatedDetails, { new: true })
        res.status(201).json({ message: "Team Updated Successfully!", result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Delete Team Controller _____________________
module.exports.deleteTeam = async (req, res) => {
    const { id } = req.params

    try {
        await Team.findByIdAndDelete({ _id: id })
        res.status(201).json({ message: "Team Deleted Successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
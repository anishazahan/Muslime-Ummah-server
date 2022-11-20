const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Get Users Controller _____________________
module.exports.getUsers = async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).json({ users })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// Update User Controller _____________________
module.exports.updateUser = async (req, res) => {
	const updatedDetails = req.body
	const { id } = req.params
	try {
		const result = await User.findByIdAndUpdate({ _id: id }, updatedDetails, {
			new: true,
		})
		
		res.status(201).json({ message: 'User Updated Successfully!', result })
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message })
	}
}

// SignIn Controller_____________________
module.exports.signUp = async (req, res) => {
	let avatar
	const { name, email, password, picture, paymentId, reviewId } = req.body
	if (req.file) avatar = process.env.BASE_URL + req.file.filename
	const userExist = await User.findOne({ email })

	if (userExist) {
		res.status(400).json({ error: 'Email Already Exist!' })
	} else {
		const hash_password = await bcrypt.hash(password, 10)
		const newUser = new User({
			name,
			email,
			hash_password,
			picture,
			paymentId,
			avatar,
			reviewId,
			role: 'User',
		})

		try {
			const user = await newUser.save()
			res.status(200).json({ message: 'User Signed Up successfully.', user })
		} catch (error) {
			res.status(500).json({ error })
		}
	}
}

// Social SignIn Controller_____________________
module.exports.socialLogin = async (req, res) => {
	const { email } = req.body
	const user = await User.findOne({ email })
	try {
		res.status(200).json({ message: 'User Signed Up successfully.', user })
	} catch (error) {
		res.status(500).json({
			error: 'Authentication Failed!',
			error: error.message,
		})
	}
}

// SignUp Controller_____________________
module.exports.signIn = async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })

	try {
		if (user) {
			const passwordCorrect = await bcrypt.compare(
				password,
				user.hash_password
			)
			const { _id, role } = user
			if (passwordCorrect) {
				const token = jwt.sign({ _id, role }, process.env.JWT_SECRET)
				res.status(200).json({
					message: 'User SignIn Successfully.',
					token,
					user,
				})
			} else {
				res.status(500).json({ error: 'Authentication Failed!' })
			}
		} else {
			res.status(500).json({ error: 'User Not found!' })
		}
	} catch (error) {
		res.status(500).json({ error })
	}
}

// Get User Controller_____________________
module.exports.getUser = async (req, res) => {
	const { email } = req.params

	try {
		const user = await User.findOne({ email })
		if (user) {
			res.status(200).json({ user })
		}
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Get User Controller_____________________
module.exports.getAllAdmin = async (req, res) => {
	// const { email } = req.params

	try {
		const admins = await User.find({ role: 'Admin' })
		// if (user) {
		res.status(200).json({ admins })
		// }
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}


// Get Favourite Controller_____________________
module.exports.getFavouriteRoom = async (req, res) => {

	console.log(req.user);
	try {
		if (!req.user) {
			return res.status(403).json({ error: "User Not Found!" })
		}
		const favouriteRoom = await Favourite.find({ user: req.user._id }).populate('user').populate('room')

		if (favouriteRoom.length) {

			res.status(200).json({ favouriteRoom })
		} else {

			res.status(200).json({ message: "There is no Room Info You marked as Favourite." })
		}
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}


// Post Favourite Controller_____________________
module.exports.postFavouriteRoom = async (req, res) => {
	const { user, room } = req.body;
	console.log(req.body);
	try {

		const favouriteRoom = await Favourite.create({ user, room })
		res.status(201).json({ favouriteRoom })

	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error.message })
	}
}


// Delete Favourite Controller_____________________
module.exports.deleteFavouriteRoom = async (req, res) => {
	const { id } = req.params
	console.log(id)
	try {
		const favouriteRoom = await Favourite.deleteOne({ _id: id })
		if (favouriteRoom) {
			res.status(200).json({ message: 'Favourite item deleted Successfully!' })
		}

	} catch (error) {
		console.log(error)
		res.status(400).json({ error: error.message })
	}
}
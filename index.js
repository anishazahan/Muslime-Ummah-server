const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5001 //* personal port change (sadik)
const app = express()
const cookieSession = require('cookie-session')
dotenv.config()

// Local Middlewares
const userRoute = require('./route/userRoute')
const blogRoute = require('./route/blogRoute')
const serviceRoute = require('./route/serviceRoute')
const donationRoute = require('./route/donationRoute')
const eventRoute = require('./route/eventRoute')
const teamRoute = require('./route/teamRoute')

// Third-party Middlewares
app.use(bodyParser.json())
app.use(express.static('uploads'))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(
	cors({
		origin: ['https://hoteltastic.netlify.app', 'http://localhost:3000'], //* clients url
		methods: 'GET,POST,PUT,PATCH,DELETE',
		credentials: true,
	})
)
app.use(
	cookieSession({
		name: 'session',
		keys: ['rakib'],
	})
)


// DB Confiq
require('./db/dbConfig')

// Local Middlewares
app.use('/api/user', userRoute)
app.use('/api/blog', blogRoute)
app.use('/api/service', serviceRoute)
app.use('/api/donation', donationRoute)
app.use('/api/event', eventRoute)
app.use('/api/team', teamRoute)

// Health Check
app.get('/', (req, res) => {
	res.json({ message: 'Hello from Express server.' })
})

app.use((err, req, res, next) => {
	if (err.message) {
		res.status(500).json({ error: err.message })
	} else {

		res.status(500).json({ error: "Internal Server Error" })
	}
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// const connectDB = require('./lib/db')
const userRoutes = require('./routes/userRoutes')
const { connect } = require('mongoose')


const app = express()

// Middleware
app.use(bodyParser.json())

// Databse connection
// connectDB()

// Routes
app.use('/test', userRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`The server is running on http://localhost:${PORT}`)
})
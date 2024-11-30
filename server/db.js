const mongoose = require('mongoose');
require('dotenv').config()
const dbURL = process.env.DB_URL

mongoose.connect(dbURL)

const db = mongoose.connection

db.on('connected', () => {
    console.log("Lets Go")
})

module.exports = db;
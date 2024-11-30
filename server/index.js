const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('./db');
const employeeRoutes = require('./routes/employeeRoutes');
const cors = require('cors')

app.use('/employee', employeeRoutes);
app.use(cors())

app.listen(process.env.PORT || 3000, () => {
    console.log("Listenning on PORT " + process.env.PORT)
})
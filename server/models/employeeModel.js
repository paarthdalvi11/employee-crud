
const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
},
{
    timestamps: true
}
)

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;
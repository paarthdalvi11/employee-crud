const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel')

router.get('/', async (req, res) => {
    try{
        const result = await Employee.find();
        console.log("Data Fetched")
        res.status(200).json(result);
    }
    catch(error){
        res.status(400).json()
    }
})

router.get('/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        const result = await Employee.find({_id : userId});
        console.log("Data of the userID Fetched")
        res.status(200).json(result);
        }
    catch(error){
        res.status(400).json()
    }
})

router.post('/', async (req, res) => {
    try{
        if(
            !req.body.name ||
            !req.body.age ||
            !req.body.address ||
            !req.body.email ||
            !req.body.salary ||
            !req.body.designation
        ){
            console.log("Give Complete Data");
        }
        else{
            console.log("Recieved Data: " + req.body);
            const data = req.body;
            const newEntry = new Employee(data);
            const result = await newEntry.save();
            console.log("New Employee Added")
            res.status(200).json(result);
        }
    }
    catch(error){
        res.status(400).json()
    }
})

router.put('/:id', async (req, res) => {
    try{
        if(
            !req.body.name ||
            !req.body.age ||
            !req.body.address ||
            !req.body.email ||
            !req.body.salary ||
            !req.body.designation
        ){
            console.log("Give Complete Data");
        }
        else{
            const userId = req.params.id;
            const data = req.body;
            const result = await Employee.findByIdAndUpdate(userId, data, {
                runValidators: true,
                new: true
            });
            console.log("Data Updated")
            res.status(200).json(result);
        }
    }
    catch(error){
        res.status(400).json()
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const userId = req.params.id;   
        const result = await Employee.findByIdAndDelete(userId);
        console.log("Data Updated")
        res.status(200).json(result);
    }
    catch(error){
        res.status(400).json()
    }
})

module.exports = router;
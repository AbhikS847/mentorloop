const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Interest = require('../models/Interests');


router.get('/',(req,res)=>{

    res.send("Welcome, this is the test route, check the console for instructions..");

    console.log("To view all students just type in /students ");
    console.log("To view all teachers just type in /teachers ");
    console.log("To view all interests just type in /intersts ");

})

router.get('/students',async(req,res)=>{
    const allStudents = await Student.find();
    res.json(allStudents);
})

router.get('/teachers',async(req,res)=>{
    const allTeachers = await Teacher.find();
    res.json(allTeachers);
})
router.get('/interests',async(req,res)=>{
    const allInterests = await Interest.find();
    res.json(allInterests);
})



module.exports = router;
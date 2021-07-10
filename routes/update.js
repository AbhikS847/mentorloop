const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Interest = require('../models/Interests');

router.get('/',(req,res)=>{
    res.send("Welcome to update students and teachers page");
})

router.put('/student',async(req,res)=>{
    const {id,Fullname,Interest,Enrolled,Teacher} = req.body;

    const updateStudent = await Student.findByIdAndUpdate(id,{
        Fullname:Fullname,
        Interest:Interest,
        Enrolled:Enrolled,
        Teacher:Teacher
    })

    updateStudent.save();

    res.json(updateStudent);
})

router.put('/teacher',async(req,res)=>{
    const {id,Fullname,Experience,Weekends} = req.body;

    const updateTeacher = await Teacher.findByIdAndUpdate(id,{
        Fullname:Fullname,
        Experience:Experience,
        Weekends:Weekends
    })

    updateTeacher.save();

    res.json(updateTeacher);
})


module.exports = router;
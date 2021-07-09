const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Interests = require('../models/Interests');

router.get('/',(req,res)=>{
    res.send("Welcome to create students and teachers page");
})

router.post('/newstudent',async(req,res)=>{

    const {Fullname,Interest,Enrolled,Teacher} = req.body;

    try{
        const newStudent = await new Student({
            Fullname:Fullname,
            Interest:Interest,
            Enrolled:Enrolled,
            Teacher:Teacher,
        })

        const newInterest = await new Interests({
            Interest:Interest
        })
    
        newStudent.save();
        newInterest.save();
    
        res.json(newStudent);
        console.log(newStudent);
    }

    catch(err){
        console.error(err);
    }

})

module.exports = router;
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Interest = require('../models/Interests');

router.get('/',(req,res)=>{
    res.send("Welcome to delete students and teachers page");
})

router.delete('/student',async(req,res)=>{

    const {id} = req.body;

    try{

    console.log(`Selected student with id ${id} has been deleted`);
        
    await Student.findByIdAndDelete(id);

    res.json("Student deleted!");

    
    }

    catch(err){
        console.error(`Sorry unexpected error : ${err}`);
    }
})

router.delete('/teacher',async(req,res)=>{

    const {id} = req.body;

    try{

    console.log(`Selected teacher with ${id} has been deleted`);
        
    await Teacher.findByIdAndDelete(id);

    res.json("Teacher deleted!");

    
    }

    catch(err){
        console.error(`Sorry unexpected error : ${err}`);
    }
})


router.get('/deleteAll',async(req,res)=>{

    res.send("Dummy data all deleted");

    await Student.deleteMany();
    await Teacher.deleteMany();
    await Interest.deleteMany();
})

module.exports = router;
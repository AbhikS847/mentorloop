const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Welcome to update students and teachers page");
})

module.exports = router;
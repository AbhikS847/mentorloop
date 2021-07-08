const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Welcome to view all students / teachers page with interests page");
})

module.exports = router;
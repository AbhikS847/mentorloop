const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    StudentID:{
        type:Number,
        required:true,
    },
    Interest:{
        type:Object,
        ref:'Interest',
        required:true,
    },
    Enrolled:{
        type:Boolean,
        required:true
    }
})

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;
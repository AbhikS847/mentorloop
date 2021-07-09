const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Interest:{
        type:Object,
        ref:'Interest',
        required:true,
    },
    Enrolled:{
        type:Boolean,
        default:false,
        required:false
    },
    Teacher:{
        type:Object,
        ref:'Teacher',
        default:"none",
        required:false,
    }
})

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;
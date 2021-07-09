const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Experience:{
        type:Number,
        default:0,
        required:false
    },
    Weekends:{
        type:Boolean,
        default:false,
        required:false
    }
})

const Teacher = mongoose.model('Teacher',TeacherSchema);

module.exports = Teacher;


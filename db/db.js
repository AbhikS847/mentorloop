const mongoose = require('mongoose');

const connectDB = async() =>{

    try{
        mongoose.connect(process.env.MONGO_URI,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true});
        console.log(`Database is successfully connected`);
    }

    catch(err){
        console.err(`Sorry Database could not be connected because of this error ${err}`)
    }
}

module.exports = connectDB;
const mongoose = require('mongoose');

const interestSchema = mongoose.Schema({
    Interest:[]
})

const Interest = mongoose.model('Interest',interestSchema);

module.exports = Interest;


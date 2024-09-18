const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    userid : {
        type:String,
        require:true
    },
    date : {
        type:Number,
        require:true
    },
    stream : {
        type:String,
        require:true
    },
    amount : {
        type:Number,
        require:true
    },
    comments : {
        type:String,
    }
});

module.exports = mongoose.model("Income",incomeSchema);
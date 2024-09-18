const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userName : {
        type:String,
        require:true
    },
    password : {
        type:String,
        require:true
    },
    name : {
        type:String,
        require:true
    },
    age : {
        type:Number,
        require:true
    }
});

module.exports = mongoose.model("AccountDetail",accountSchema);
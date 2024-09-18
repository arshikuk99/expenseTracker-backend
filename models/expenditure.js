const mongoose = require('mongoose');
const AccountDetail = require("./accountDetail");

const expenseSchema = new mongoose.Schema({
    userid : {
        type:String,
        require:true
    },
    date : {
        type:Number,
        require:true
    },
    catagory : {
        type:String,
        require:true
    },
    item : {
        type:String,
    },
    amount : {
        type:Number,
        require:true
    },
    comments : {
        type:String,
    },
});

module.exports = mongoose.model("Expenditure",expenseSchema);
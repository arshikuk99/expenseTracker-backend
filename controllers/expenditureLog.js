const Expenditure = require('../models/expenditure');

exports.createExpense = async(req,res)=>{
    try{
        const {userid,date,catagory,item,amount,comments} = req.body;
        const expense = new Expenditure({userid,date,catagory,item,amount,comments});
        const response = await expense.save();
    
        res.status(200).json({
            data:response
        })
    }catch(e){
        res.status(500).json({
            data:"error, contact Ash"
        })
    }
}

//delete
exports.deleteExpense = async(req,res)=>{
    try{
        const {userid,date,catagory,item,amount,comments} = req.body;
        const response = await Expenditure.findOneAndDelete({userid,date,catagory,item,amount,comments});
    
        res.status(200).json({
            data:response
        })
    }catch(e){
        res.status(500).json({
            data:"error, contact Ash"
        })
    }
}

//findall -> made it a GET by passing parameters in url
exports.findAllExpense = async(req,res)=>{
    try{
        const userid = req.params.id;
        const response = await Expenditure.find({userid});
    
        res.status(200).json({
            data:response
        })
    }catch(e){
        res.status(500).json({
            data:"error, contact Ash"
        })
    }
}

//findBycatagory
exports.findCatagoryExpense = async(req,res)=>{
    try{
        const {catagory,userid} = req.body;
        const response = await Expenditure.find({catagory,userid});
    
        res.status(200).json({
            data:response
        })
    }catch(e){
        res.status(500).json({
            data:"error, contact Ash"
        })
    }
}

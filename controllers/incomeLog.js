const Income = require('../models/income');

exports.createIncome = async(req,res)=>{
try{
    const {userid,date,stream,amount,comments} = req.body;
    const income = new Income({userid,date,stream,amount,comments});
    const response = await income.save();

    res.status(200).json({
        data:response
    })
}catch(e){
    res.status(500).json({
        data:"error, contact Ash"
    })
}
}

exports.deleteIncome = async(req,res)=>{
    try{
        const {userid,date,stream,amount} = req.body;
        const response = await Income.findOneAndDelete({userid,date,stream,amount});
    
        res.status(200).json({
            data:response
        })
    }catch(e){
        res.status(500).json({
            data:"error, contact Ash"
        })
    }
    }

exports.getIncome=async(req,res)=>{
    const userid = req.params.id;
    const response = await Income.find({userid});

    console.log(response);
    res.status(200).send({
        data:response
    })
}
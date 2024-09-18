const AccountDetail = require("../models/accountDetail");

exports.loginCred = async(req, res) => {
  try {
    const {userName , password} = req.body;
    const response = await AccountDetail.findOne({userName , password});
    

    //response acc to pass or failed verification
    if(response){
      //creating token
      let token = `${(response.userName).slice(0,3)+(response.password).slice(-2)}`;
      res.status(200).json({
        data: response,
        success: true,
        token:token
      });
    }else{
      res.status(200).json({
        data: [],
        success: false,
        token:null
      });
    }
   
  } catch (e) {
    res.status(500).json({
      data: "Error, contact Ash",
      success:false,
      token:null
    });
  }
};
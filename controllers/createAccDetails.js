const AccountDetail = require("../models/accountDetail");

exports.createAccDetail = async(req, res) => {
  try {
    const { userName, password, name, age } = req.body;
    const accDetail = new AccountDetail({
      userName,
      password,
      name,
      age,
    });
    const response = await accDetail.save();

    res.status(200).json({
      data: response,
    });
  } catch (e) {
    res.status(500).json({
      data: "Error, contact Ash",
    });
  }
};

//delete
exports.deleteAccDetail = async(req, res) => {
    try {
      const { id } = req.body;
      const response = await AccountDetail.findOneAndDelete({_id:id});  //deleteing by id
  
      res.status(200).json({
        data: response,
      });
    } catch (e) {
      res.status(500).json({
        data: "Error, contact Ash",
      });
    }
  };
  

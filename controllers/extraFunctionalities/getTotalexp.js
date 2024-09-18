const Expenditure = require("../../models/expenditure");

exports.getTotalexp = async (req, res) => {
  try {
    const userid = req.params.id;
    const response = await Expenditure.find({ userid });

    let catagory = [];
    let expsum = 0;
    response.forEach((e) => {
      catagory.push(`${e.catagory}`);
      expsum += e.amount;
    });
    catagory = [...new Set(catagory)];

    
    let arr = [];
    let arrIndex = 0;

    catagory.forEach((c) => {
        let item = {
            catagory: c,
            sum: 0,
          };
          arr.push(item);
      response.forEach((e) => {
        if (c === e.catagory) {
          arr[arrIndex].sum += e.amount;
        }
      });
      arrIndex ++;
    });
    

// Send Response
    res.status(200).send({
      data: {
        catagoryWiseExpense:arr,
        allCatagory:catagory,
        totalExpenditure:expsum
      },
    });
  } catch (e) {
    res.status(500).json({
      data: "error, contact Ash",
    });
  }
};

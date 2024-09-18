const express = require("express");
const router = express.Router();

const { createAccDetail,deleteAccDetail } = require("../controllers/createAccDetails");
const {loginCred} = require("../controllers/login");
const {createExpense,deleteExpense,findAllExpense,findCatagoryExpense} = require('../controllers/expenditureLog');
const {createIncome,deleteIncome,getIncome} = require('../controllers/incomeLog');

const {getTotalexp} = require("../controllers/extraFunctionalities/getTotalexp");

router.post("/createAccount", createAccDetail); //Account creation
router.post("/deleteAccount", deleteAccDetail);

router.post("/login", loginCred);   // Login essentials

router.post("/addExpense", createExpense); //add expense
router.post("/delExpense", deleteExpense);
router.get("/findAllExpense/:id", findAllExpense); 
router.post("/catagoryExpense", findCatagoryExpense);

router.post("/createIncome",createIncome);//add income
router.post("/deleteIncome",deleteIncome);
router.get("/getIncome/:id",getIncome);

//functionality
router.get("/getTotalExp/:id",getTotalexp);


module.exports = router;

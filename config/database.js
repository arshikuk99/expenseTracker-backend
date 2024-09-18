const mongoose = require('mongoose');
require('dotenv').config();
const DATABASEurl = process.env.DATABASE_URL;

const databaseConnection =()=>{
    mongoose.connect(DATABASEurl).then(()=>{
        console.log("Connection to Database Success !")
    }).catch((e)=>{
        console.log("error while connecting !!")
    })
}

module.exports = databaseConnection;
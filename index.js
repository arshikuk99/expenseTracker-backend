const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;

//Server Instance
app.listen(PORT, () => {
  console.log(`App started at PORT: ${PORT}`);
});

//Database Instance
const dbConnect = require("./config/database");
dbConnect();

//router Instance
const routers = require("./routers/routes");
app.use("/v1", routers);




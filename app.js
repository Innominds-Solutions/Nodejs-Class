const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // dotenv -> npm install dotenv

// if (config.env) ? require("dotenv").config({path: "config.env"});

try {
    mongoose.connect(process.env.CONNCTION_STRING);
    console.log("Database Connected Succssfully");
} catch (err) {
    console.log("Error Occured");
}


// Routes
const TourRouters = require("./Router/ToursRouter");
const userRouter = require("./Router/userRouter");

const app = express();

// Default Middleware (Provided by Express)
app.use(cors());
app.use(express.json());



// Thread Pool
app.use("/api/v1/tours", TourRouters);
app.use("/api/v1/user", userRouter);

// 404 not found

// * start denotes everythings or all 
app.get("*", (req, res) => {
    res.status(200).json({
        status: "Failed",
        message: "Entered Wrong Route"
    })
});

app.listen(8001, function () {
    console.log("Server is running at port 80");
});
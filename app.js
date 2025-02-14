const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// if (config.env) ? require("dotenv").config({path: "config.env"});
require("dotenv").config(); // dotenv -> npm install dotenv

const categoryRouter = require("./Router/CategoryRouter");
const blogsRouter = require("./Router/BlogsRouter");


try {
    mongoose.connect(process.env.CONNCTION_STRING);
    console.log("Database Connected Succssfully");
} catch (err) {
    console.log("Error Occured");
}

console.log(process.env.CONNCTION_STRING)

const app = express();

// Default Middleware (Provided by Express)

// used to Block third party ip address 
app.use(cors());

// accepts data from the req.body incomming or sending from the POST request
app.use(express.json()); 
// ---> incomming -> binary ---> json

// Routes
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/blogs", blogsRouter);

// 404 not found
app.get("*", (req, res) => { // * start denotes everythings or all 
    res.status(200).json({
        status: "Failed",
        message: "Entered Wrong Route"
    })
});

app.listen(8001, function () {
    console.log("Server is running at port 80");
});
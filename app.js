const express = require("express");

// Routes
const TourRouters = require("./Router/ToursRouter");
const userRouter = require("./Router/userRouter");

const app = express();

// Thread Pool
app.use("/api/v1/tours", TourRouters);
app.use("/api/v1/user", userRouter);

// 404 not found

// * start denotes everythings 
app.get("*", (req, res) => {
    res.send("Not Found");
});

app.listen(8001, function () {
    console.log("Server is running at port 80");
});
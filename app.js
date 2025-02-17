const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const layouts = require("express-ejs-layouts");

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

// ejs --> Nodejs Enviroment Compiles --> append content --> Render in browser

// setting up the view engine
app.set('view engine', "ejs");

// giving the absolute path of the views where the DOM content(.ejs files) are located 
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

// express.static(path.join(__dirname, ))
app.use(layouts);
app.set("layout", "Layouts");

// accepts data from the req.body incomming or sending from the POST request
app.use(express.json());
// ---> incomming -> binary ---> json

// Routes
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/blogs", blogsRouter);

app.get("/", (req, res) => {
    res.render("Pages/Home/Home");
});

app.get("/about", (req, res) => {
    res.render("Pages/About/About");
});

// 404 not found
app.get("*", (req, res) => {
    res.render("NotFound/NotFound");
});

app.listen(8001, function () {
    console.log("Server is running at port 8001");
});
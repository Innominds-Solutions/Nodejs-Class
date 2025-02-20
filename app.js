const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const layouts = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

// if (config.env) ? require("dotenv").config({path: "config.env"});
require("dotenv").config(); // dotenv -> npm install dotenv


const categoryRouter = require("./Router/CategoryRouter");
const blogsRouter = require("./Router/BlogsRouter");
const ViewRouter = require("./Router/ViewRouter");
const AuthRouter = require("./Router/AuthRouter");
const userModel = require("./Model/UserModel");

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
app.use(cookieParser());

// ejs --> Nodejs Enviroment Compiles --> append content --> Render in browser

// setting up the view engine
app.set('view engine', "ejs");

// giving the absolute path of the views where the DOM content(.ejs files) are located 
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// express.static(path.join(__dirname, ))
app.use(layouts);
app.set("layout", "Layouts");

// accepts data from the req.body incomming or sending from the POST request
app.use(express.json());
// ---> incomming -> binary ---> json

// Routes
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/blogs", blogsRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/", ViewRouter);


// 404 not found
app.get("*", (req, res) => {
    res.render("NotFound/NotFound");
});

// seeding the admin
(async () => {
    try {
        await userModel.create({
            email: process.env.ADMIN_EMAIL,
            password: await bcrypt.hash(process.env.ADMIN_PASSWORD, Number(process.env.PASSWORD_SALT)),
            role: process.env.ADMIN_ROLE
        });

        console.log("Admin Seeded Successfully");
    } catch (err) {
        console.log(err)
    }

})();

// localhost:8001/api/v1/blogs/upload-blogs
// Address = localhost:8001/
// Prefix = /api/v1/blogs/ 
// Endpoints = upload-blogs

app.listen(8001, function () {
    console.log(`Server is running at port localhost`);
});
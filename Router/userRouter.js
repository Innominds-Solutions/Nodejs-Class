const express = require("express");
const Router = express.Router();
const {
    Helloworld
} = require("./../Middleware/Helloworld");
const {
    getUser
} = require("./../Controller/UserController");

Router.get("/", Helloworld, getUser);

module.exports = Router;
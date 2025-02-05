const express = require("express");
const Router = express.Router();
const {
    TourHome
} = require("./../Controller/TourController");

Router.get("/", TourHome);
// Router.get("/", function (req, res) {
//     res.send("Home page");
// });


// we export this router becuase app.listen will extablish a new router with this route.
module.exports = Router;
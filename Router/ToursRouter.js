const express = require("express");
const Router = express.Router();
const {
    TourHome, GetFormData
} = require("./../Controller/TourController");

Router.get("/", TourHome);

Router.post("/form", GetFormData);

// we export this router becuase app.listen will extablish a new router with this route.
module.exports = Router;
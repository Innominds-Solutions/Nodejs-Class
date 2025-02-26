const router = require("express").Router();
const { isLoggedIn, isAdminLoggedIn } = require("./../Controller/AuthController");
const { dashboard, GetAllBlogs } = require("../Controller/AdminController");

// setup global middleware which need admin permission in the defined below routes
router.use(isLoggedIn);
router.use(isAdminLoggedIn);

router.get("/dashboard", dashboard); 
router.get("/list-blogs", GetAllBlogs); 

module.exports = router;
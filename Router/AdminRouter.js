const router = require("express").Router();
const { isLoggedIn, isAdminLoggedIn } = require("./../Controller/AuthController");
const { dashboard, GetAllBlogs, AddBlogsPage } = require("../Controller/AdminController");

// setup global middleware which need admin permission in the defined below routes
router.use(isLoggedIn);
router.use(isAdminLoggedIn);

router.get("/all-blogs", GetAllBlogs);
router.get("/dashboard", dashboard); 
router.get("/list-blogs", GetAllBlogs); 
router.get("/add-blogs", AddBlogsPage);

module.exports = router;
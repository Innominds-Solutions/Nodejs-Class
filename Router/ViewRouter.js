const router = require("express").Router();
const { HomePage, AboutPage, LoginPage, SignupPage, AddBlogsPage, GetOneBlogs } = require("./../Controller/ViewController");
const { isAdminLoggedIn, isLoggedIn } = require("./../Controller/AuthController")

router.get("/", HomePage);
// router.get("/about", AboutPage);
router.get("/login", LoginPage)
router.delete("/logout", LoginPage)
router.get("/signup", SignupPage);
router.get("/:slug", GetOneBlogs);

module.exports = router;
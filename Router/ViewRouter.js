const router = require("express").Router();
const { HomePage, AboutPage, LoginPage, SignupPage, AddBlogsPage } = require("./../Controller/ViewController");
const { isAdminLoggedIn, isLoggedIn } = require("./../Controller/AuthController")

router.get("/", HomePage);
// router.get("/about", AboutPage);
router.get("/login", LoginPage)
router.delete("/logout", LoginPage)
router.get("/signup", SignupPage)
router.get("/add-blogs", isLoggedIn, AddBlogsPage);


module.exports = router;
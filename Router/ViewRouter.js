const router = require("express").Router();
const { HomePage, AboutPage, LoginPage, SignupPage } = require("./../Controller/ViewController");

router.get("/", HomePage);
router.get("/about", AboutPage);
router.get("/login", LoginPage)
router.get("/signup", SignupPage)

module.exports = router;

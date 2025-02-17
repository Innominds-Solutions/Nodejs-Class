const router = require("express").Router();
const { HomePage, AboutPage } = require("./../Controller/ViewController");

router.get("/", HomePage);
router.get("/about", AboutPage);

module.exports = router;

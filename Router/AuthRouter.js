const router = require("express").Router();
const { CreateUserAccount } = require("./../Controller/AuthController");

router.post("/signup", CreateUserAccount);

module.exports = router;
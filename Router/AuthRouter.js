const router = require("express").Router();
const { CreateUserAccount, Login, isLoggedIn, UserProfile } = require("./../Controller/AuthController");

router.post("/signup", CreateUserAccount);
router.post("/login", Login);
router.get("/me", isLoggedIn, UserProfile)

module.exports = router;
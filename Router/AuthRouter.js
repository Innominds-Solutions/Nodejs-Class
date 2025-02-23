const router = require("express").Router();
const { CreateUserAccount, Login, isLoggedIn, UserProfile, isAdminLoggedIn, loggout } = require("./../Controller/AuthController");

router.post("/signup", CreateUserAccount);
router.post("/login", Login);
router.get("/profile", isLoggedIn, isAdminLoggedIn, UserProfile)
router.delete("/logout", loggout);

module.exports = router;
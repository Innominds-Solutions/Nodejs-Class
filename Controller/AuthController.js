const CatchAsync = require("../Utils/CatchAsync");
const userModel = require("./../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function createRefreshToken(res, id) {
    console.log(id)
    const token = jwtToken(id);
    console.log(token);

    res.cookie(process.env.AUTH_COOKIES_KEY, token, {
        expires: new Date(Date.now() + process.env.COOKIES_EXPIRATION * 24 * 60 * 60 * 1000), // millisecond = ms (1s = 1000) 
    });

    res.status(200).json({
        status: "success",
        message: "logged in successfully",
    })
}


function jwtToken(id) {
    console.log(id)
    return jwt.sign({
        id
    }, process.env.HASH_STRING, {
        expiresIn: process.env.EXPIRATION_DURATION // 10d * 24 = 2400 
    })
}

exports.CreateUserAccount = CatchAsync(async (req, res) => {
    console.log(req.body);
    const { userName, email, password, confirmPassword } = req.body;

    // validating if any one of fields is missing
    if (!email || !password || !confirmPassword) {
        console.log("Please Enter all the fields")
    }

    // check if the password and confirm password are matching or not
    if (!password.localeCompare(confirmPassword)) {
        console.log("Password doesnot Matched")
    }

    // check if the email is already exists in the database 
    const check_user = await userModel.findOne({
        email: email
    });

    if (check_user) {
        console.log("users already Exists, Please Log In");
    }

    const signup = await userModel.create({
        email: email,
        userName: userName,
        password: await bcrypt.hash(password, 8) // SHA256
    })


    if (!signup) {
        if (err._message == "userModel validation failed") {
            console.log("your inserted wrong Gmail Account Type");
        }
    } else {
        createRefreshToken(res, signup._id)
    }

});

exports.Login = CatchAsync(async (req, res) => {
    const { email, password } = req.body;

    // validating if any one of fields is missing
    if (!email || !password) {
        res.status(500).json({
            status: "Failed",
            message: "Please Enter all the fields"
        });
    }

    const user_email = await userModel.findOne({
        email: email
    });

    if (!user_email) {
        res.status(500).json({
            status: "Failed",
            message: "No User Found with that Email"
        })
    }

    if (await bcrypt.compare(password, user_email.password)) {
        createRefreshToken(res, user_email._id)
    } else {
        res.status(500).json({
            status: "Failed",
            message: "wrong password"
        })
    }
});

exports.isLoggedIn = CatchAsync(async (req, res, next) => {
    if (req.cookies.jwt) {
        const DecodedId = jwt.verify(req.cookies.jwt, process.env.HASH_STRING);

        // id or _id
        const user = await userModel.findOne({
            _id: DecodedId.id
        });

        res.locals.user = user;
    } else {
        console.log("Unauthorized");
    }

    next();
});



exports.UserProfile = CatchAsync(async (req, res, next) => {
    const user = res.locals.user;
    res.status(200).json({
        user
    })
})
// Login
// signup
// delete user id
// update Account
// cookies creation
// check if user exists ( middleware )
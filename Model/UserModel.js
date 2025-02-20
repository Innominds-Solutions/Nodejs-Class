const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
    },

    userName: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        match: /^[a-zA-Z0-9._%+-]+(@gmail)\.com$/i
    },

    password: {
        type: String,
        require: true
    },

    role: {
        type: String,
        // enum: ["user", "admin"],
        default: "user"
    },

    profile: {
        type: String,
        default: "upload/profile/default.png"
    },
});

const userModel = new mongoose.model("userModel", userSchema);
module.exports = userModel;
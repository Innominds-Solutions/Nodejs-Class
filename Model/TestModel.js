const mongoose = require("mongoose");

const TestModel = mongoose.Schema({

    // text, id, relation, number, email
    id: {
        type: mongoose.Schema.ObjectId,
        require: true
    },

    name: {
        type: String,
        require: true,
        // maxLength: 7, // max length of character / text
        minLength: 2, // min length of charactrtr / text
        uppercase: true, // abijeet --> ABIJEET
        // lowercase: true, // ABIJEET --> abijeet
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  // allows only matchable field to be inserted
        // enum: ["admin", "teacher", "student"], // ROLE BASED SYSTEM 
        // default: "student",  // by default role content setup
    }
});

const uploadTestModel = new mongoose.model("test", TestModel);
module.exports = uploadTestModel;
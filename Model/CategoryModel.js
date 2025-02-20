const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        require: true
    },
    name:{
        type: String,
        unique: true,
        require: true,
        maxLength: 20,
        minLength: 2,
    },
    description: {
        type: String,
        require: true,
    },
    isActive: {
        type: Boolean,
        require: true
    }
})

const categoryModel = new mongoose.model("categoryModel", categorySchema);
module.exports = categoryModel;
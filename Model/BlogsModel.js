const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        require: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "categoryModel"
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "userModel"
    },
    Image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    isPublish: {
        type: String,
        require: true
    },
});

// 

const blogsModel = new mongoose.model("BlogsModel", BlogsSchema);
module.exports = blogsModel;
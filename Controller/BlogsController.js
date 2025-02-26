const CatchAsync = require("./../Utils/CatchAsync");
const BlogsModel = require("./../Model/BlogsModel");
const CategoryModel = require("./../Model/CategoryModel");

exports.ReadBlogs = CatchAsync(async (req, res, next) => {
    const Blogs = await BlogsModel.find({
        isPublish: true
    });

    res.status(200).json({
        status: 200,
        Blogs
    })
});

exports.uploadBlogs = CatchAsync(async (req, res, next) => {
    console.log(res.locals.user);
    
    const { Category, title, content, isPublish } = req.body;
    
    console.log(req.body);
    
    const ChoosenCategory = await CategoryModel.findOne({
        name: Category
    })

    const slug = title.replaceAll(" ", "-") + "-" + Date.now();

    const UploadBlogs = await BlogsModel.create({
        userID: res.locals.user._id,
        title: title,
        content: content,
        Image: req.file.filename,
        categoryId: ChoosenCategory._id,
        isPublish: isPublish,
        slug: slug
    })

    res.status(200).json({
        status: "Success",
        UploadBlogs
    })
});

// 67af6edac6d7cdb36a6b5607
exports.DeleteBlogs = CatchAsync(async (req, res, next) => {
    const id = req.params.id;

    const DeleteBlogs = await BlogsModel.deleteOne({
        _id: id
    })

    res.status(200).json({
        status: "Success",
        message: "Data Deleted",
        DeleteBlogs
    })
});


// 67af70fde276e0044f6c900b
exports.UpdateBlogs = CatchAsync(async (req, res, next) => {
    const id = req.params.id;
    const { Category, title, content, isPublish } = req.body;

    const Blog = await BlogsModel.findOne({
        _id: id
    });

    const category = await CategoryModel.findOne({
        name: Category
    });


    if (category._id) {
        Blog.categoryId = category._id;
    } else if (title) {
        Blog.slug = title.replaceAll(" ", "-") + "-" + Date.now();
        Blog.title = title;
    } else if (content) {
        Blog.content = content;
    } else if (isPublish) {
        Blog.isPublish = isPublish;
    }

    Blog.save();

    res.status(200).json({
        message: "Success",
        Blog
    })
});
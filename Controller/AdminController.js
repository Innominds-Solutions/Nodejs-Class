const blogsModel = require("../Model/BlogsModel");
const categoryModel = require("../Model/CategoryModel");
const CatchAsync = require("../Utils/CatchAsync");

exports.dashboard = CatchAsync(async (req, res) => {
    const CategoryList = await categoryModel.find({
        isActive: true
    })

    res.render("Admin/Pages/Add_Blogs/Add_Blogs.ejs", {
        layout: "AdminLayout",
        CategoryList: CategoryList
    });
});



exports.GetAllBlogs = CatchAsync(async (req, res) => {
    const AllBlogs = await blogsModel.find();
    console.log(AllBlogs)
    
    res.render("Admin/Pages/All_Blogs/All_Blogs.ejs", {
        layout: "AdminLayout",
        AllBlogs
    });
});
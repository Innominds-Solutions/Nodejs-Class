const blogsModel = require("../Model/BlogsModel");
const categoryModel = require("../Model/CategoryModel");
const userModel = require("../Model/UserModel");
const CatchAsync = require("../Utils/CatchAsync");

exports.dashboard = CatchAsync(async (req, res) => {
    const user = res.local.user;
    const CategoryList = await categoryModel.find();
    const UserList = await userModel.find();
    const BlogsList = await blogsModel.find();

    const activeBlogs = await blogsModel.find({
        isPublish: true
    });


    res.render("Admin/Pages/Dashboard/Dashboard.ejs", {
        layout: "AdminLayout",
        counts: [
            { Table: "User", count: UserList.length },
            { Table: "Blogs", count: BlogsList.length },
            { Table: "Category", count: CategoryList.length }
        ],
        activeBlogs,
        user
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

exports.AddBlogsPage = CatchAsync(async (req, res) => {
    const CategoryList = await categoryModel.find({
        isActive: true
    });

    res.render("Admin/Pages/Add_Blogs/Add_Blogs.ejs", {
        layout: "AdminLayout",
        CategoryList
    });
})
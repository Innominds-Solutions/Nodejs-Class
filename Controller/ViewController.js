const CatchAsync = require("../Utils/CatchAsync");
const CategoryModel = require("../Model/CategoryModel");
const blogsModel = require("../Model/BlogsModel");
const categoryModel = require("../Model/CategoryModel");

exports.HomePage = CatchAsync(async (req, res) => {
    const page = Number(req.query.page);
    const search_field = req.query.searchQuery;
    const limit = 3;
    const urlCategory = req.query.category;

    console.log(search_field, page)


    const category = await categoryModel.find({ isActive: true }).select("name");
    // console.log(category)

    const searched_array = [];

    // page = 3 (1 - 10, 10 - 20, 20 - 30) (1, 2, 3, ...)
    let datas = await blogsModel.aggregate([
        {
            $match: search_field ? {
                $or: [
                    { title: { $regex: search_field, $options: 'i' } }, // Hello, hello 
                    { content: { $regex: search_field, $options: 'i' } },
                    { slug: { $regex: search_field, $options: 'i' } },
                ]
            } : {}
        },
        { $skip: page ? Number((Number(page) - 1) * limit) : 0 },
        { $limit: limit },
    ]); // aggregate pipeline




    console.log(datas)
    res.render("Pages/Home/Home", {
        datas: datas,
        categories: category
    });
});

exports.AboutPage = CatchAsync(async (req, res) => {
    res.render("Pages/About/About");
})

exports.LoginPage = CatchAsync(async (req, res) => {
    res.render("Pages/Authentication/Login/Login");
})


exports.SignupPage = CatchAsync(async (req, res) => {
    res.render("Pages/Authentication/Signup/Signup.ejs");
})

exports.AddBlogsPage = CatchAsync(async (req, res) => {
    const CategoryList = await CategoryModel.find({
        isActive: true
    });


    res.render("Pages/Add_Blogs/Add_Blogs.ejs", {
        CategoryList
    });
})

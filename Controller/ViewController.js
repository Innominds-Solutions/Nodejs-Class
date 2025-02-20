const CatchAsync = require("../Utils/CatchAsync");
const CategoryModel = require("../Model/CategoryModel");

exports.HomePage = CatchAsync(async (req, res) => {
    const datas = [
        {
            postImg: "images/img2.jpg",
            category: "Tech",
            postTitle: "How to create the best UI with Figma",
            postDate: "12 Feb 2022",
            postDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.",
            profileImg: "images/testi1.jpg",
            profileName: "MKHB"
        },
        {
            postImg: "images/img3.jpg",
            category: "Food",
            postTitle: "How to Learn Node.js?",
            postDate: "12 Feb 2022",
            postDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.",
            profileImg: "images/testi1.jpg",
            profileName: "MKHB"
        },
    ];

    res.render("Pages/Home/Home", {
        datas: datas
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

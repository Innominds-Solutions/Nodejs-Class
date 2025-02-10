const categoryModel = require("./../Model/CategoryModel");
const fs = require("fs");

exports.ReadCategory = async (req, res) => {

    const Categories = await categoryModel.find({
        isActive: true
    });

    res.status(200).json({
        status: "Success",
        length: Categories.length,
        Categories
    })
}

exports.UploadCategory = async (req, res) => {
    const { Name, Description, slug } = req.body; // name, description
    // const Name = req.body.Food;
    // const Description = req.body.Description;

    const UploadedCategory = await categoryModel.create({
        name: Name,
        description: Description,
        isActive: true
    })


    res.status(201).json({
        status: "Success",
        UploadedCategory
    })
}

exports.GetOneCategory = async (req, res) => {

    const Name = req.params.slug;

    const data = await categoryModel.findOne({
        name: Name
    })

    res.status(201).json({
        status: "Success",
        slug: Name,
        data
    })
}

exports.DeleteCategory = async (req, res) => {
    const Name = req.params.slug;
    const data = await categoryModel.deleteOne({
        name: Name
    });

    res.status(201).json({
        status: "Success",
        slug: Name,
        data
    })
}

exports.UpdateCategory = async (req, res) => {
    const { Name, Description, isActive } = req.body;

    const Category = await categoryModel.findOne({
        name: Name,
    });

    Category.description = Description;
    Category.isActive = isActive;

    Category.save();

    res.status(201).json({
        status: "Success",
        Message: "Updated Document",
        Category
    })
}

exports.MassUpload = async (req, res) => {
    const MockCategorys = fs.readFileSync("./Model/Test/MockCategory.json", "utf-8")

    // convert the string form of data into JSON FORMAT
    console.log(JSON.parse(MockCategorys));
    const JsonMockCategory = JSON.parse(MockCategorys);

    JsonMockCategory.forEach(async (MockCategory) => {
        await categoryModel.create({
            name: MockCategory.name,
            description: MockCategory.description,
            isActive: MockCategory.isActive
        })
    });

    res.status(200).json({
        status: "Success",
        data: JsonMockCategory
    })
}
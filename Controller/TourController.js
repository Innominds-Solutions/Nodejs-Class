const test = require("./../Model/TestModel")

exports.TourHome = async (req, res) => {
    const data = "hello@gmail.com";
    await test.create({ name: data })

    res.send("Home page");
}

exports.GetFormData = (req, res) => {
    const data = req.body;

    res.status(200).json({
        status: "Success",
        data: data
    })
}
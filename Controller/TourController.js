exports.TourHome = (req, res) => {
    res.send("Home page");
}

exports.GetFormData = (req, res) => {
    const data = req.body;

    res.status(200).json({
        status: "Success",
        data: data
    })
}
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {

        // multer -->  image buffer 
        // hello world -> hello-world-12341231.png
        console.log(file)
        // Screenshot-2025-02-15-173455.png --> split --> [0] = Screenshot-2025-02-15-173455, [1] = .png
        const imageName = file.originalname.split(".png")[0].replaceAll(" ", "-") + "-" + Date.now() + ".png";
        cb(null, imageName);
    }
})

module.exports = { multer, storage };

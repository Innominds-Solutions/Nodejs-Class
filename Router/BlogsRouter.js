const router = require("express").Router();
const { ReadBlogs, uploadBlogs, DeleteBlogs, UpdateBlogs } = require("./../Controller/BlogsController");
const { multer, storage } = require("./../Utils/Multer");

const upload = multer({
    storage: storage
});

// upload.single(); -> for single image
// upload.array(); -> for multiple images

router.get("/", ReadBlogs);
router.post("/upload-blogs", upload.single("blog_image"), uploadBlogs);
router.delete("/DeleteBlogs/:id", DeleteBlogs);
router.patch("/UpdateBlogs/:id", UpdateBlogs);

module.exports = router;
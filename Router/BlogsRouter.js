const router = require("express").Router();
const { ReadBlogs, uploadBlogs, DeleteBlogs, UpdateBlogs } = require("./../Controller/BlogsController");

router.get("/", ReadBlogs);
router.post("/upload-blogs", uploadBlogs);
router.delete("/DeleteBlogs/:id", DeleteBlogs);
router.patch("/UpdateBlogs/:id", UpdateBlogs);

module.exports = router;
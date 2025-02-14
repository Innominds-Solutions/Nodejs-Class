const express = require("express");
const router = express.Router();

const { ReadCategory, UploadCategory, GetOneCategory, DeleteCategory, UpdateCategory, MassUpload } = require("./../Controller/CategoryController");

// CREATE, READ, UPDATE, DELETE
router.get('/', ReadCategory) // READ
router.post("/upload-category", UploadCategory);
router.get("/:slug", GetOneCategory);
router.delete("/:slug", DeleteCategory);
router.patch("/:slug", UpdateCategory); 
router.post("/mass-upload", MassUpload);

module.exports = router;
const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const { upload } = require("../controllers/cloudinary");

router.post("/uploadimages", authCheck, adminCheck, upload);

module.exports = router;

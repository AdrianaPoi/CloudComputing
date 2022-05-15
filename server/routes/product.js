const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, listAll, read, list } = require("../controllers/product");

// routes
router.post("/product", authCheck, adminCheck, create);

router.get("/products/:count", listAll); // products/100
router.delete("/product/:slug", authCheck, adminCheck);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck);

router.post("/products", list);

module.exports = router;

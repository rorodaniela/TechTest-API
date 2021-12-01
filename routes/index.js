const express = require("express");
const router = express.Router();

const { CategoryController } = require("../controllers/CategoryController");
const { ProductController } = require("../controllers/ProductController");


// Category Route
router.get("/category", CategoryController.getAll);
router.post("/category", CategoryController.create);

// Product Route
router.get("/product/:id", ProductController.getDetail);
router.get("/products/:id", ProductController.getAll);
router.post("/product", ProductController.create);


module.exports = router;

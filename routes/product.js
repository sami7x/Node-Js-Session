//importing modules
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.post("/", productController.product_create);
router.get("/", productController.product_all);
router.put("/:productId",productController.product_update );

module.exports = router;


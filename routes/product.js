//importing modules
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");


router.post("/", productController.product_create);
router.get("/", productController.product_all);
router.put("/:productId",productController.product_update );
router.delete("/:productId",productController.product_delete);
router.get("/:productId",productController.product_single);


module.exports = router;


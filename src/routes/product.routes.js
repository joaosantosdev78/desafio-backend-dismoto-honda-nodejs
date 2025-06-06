const router = require("express").Router();
const ProductController = require("../controllers/product.controller");

router.post("/", ProductController.newProduct);
router.get("/", ProductController.getAllProducts)
router.put("/:id", ProductController.editProduct)
router.get("/:id", ProductController.getProductById)
router.delete("/:id", ProductController.deleteProductById)

module.exports = router;

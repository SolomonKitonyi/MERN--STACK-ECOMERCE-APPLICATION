const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthentictedUser } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/admin/product/new").post(isAuthentictedUser, newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthentictedUser, updateProduct)
  .delete(isAuthentictedUser, deleteProduct);

module.exports = router;

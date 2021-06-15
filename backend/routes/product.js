const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuthentictedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(isAuthentictedUser, getProducts);
router.route("/product/:id").get(getSingleProduct);
router
  .route("/admin/product/new")
  .post(isAuthentictedUser, authorizeRoles("admin"), newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthentictedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthentictedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthentictedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router
  .route("/admin/product/new")
  .post(isAuthentictedUser, authorizeRoles("admin"), newProduct);
router
  .route("/admin/product/:id")
  .put(isAuthentictedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthentictedUser, authorizeRoles("admin"), deleteProduct);

router.route("/review").put(isAuthentictedUser, createProductReview);
router.route("/reviews").get(isAuthentictedUser, getProductReviews);
router.route("/reviews").delete(isAuthentictedUser, deleteReview);

module.exports = router;

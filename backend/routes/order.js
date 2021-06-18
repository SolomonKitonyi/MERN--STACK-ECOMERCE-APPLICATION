const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { isAuthentictedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/order/new").post(isAuthentictedUser, newOrder);
router.route("/order/:id").get(isAuthentictedUser, getSingleOrder);
router.route("/orders/me").get(isAuthentictedUser, myOrders);
router
  .route("/admin/orders")
  .get(isAuthentictedUser, authorizeRoles("admin"), allOrders);

router
  .route("/admin/order/:id")
  .put(isAuthentictedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthentictedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  newOrder,
  getSingleOrder,
  myOrders,
} = require("../controllers/orderController");
const { isAuthentictedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/order/new").post(isAuthentictedUser, newOrder);
router.route("/order/:id").get(isAuthentictedUser, getSingleOrder);
router.route("/orders/me").get(isAuthentictedUser, myOrders);

module.exports = router;

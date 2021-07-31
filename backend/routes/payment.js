const express = require("express");
const router = express.Router();

const {
  processPayment,
  sendStripeApi,
} = require("../controllers/paymentController");
const { isAuthentictedUser } = require("../middlewares/auth");

router.route("/payment/process").post(isAuthentictedUser, processPayment);
router.route("/stripeapi").get(isAuthentictedUser, sendStripeApi);

module.exports = router;

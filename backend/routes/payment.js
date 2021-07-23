const express = require("express");
const router = express.Router();

const { processPayment } = require("../controllers/paymentController");
const { isAuthentictedUser } = require("../middlewares/auth");

router.route("/payment/process").post(isAuthentictedUser, processPayment);

module.exports = router;

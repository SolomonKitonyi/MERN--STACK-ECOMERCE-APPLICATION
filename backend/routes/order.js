const express = require("express");
const router = express.Router();

const { newOrder } = require("../controllers/orderController");
const { isAuthentictedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/order/new").post(isAuthentictedUser, newOrder);

module.exports = router;

const express = require("express");
const router = express.Router();

const { isAuthentictedUser } = require("../middlewares/auth");

const {
  registerUser,
  loginUser,
  logout,
  forgotPassward,
  resetPassword,
  getUserProfile,
  updatePassword,
} = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassward);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthentictedUser, getUserProfile);
router.route("/password/update").put(isAuthentictedUser, updatePassword);
module.exports = router;

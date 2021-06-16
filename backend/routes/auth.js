const express = require("express");
const router = express.Router();

const { isAuthentictedUser, authorizeRoles } = require("../middlewares/auth");

const {
  registerUser,
  loginUser,
  logout,
  forgotPassward,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  allUsers,
  getUserDetails,
  updateUser,
} = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassward);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthentictedUser, getUserProfile);
router.route("/password/update").put(isAuthentictedUser, updatePassword);
router.route("/me/update").put(isAuthentictedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthentictedUser, authorizeRoles("admin"), allUsers);
router
  .route("/admin/user/:id")
  .get(isAuthentictedUser, authorizeRoles("admin"), getUserDetails)
  .put(isAuthentictedUser, authorizeRoles("admin"), updateUser);
module.exports = router;

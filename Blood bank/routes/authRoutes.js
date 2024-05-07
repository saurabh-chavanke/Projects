const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authCountroller");
const authMiddelware = require("../middlewares/authMiddelware");
const router = express.Router();

//register | post
router.post("/register", registerController);

//login
router.post("/login", loginController);

//get current user
router.get("/current_user", authMiddelware, currentUserController);

module.exports = router;

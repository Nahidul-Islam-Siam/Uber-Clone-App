const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const { route } = require("../app");

const userController = require("../controllers/user.controller");

router.post("/register", [
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body(""),
],
userController.registerUser
);
module.exports = router;

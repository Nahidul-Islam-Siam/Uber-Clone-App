const express = require("express");
const router = express.Router();

const { body} =  require("express-validator");
const { route } = require("../app");




router.post("/register", [
body("email").isEmail().withMessage('Invalid email'),
body("password").isLength({min: 5}).withMessage('Password must be at least 5 characters long'),
body('')    
])
module.exports = router;
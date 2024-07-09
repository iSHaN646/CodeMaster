const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { getAllUserDetails } = require("../controllers/profile");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account

router.get("/getUserDetails", auth, getAllUserDetails);
// Get Enrolled Courses
module.exports = router;

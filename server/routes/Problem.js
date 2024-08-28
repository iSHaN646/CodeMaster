// Import the required modules
const express = require("express");
const router = express.Router();

// Folders Controllers Import
const {
  createProblem,
  updateProblem,
  deleteProblem,
  getAllProblems,
  getAllSolvedProblems,
  getProblem,
  getUserCode,
  updateCode,
  saveCode,
  getSubmissions,
} = require("../controllers/Problem");

// Importing Middlewares
const { auth, isAdmin } = require("../middleware/auth");

// ********************************************************************************************************
//                                      History routes
// ********************************************************************************************************

//Add a Folder to a History
router.post("/addProblem", auth, isAdmin, createProblem);
// Update a Folder
router.post("/updateProblem", auth, isAdmin, updateProblem);
// Delete a Folder
router.post("/deleteProblem", auth, isAdmin, deleteProblem);
router.get("/getUserCode", auth, getUserCode);
router.post("/updateCode", auth, updateCode);
router.post("/saveCode", auth, saveCode);
router.get("/getSubmissions", auth, getSubmissions);

router.get("/getAllProblems", auth, getAllProblems);
router.get("/getProblem", auth, getProblem);

router.get("/getAllSolvedProblems", auth, getAllSolvedProblems);

module.exports = router;

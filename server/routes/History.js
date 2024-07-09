// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// History Controllers Import
const { getHistoryDetails } = require("../controllers/History");

// Folders Controllers Import
const {
  createFolder,
  updateFolder,
  deleteFolder,
} = require("../controllers/Folder");

// Sub-Folders Controllers Import
const {
  createSubFolder,
  updateSubFolder,
  saveSubFolder,
  deleteSubFolder,
} = require("../controllers/SubFolder");

// Importing Middlewares
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middleware/auth");

// ********************************************************************************************************
//                                      History routes
// ********************************************************************************************************

//Add a Folder to a History
router.post("/addFolder", auth, createFolder);
// Update a Folder
router.post("/updateFolder", auth, updateFolder);
// Delete a Folder
router.post("/deleteFolder", auth, deleteFolder);
// Edit Sub Folder
router.post("/updateSubFolder", auth, updateSubFolder);
router.post("/saveSubFolder", auth, saveSubFolder);
// Delete Sub Folder
router.post("/deleteSubFolder", auth, deleteSubFolder);
// Add a Sub Folder to a Folder
router.post("/addSubFolder", auth, createSubFolder);

router.get("/gethistoryDetails", auth, getHistoryDetails);

module.exports = router;

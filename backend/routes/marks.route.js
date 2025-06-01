const express = require("express");
const router = express.Router();

const {
  getMarksController,
  addMarksController,
  deleteMarksController,
} = require("../controllers/marks.controller");

// Route to get marks (using POST to accept body parameters)
router.post("/get", getMarksController);

// Route to add or update marks
router.post("/add", addMarksController);

// Route to delete marks by id
router.delete("/delete/:id", deleteMarksController);

module.exports = router;

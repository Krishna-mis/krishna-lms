const express = require("express");
const router = express.Router();
const {
  submitApplication,
  getApplications,
  updateApplicationStatus,
} = require("../controllers/admissionController");

router.post("/submit", submitApplication);
router.get("/", getApplications);
router.post("/:id/status", updateApplicationStatus); // ✅ Correct route

module.exports = router;

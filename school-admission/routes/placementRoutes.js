const express = require("express");
const {
  getPlacements,
  getPlacementRecords,
  addPlacement,
  addPlacementRecord,
  deletePlacement,
} = require("../controllers/placementController");

const router = express.Router();

// Placement routes
router.get("/", getPlacements);
router.post("/", addPlacement);
router.delete("/:id", deletePlacement);

// Placement records routes
router.get("/records", getPlacementRecords);
router.post("/records", addPlacementRecord);

module.exports = router;

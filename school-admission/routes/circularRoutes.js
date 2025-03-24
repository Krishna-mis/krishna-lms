const express = require("express");
const router = express.Router();
const circularController = require("../controllers/circularController");

router.get("/getAll", circularController.getAllCirculars);
router.get("/:id", circularController.getCircularById);
router.post("/", circularController.createCircular);
router.delete("/:id", circularController.deleteCircular);

module.exports = router;

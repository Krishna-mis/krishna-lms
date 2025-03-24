const db = require("../config/db");

// Get all placement details
const getPlacements = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM placements");
    res.json(rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Failed to fetch placements" });
  }
};

// Get all placement records
const getPlacementRecords = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM placement_records");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching placement records:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Add a new placement
const addPlacement = async (req, res) => {
  const { company_name, role, location, package, applied_students } = req.body;

  if (!company_name || !role || !location || !package || !applied_students) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO placements (company_name, role, location, package, applied_students) VALUES (?, ?, ?, ?, ?)";

  try {
    const [result] = await db.query(sql, [
      company_name,
      role,
      location,
      package,
      applied_students,
    ]);

    res.json({
      message: "Placement added successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error inserting placement:", error);
    res.status(500).json({ error: "Failed to add placement" });
  }
};

// Add a new placement record
const addPlacementRecord = async (req, res) => {
  const { company_name, placed_students, package } = req.body;

  if (!company_name || !placed_students || !package) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO placement_records (company_name, placed_students, package) VALUES (?, ?, ?)";

  try {
    const [result] = await db.query(sql, [
      company_name,
      placed_students,
      package,
    ]);
    res.status(201).json({
      message: "Placement record added successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error inserting placement record:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Delete a placement
const deletePlacement = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM placements WHERE id = ?";

  try {
    await db.query(sql, [id]);
    res.json({ message: "Placement removed successfully" });
  } catch (error) {
    console.error("Error deleting placement:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPlacements,
  getPlacementRecords,
  addPlacement,
  addPlacementRecord,
  deletePlacement,
};

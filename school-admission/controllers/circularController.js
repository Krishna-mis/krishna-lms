const db = require("../config/db");

exports.getAllCirculars = async (req, res) => {
  try {
    console.log("🔄 Fetching circulars..."); // Debugging log
    const query = "SELECT * FROM circulars ORDER BY created_at DESC";

    // Debugging: Check if DB is connected
    if (!db) {
      console.error("❌ Database connection is not established!");
      return res.status(500).json({ message: "Database connection error" });
    }

    const [circulars] = await db.execute(query);

    console.log("✅ Circulars fetched successfully:", circulars);
    res.status(200).json(circulars);
  } catch (error) {
    console.error("❌ Error fetching circulars:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch circulars", error: error.message });
  }
};

exports.getCircularById = async (req, res) => {
  try {
    const query = "SELECT * FROM circulars WHERE id = ?";
    const [rows] = await db.execute(query, [req.params.id]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Circular not found" });

    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch circular" });
  }
};

exports.createCircular = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res
        .status(400)
        .json({ message: "Title and content are required" });

    const query = "INSERT INTO circulars (title, content) VALUES (?, ?)";
    const [result] = await db.execute(query, [title, content]);

    res.status(201).json({
      message: "Circular created successfully",
      circularId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create circular" });
  }
};

exports.deleteCircular = async (req, res) => {
  try {
    const query = "DELETE FROM circulars WHERE id = ?";
    const [result] = await db.execute(query, [req.params.id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Circular not found" });

    res.status(200).json({ message: "Circular deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete circular" });
  }
};

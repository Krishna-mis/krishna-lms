require("dotenv").config();
const mysql = require("mysql2/promise"); // ✅ Use "mysql2/promise" for async/await support

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "college_lms",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

(async () => {
  try {
    const connection = await db.getConnection();

    connection.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
})();

module.exports = db;

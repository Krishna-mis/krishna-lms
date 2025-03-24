const db = require("../config/db");
const nodemailer = require("nodemailer");
// Submit an application
const submitApplication = async (req, res) => {
  const {
    fullName,
    email,
    mobileNo,
    address,
    fatherName,
    motherName,
    highestEducation,
    percentage,
    courseInterest,
  } = req.body;

  if (
    !fullName ||
    !email ||
    !mobileNo ||
    !address ||
    !fatherName ||
    !motherName ||
    !highestEducation ||
    !percentage ||
    !courseInterest
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const sql = `INSERT INTO applications (fullName, email, mobileNo, address, fatherName, motherName, highestEducation, percentage, courseInterest, status) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`;

  try {
    const [result] = await db.query(sql, [
      fullName,
      email,
      mobileNo,
      address,
      fatherName,
      motherName,
      highestEducation,
      percentage,
      courseInterest,
    ]);
    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, message: "Database error" });
  }
};

// Get all applications (for admin)
const getApplications = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM applications");
    res.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Database error" });
  }
};

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use any email service
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your email app password
  },
});

// Function to send an email
const sendEmail = async (to, subject, message) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: message, // Use HTML content
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Accept or Reject an application (for admin)
const updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  console.log("Received request to update:", { id, status });

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ success: false, message: "Invalid status" });
  }

  // Get the student's email
  const [rows] = await db.query(
    "SELECT email, fullName FROM applications WHERE id = ?",
    [id]
  );
  if (rows.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "Application not found" });
  }

  const { email, fullName } = rows[0];

  // Update the status in the database
  const sql = "UPDATE applications SET status = ? WHERE id = ?";
  try {
    await db.query(sql, [status, id]);

    // Send Email Notification
    const subject = `Application ${status.toUpperCase()} - School Admission`;
    const message = `
      <h3>Hello ${fullName},</h3>
      <p>Your application has been <b style="color: ${
        status === "accepted" ? "green" : "red"
      }">${status}</b>.</p>
      <p>Thank you for applying to our school.</p>
      <br/>
      <p>Best regards,</p>
      <p>School Admission Team</p>
    `;

    await sendEmail(email, subject, message);

    res.json({
      success: true,
      message: `Application ${status} and email sent`,
    });
  } catch (error) {
    console.error("Database error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update application status" });
  }
};

module.exports = {
  submitApplication,
  getApplications,
  updateApplicationStatus,
};

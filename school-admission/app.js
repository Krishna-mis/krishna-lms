const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const placementRoutes = require("./routes/placementRoutes");
const circularRoutes = require("./routes/circularRoutes");
const admissionRoutes = require("./routes/admissionRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to School Admission API");
});

app.use("/circulars", circularRoutes);
app.use("/placements", placementRoutes);
app.use("/api/applications", admissionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

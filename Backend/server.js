require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const contectRoutes = require("./routes/contectRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/contect", contectRoutes);

app.get("/", (req, res) => {
  res.send("LearnHub API is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}






































// mongodb+srv://<db_username>:v5WUfllLNiMf3Kl7@cluster0.gq0y22p.mongodb.net/
// v5WUfllLNiMf3Kl7
// mshayanarain666_db_user
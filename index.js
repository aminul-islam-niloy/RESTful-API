const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const mongoose = require("mongoose");

const userRouter = require("./routes/user.route");

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB with the correct options
mongoose
  .connect(config.db.url, {
    
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Routes
app.use("/api/users", userRouter);

// Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
  });
});

// Start server
const PORT = config.app.port || 4000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

module.exports = app;

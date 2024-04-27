const mongoose = require("mongoose");

// Define the schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;

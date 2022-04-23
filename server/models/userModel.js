const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: ["username is required", true],
  },
  email: {
    type: String,
    unique: true,
    required: ["email is required", true],
  },
  password: {
    type: String,
    unique: true,
    required: ["password is required", true],
    minlength: 8,
  },
});

module.exports = User = mongoose.model("User", userSchema);

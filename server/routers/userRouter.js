const express = require("express");

const userRouter = express.Router();
const userController = require("../controllers/UserController");

module.exports = (userRouter) => {
  userRouter.post("/register", userController.registerUser);
};

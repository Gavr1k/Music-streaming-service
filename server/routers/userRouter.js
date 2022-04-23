const express = require("express");

const userRouter = express.Router();

module.exports = (userRouter) => {
  userRouter.get("/users", (req, res) => {
    res.send("users hello");
  });
};

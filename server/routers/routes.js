const express = require("express");

const router = express.Router();

require("./userRouter")(router);

module.exports = router;

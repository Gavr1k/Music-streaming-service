const express = require("express");

require("dotenv").config();

const app = express();

//include routers----------

//-------------------------

//app use section--------------
app.use(require("./routers/routes"));

//-----------------------------

//error handlers---------------
app.use(require("./handlers/ErrorHandler").notFoundError);
app.use(require("./handlers/ErrorHandler").errorHandler);
//-----------------------------

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Server run on port:${process.env.PORT}`);
});

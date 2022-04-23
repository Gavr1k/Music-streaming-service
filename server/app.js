const express = require("express");

require("dotenv").config();

const app = express();

//check .env variables
require("./utils/checkEnviromentVariables").envVariables();

app.use(require("body-parser").json());

//include routers----------
app.use(require("./routers/routes"));
//-------------------------

//app use section--------------

//-----------------------------

//error handlers---------------
app.use(require("./handlers/ErrorHandler").notFoundError);
app.use(require("./handlers/ErrorHandler").errorHandler);
//-----------------------------

//connect mongoDB
require("./services/init-mongodb");

app.listen(process.env.PORT, () => {
  console.log(`Server run on port:${process.env.PORT}`);
});

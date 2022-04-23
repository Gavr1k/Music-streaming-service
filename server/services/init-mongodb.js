const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL + "/" + process.env.MONGODB_NAME,
  (error) => {
    if (error) {
      console.log("MongoDB connection error!");
      return;
    }
    console.log("MongoDB is successfully connected");
  }
);

mongoose.connection.on("error", (error) => {
  console.log("Error while working with MongoDb:", error);
});

mongoose.connection.on("disconnect", () => {
  console.log("MongoDB disconnected!");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB is successfully reconnected");
});

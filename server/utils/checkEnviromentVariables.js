/**
 * Function that checks enviroment variables
 */
exports.envVariables = () => {
  const env = process.env;

  if (!(env.PORT || env.MONGODB_URL || env.MONGODB_NAME)) {
    throw new Error("error in environment variables");
  }
};

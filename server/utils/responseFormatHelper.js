/**
 * Function that creates and returns succesfull response to client
 * @param {*} res - response to client
 * @param {*} _data - data that goes to client
 * @param {*} _status - status code to client, default = 200.
 * @returns response object
 */
exports.succesfullyResponseFormat = (res, _data, _status = 200) => {
  return res.status(_status).json({
    success: true,
    data: _data,
  });
};

/**
 * Function that creates and returns response with error to client
 * @param {*} res - response to client
 * @param {*} _errorMessage - contains error message
 * @param {*} _status - status code of response
 * @returns response object
 */
exports.errorResponseFormat = (res, _errorMessage, _status) => {
  return res.status(_status).json({
    success: false,
    error: _errorMessage,
  });
};

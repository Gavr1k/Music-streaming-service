/**
 * Function that creates and returns succesfull response to client
 * @param {Object} res - response to client
 * @param {Object} _data - data that goes to client
 * @param {number} _status - status code to client, default = 200.
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
 * @param {object} res - response to client
 * @param {string} _errorMessage - contains error message
 * @param {200} _status - status code of response
 * @returns response object
 */
exports.errorResponseFormat = (res, _errorMessage, _status) => {
  return res.status(_status).json({
    success: false,
    error: _errorMessage,
  });
};

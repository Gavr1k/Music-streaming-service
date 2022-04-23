const { errorResponseFormat } = require("../utils/responseFormatHelper");

/**
 * Middleware function that controls 404 not found errors
 * @param {object} req - request
 * @param {object} res - response
 * @param {function} next - function, midlleware next
 */
function notFoundError(req, res, next) {
  const error = new Error(`${req.url} not found`);
  error.status = 404;
  next(error);
}

/**
 * Middleware function that catches server errors
 * @param {Object} error - contains error
 * @param {Object} req - request from client
 * @param {object} res  - response to server
 * @param {function} next - funtcion, midlleware next
 * @returns response object
 */
function errorHandler(error, req, res, next) {
  return errorResponseFormat(res, error.message, error.status || 500);
}

module.exports = { notFoundError, errorHandler };

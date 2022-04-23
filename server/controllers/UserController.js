const {
  succesfullyResponseFormat,
  errorResponseFormat,
} = require("../utils/responseFormatHelper");

const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailValidator = require("email-validator");

module.exports = class UserController {
  /**
   * @path {POST}
   * @name User create user
   * @param {Object} req
   * @param {Object} res
   * @response Success 200 OK
   * @response {Boolean} data.success true
   * @response {Array} data.data user info
   * @response bad request 404
   * @response {Boolean} data.success false
   * @response {Array} data.error information about error
   */
  static async registerUser(req, res) {
    try {
      const { username, email, password, passwordCheck } = req.body;

      //check is variables are empty
      if (!(username || email || password)) {
        return errorResponseFormat(
          res,
          "not all fields have been entered",
          400
        );
      }

      if (!emailValidator.validate(email)) {
        return errorResponseFormat(
          res,
          "email is not correct. Please try again",
          400
        );
      }

      //check leng of password > 8
      if (password.length < 8) {
        return errorResponseFormat(
          res,
          "The password need to be at least 8 characters long",
          400
        );
      }

      //check if password dont match passwordCheck
      if (password !== passwordCheck) {
        return errorResponseFormat(
          res,
          "password do not match. Please try again",
          400
        );
      }

      //checking if user is exist (duplicate email)
      const existEmail = await userModel.findOne({ email: email });
      if (existEmail) {
        return errorResponseFormat(res, "email is aldready in use", 400);
      }

      //hashing password for security
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      //create new user in database

      const newUser = new userModel({
        username: username,
        email: email,
        password: passwordHash,
      });

      const savedUser = await newUser.save();
      succesfullyResponseFormat(res, savedUser);
    } catch (error) {
      return errorResponseFormat(res, error.message, 400);
    }
  }
};

const { matchedData } = require('express-validator');
const usersModel = require('../models/nosql/users.model');
const { handleHttpError } = require('../utilities/handleError');
const { generateToken } = require('../utilities/handleJwt');
const { encrypt, compare } = require('../utilities/handlePassword');

const registerUser = async (req, res) => {
  try {
    req = matchedData(req);
    const processedIncomingData = {
      ...req,
      password: await encrypt(req.password),
    };
    const userData = await usersModel.create(processedIncomingData);
    userData.set('password', undefined, { strict: false });

    const data = { token: generateToken(userData), user: userData };

    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER');
  }
};

const loginUser = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel
      .findOne({ email: req.email })
      .select('name email role password');
    if (!user) return handleHttpError(res, 'USER_NOT_EXISTS', 404);
    const tokenValid = await compare(req.password, user.password);
    if (!tokenValid) return handleHttpError(res, 'PASSWORD_INVALID', 401);

    user.set('password', undefined, { strict: false });
    const data = { token: generateToken(user), user };
    return res.json({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_LOGIN');
  }
};

module.exports = { registerUser, loginUser };

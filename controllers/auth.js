const { matchedData } = require('express-validator');
const usersModel = require('../models/nosql/users.model');
const { handleHttpError } = require('../utilities/handleError');
const { generateToken } = require('../utilities/handleJwt');
const { encrypt } = require('../utilities/handlePassword');

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

module.exports = { registerUser };

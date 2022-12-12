const { matchedData } = require('express-validator');
const usersModel = require('../models/nosql/users.model');
const { handleHttpError } = require('../utilities/handleError');
const { encrypt } = require('../utilities/handlePassword');

const registerUser = async (req, res) => {
  try {
    req = matchedData(req);
    const processedIncomingData = {
      ...req,
      password: await encrypt(req.password),
    };
    const data = await usersModel.create(processedIncomingData);
    data.set('password', undefined, { strict: false });
    return res.json({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER');
  }
};

module.exports = { registerUser };

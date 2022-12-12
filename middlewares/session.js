const usersModel = require('../models/nosql/users.model');
const { handleHttpError } = require('../utilities/handleError');
const { verifyToken } = require('../utilities/handleJwt');

const authMiddleware = async (req, res, next) => {
  if (!req.headers.authorization)
    return handleHttpError(res, 'MISSING_SESSION', 401);

  const token = req.headers.authorization.split(' ').pop();

  const dataToken = verifyToken(token);
  if (!dataToken._id) return handleHttpError(res, 'ERROR_ID_TOKEN', 401);

  const user = await usersModel.findById(dataToken._id);

  req.user = user;

  next();
};
module.exports = authMiddleware;

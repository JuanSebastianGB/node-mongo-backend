const jwt = require('jsonwebtoken');

/**
 * This function takes a user object and returns a token.
 * @param user - The user object that we want to generate a token for.
 */
const generateToken = (user) => {
  const dataToCode = { _id: user._id, role: user.role };
  const expirationTime = { expiresIn: '2h' };
  return jwt.sign(dataToCode, process.env.JWT_SECRET, expirationTime);
};
/**
 * It takes a JWT token and returns the decoded token if it's valid, otherwise it returns null.
 * @param jwtToken - The JWT token to verify.
 * @returns The decoded token or null if the token is invalid.
 */
const verifyToken = (jwtToken) => {
  try {
    return jwt.verify(jwtToken, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };

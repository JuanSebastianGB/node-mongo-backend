const bcrypt = require('bcryptjs');

/**
 * It encrypts the password.
 * @param pwd - The password to be encrypted.
 */
const encrypt = async (pwd) => await bcrypt.hash(pwd, 10);

/**
 * It takes a password and a hashed password, and returns a boolean value indicating whether the password matches the hashed password
 * @param pwd - The password that the user entered.
 * @param hashPwd - The hashed password that was stored in the database.
 */
const compare = async (pwd, hashPwd) => await bcrypt.compare(pwd, hashPwd);

module.exports = { encrypt, compare };

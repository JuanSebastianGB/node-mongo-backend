const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const router = express.Router();

router.post('/login', validatorLogin, loginUser);
router.post('/register', validatorRegister, registerUser);

module.exports = router;

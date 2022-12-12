const express = require('express');
const { registerUser } = require('../controllers/auth');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const router = express.Router();

router.post('/login', validatorLogin, (req, res) => {});
router.post('/register', validatorRegister, registerUser);

module.exports = router;

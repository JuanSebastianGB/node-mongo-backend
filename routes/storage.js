const express = require('express');
const createItem = require('../controllers/storage');
const uploadMiddleware = require('../utilities/handleStorage');
const router = express.Router();

router.post('/', uploadMiddleware.single('myFile'), createItem);

module.exports = router;

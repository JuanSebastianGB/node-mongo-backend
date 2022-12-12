const express = require('express');
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require('../controllers/storage');
const uploadMiddleware = require('../utilities/handleStorage');
const { validatorGetItem } = require('../validators/storage');
const router = express.Router();

router.post('/', uploadMiddleware.single('myFile'), createItem);
router.get('/:id', validatorGetItem, getItem);
router.get('/', getItems);
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;

const express = require('express');
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks');
const authMiddleware = require('../middlewares/session');
const {
  validatorCreateItem,
  validatorGetItem,
} = require('../validators/tracks');
const router = express.Router();

router.get('/', authMiddleware, getItems);
router.get('/:id', validatorGetItem, getItem);
router.post('/', validatorCreateItem, createItem);
router.put('/:id', validatorCreateItem, validatorGetItem, updateItem);
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;

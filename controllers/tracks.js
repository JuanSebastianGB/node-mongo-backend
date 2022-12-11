const { tracksModel } = require('../models');
const usersModel = require('../models/nosql/users.model');

const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};
const getItem = (req, res) => {};
const createItem = async (req, res) => {
  const { body } = req;
  try {
    const data = await tracksModel.create(body);
    return res.json(data);
  } catch (error) {
    return res.json(error);
  }
};
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};
module.exports = { getItem, getItems, createItem, updateItem, deleteItem };

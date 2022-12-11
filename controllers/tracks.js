const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utilities/handleError');

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await tracksModel.findById(id);
    res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};
const createItem = async (req, res) => {
  const body = matchedData(req);
  try {
    const data = await tracksModel.create(body);
    return res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');
  }
};
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    return res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEMS');
  }
};
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await tracksModel.delete({ _id: id });
    return res.json(data);
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEMS');
  }
};
module.exports = { getItem, getItems, createItem, updateItem, deleteItem };
